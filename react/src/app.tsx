import { useState, FormEvent } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  function handleAddTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const task = formData.get("task") as string;

    if (task) {
      setTasks((prevState) => [...prevState, task]);
    }
  }

  return (
    <>
      <Header onCreateTask={()=>{console.log("Task created")}}/>
      <div>
        <h1>Add Task</h1>

        <form onSubmit={handleAddTask}>
          <input type="text" name="task" />
          <button type="submit">Add task</button>
        </form>

        <article>
          <ul>
            {tasks.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
      <Footer />
    </>
  );
}

export default App;
