import React, { useState } from "react";

function RecipeCreate(props) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialFormState = {
    name: "",
    cuisine: "",
    ingredients: "",
    photo: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const changeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.uploadRecipe(formData);
    setFormData(initialFormState);
  };

  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr>
            <td htmlFor="name">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                onChange={changeHandler}
                value={formData.name}
              />
            </td>
            <td>
              <input
                type="text"
                id="cuisine"
                name="cuisine"
                placeholder="Cuisine"
                onChange={changeHandler}
                value={formData.cuisine}
              />
            </td>
            <td>
              <input
                type="URL"
                id="photo"
                name="photo"
                placeholder="URL"
                onChange={changeHandler}
                value={formData.photo}
              />
            </td>
            <td>
              <textarea
                type="text"
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                onChange={changeHandler}
                value={formData.ingredients}
              />
            </td>
            <td>
              <textarea
                type="text"
                id="preparation"
                name="preparation"
                placeholder="Preparation"
                onChange={changeHandler}
                value={formData.preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
