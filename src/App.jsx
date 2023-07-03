import "./styles.css";
import { useEffect, useState } from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";
export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  //every time the state passed second to the useEffect hook changes, the callback function is called
  //cant't render hooks conditionally
  useEffect(() => {
    //saves the array to storage
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    if (title.trim() == "") return;
    setTodos((prev) => {
      return [
        ...prev,
        { id: crypto.randomUUID(), title: title.trim(), completed: false },
      ];
    });
  }

  function toggleToDo(id, completed) {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) return { ...todo, completed: completed };
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <TodoList todos={todos} toggleToDo={toggleToDo} deleteTodo={deleteTodo} />
    </>
  );
}
