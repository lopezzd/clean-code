import { useState, FormEvent } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import * as Input from "./components/Input";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  // Funções nomeadas com handle e on para indicar que são manipuladores de eventos
  function handleAddTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const task = formData.get("task") as string;

    if (task) {
      setTasks((prevState) => [...prevState, task]);
    }
  }

  const isTodoListEmpty = tasks.length === 0;

  return (
    <>
      <Header
        onCreateTask={() => {
          console.log("Task created");
        }}
      />
      <div>
        <h1>Add Task</h1>
        // Componentização do input
        <form onSubmit={handleAddTask}>
          <Input.Root>
            <Input.Label htmlFor="task" id="task" />
            <Input.FormField />
            <Input.ErrorMessage message="Erro" />
          </Input.Root>

          <button type="submit">Add task</button>
        </form>
        <article>
          //Render condicional para exibir mensagem quando a lista de tarefas está vazia
          {isTodoListEmpty && <p>No tasks available</p>}

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
