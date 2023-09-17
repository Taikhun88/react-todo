import TodoItem from './TodoItem';

// on ajoute les appels de fonction en paramètre de la méthode TodoList
function TodoList( { todoList, deleteTodo } ) {
    // Pour récupérer les todo créée 
    return todoList.length ? (
        <ul>
            { todoList.map( todo => (
                // la prop deleteTodo fait directement appel à la fonction deleteTodo avec son id
                <TodoItem key={ todo.id } todo={ todo } deleteTodo={ () => deleteTodo(todo.id)  }/>
            )) }
        </ul>
    ) : <p>Aucune todo pour le moment</p>;
}

export default TodoList;