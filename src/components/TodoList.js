import TodoItem from './TodoItem';

function TodoList( { todoList } ) {
    // Pour récupérer les todo créée 
    return todoList.length ? (
        <ul>
            { todoList.map( todo => <TodoItem todo={ todo }/>) }
        </ul>
    ) : <p>Aucune todo pour le moment</p>;
}

export default TodoList;