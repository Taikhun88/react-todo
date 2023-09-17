// editTodo fait référence à la fonction toggleTodo qui est renommé editTodo dans TodoList.js
function TodoItem({ todo, deleteTodo, toggleTodo, editTodo }) {
  return (
    <li className="mb-10 d-flex flex-row justify-content-center align-items-center p-10">
      {/* On intègre une ternaire qui affiche le checkmark si la propriété est true ou false d'après l'objet Todo dans App.js */}
      <span className="flex-fill mr-15">
        {" "}
        {todo.content} {todo.done && "( ✓ )"}
      </span>
      <button onClick={toggleTodo} className="btn btn-primary mr-15">Valider</button>
      <button onClick={editTodo} className="btn btn-primary mr-15">
        Modifier
      </button>
      <button
        // La fonction callback deleteTodo prend déjà pour paramètre l'id donc plus besoin de les préciser ici sur TodoList.js
        onClick={deleteTodo}
        className="btn btn-reverse-primary mr-15"
      >
        Supprimer
      </button>
    </li>
  );
}

export default TodoItem;
