interface HeaderProps {
  onCreateTask: () => void;
}

// Função desaclopada do componente, fazendo com que seja reutilizável em outros contextos

export function Header({ onCreateTask }: HeaderProps) {
  return (
    <header>
      <h1>Todo List</h1>
      <button onClick={onCreateTask}></button>
    </header>
  );
}
