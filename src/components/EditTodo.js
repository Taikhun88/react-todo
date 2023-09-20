import { useState } from "react";

function EditTodo({ todo, editTodo, cancelEditTodo }) {
  const [value, setValue] = useState(todo.content);

  function handleChange(e) {
    const inputValue = e.target.value;

    setValue(inputValue);
  }

  function handleKeyDown(e) {
    if (e.code === "Enter" && value.length) {
      editTodo(value);
      setValue("");
    }
  }

  function handleClick() {
    if (value.length) {
      editTodo(value);
      setValue("");
    }
  }

  return (
    <div className="d-flex flex-row justify-content-center align-items-center mb-20">
      <input
        type="text"
        placeholder="Ajouter une todo"
        className="mr-15 flex-fill"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={value}
      />
      <button className="btn btn-reverse-primary mr-15" onClick={ cancelEditTodo }>
        Annuler
      </button>
      <button className="btn btn-primary" onClick={handleClick}>
        Sauvegarder
      </button>
    </div>
  );
}

export default EditTodo;
