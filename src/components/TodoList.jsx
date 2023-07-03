import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleToDo, deleteTodo }) {
  return (
    <div>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && <div> No todos</div>}
        {todos.map((todo) => {
          //in react each element has to have a unique key for performance optimization
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleToDo={toggleToDo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </div>
  );
}
