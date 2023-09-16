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
      edit: false
    }
    // on vient ajouter des informations sur une copie de la todoList
    setTodoList([...todoList, todo])
  }

  return (
    <div className="d-flex flex-row justify-content-center align-items-center p-20">
      <div className="card container p-20">
        <h1 className="mb-20">Todo list</h1>
        {/* le composant AddTodo met à jour le contenu grâce à la fonction, le props addTodo.  */}
          <AddTodo addTodo={ addTodo }/>
          <TodoList />
      </div>
    </div>
  );
}

export default App;
