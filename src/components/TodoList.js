import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

// on ajoute les appels de fonction en paramètre de la méthode TodoList
function TodoList({ todoList, deleteTodo, toggleTodo, toggleTodoEdit }) {
  // Pour récupérer les todo créée
  return todoList.length ? (
    <ul>
      {/* On fait une ternaire dans la map pour retourner soit EditTodo soit TodoItem */}
      {todoList.map((todo) =>
        todo.edit ? (
          <EditTodo key={todo.id} todo={todo} />
        ) : (
          // la prop deleteTodo fait directement appel à la fonction deleteTodo avec son id
          <TodoItem
            key={todo.id}
            todo={todo}
            editTodo={() => toggleTodoEdit(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
            toggleTodo={() => toggleTodo(todo.id)}
          />
        )
      )}
    </ul>
  ) : (
    <p>Aucune todo pour le moment</p>
  );
}

export default TodoList;
