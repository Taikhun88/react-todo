import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  // ..todoList est un tableau qui représente le formulaire dont le contenu est rempli par le useState avec la variable setState
  // useState permet de modifier le contenu d'une copie de la todoList
  const [todoList, setTodoList] = useState([]);

  // On fait d'abord la fonction pour ensuite la passer dans le composent AddTodo, c'est une props
  function addTodo(content) {
    const todo = {
      // crypto est une fonction qui permet de générer un ID unique pour chaque item généré
      id: crypto.randomUUID(),
      content,
      done: false,
      edit: false,
    };
    // on vient ajouter des informations sur une copie de la todoList
    setTodoList([...todoList, todo]);
  }

  // Cette fonction va remonter jusqu'à l'élement parent pour effacer l'item concerné
  function deleteTodo(id) {
    // filter retourne un nouveau tableau sans toucher celui qui est stocké dans la variable d'état
    // Permet de dégager les todo dont l'id ne match pas
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  // Permet de déclencher la ternaire qui affiche le checkmark sur la todo en span de todoItem
  function toggleTodo(id) {
    // dans map, on fait une fonction call back avec argument todo qui retourne l'objet todo, la const et vérifie avec une ternaire si c'est le bon todo puis on met à jour la propriété done de l'objet todo avec un toggle !todo.done
    setTodoList(
      todoList.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      )
    );
  }

  function toggleTodoEdit(id) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              edit: !todo.edit,
            }
          : todo
      )
    );
  }

  function editTodo(id, content) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              edit: false,
              content,
            }
          : todo
      )
    );
  }
  return (
    <div className="d-flex flex-row justify-content-center align-items-center p-20">
      <div className="card container p-20">
        <h1 className="mb-20">Todo list</h1>
        {/* le composant AddTodo met à jour le contenu grâce à la fonction, le props addTodo.  */}
        <AddTodo addTodo={addTodo} />
        <TodoList
          todoList={todoList}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          toggleTodoEdit={toggleTodoEdit}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
}

export default App;
