import { useState } from "react";

function AddTodo({ addTodo }) {
  // c'est le texte saisi en input qui est mis à jour dans setValue grâce au hook useState
  // Cette valeur mise à jour est bindée, rattachée à value en intégrant une propriété value dans la balise input
  const [value, setValue] = useState("");

  // e fait référence à l'envent onChange sur l'input
  function handleChange(e) {
    // récupère la valeur saisie sur l'élément ciblé qui est l'input au onChange
    const inputValue = e.target.value;
    // Appelle la value mise à jour avec le hook useState
    setValue(inputValue);
  }

//   Permet de soumettre le contenu de l'input lors de l'appui sur touche entrer
  function handleKeyDown(e) {
    // fait référence à la propriété de l'event onChange qui est le code la touche de clavier
    if (e.code === "Enter" && value.length) {
      // ajoute la value
      addTodo(value);
      // remet à zéro la valeur de l'input après avoir ajouté
      setValue("");
    }
  }

  function handleClick() {
    // vérifie s'il y a du contenu ou pas
    if (value.length) {
      // ajoute la value
      addTodo(value);
      // remet à zéro la valeur de l'input après avoir ajouté
      setValue("");
    }
  }

  return (
    <div className="d-flex flex-row justify-content-center align-items-center mb-20">
      {/* value fait appel à value pour être mis à jour grâce au hook useState */}
      <input
        type="text"
        placeholder="Ajouter une todo"
        className="mr-15 flex-fill"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={value}
      />
      <button className="btn btn-primary" onClick={handleClick}>
        Ajouter
      </button>
    </div>
  );
}

export default AddTodo;
