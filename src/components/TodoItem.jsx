export default function TodoItem({
  id,
  title,
  completed,
  toggleToDo,
  deleteTodo,
}) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleToDo(id, e.target.checked)}
        />
        {title}
      </label>
      <button
        className="btn btn-danger"
        //it had to be a function otherwise it will pass the return value of deleteTodo to the onClick event handler
        onClick={() => {
          deleteTodo(id);
        }}
      >
        Remove
      </button>
    </li>
  );
}
