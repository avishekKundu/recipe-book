import React, { useState } from "react";
import './recipeBook.css';

const RecipeBook = () => {
    const [recipeList, setRecipeList] = useState([]);
    const [recipes, setRecipes] = useState({
        name: '',
        ingredients: '',
        category: '',
    });

    const addRecipe = () => {
        if (recipes.name.trim() === '' || recipes.ingredients.trim === '' || recipes.category.trim === '')
            return;
        setRecipeList([...recipeList, recipes]);
        setRecipes({ name: '', ingredients: '', category: '' });
    };

    const deleteRecipe = (index) => {
        const updateRecipeList = [...recipeList];
        updateRecipeList.splice(index, 1);
        setRecipeList(updateRecipeList);
    }

    return (
        <>
            <div >
                <div>
                    <center>Recipe Book</center>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Enter recipe name"
                        value={recipes.name} onChange={(e) => setRecipes({ ...recipes, name: e.target.value })} /> <br />
                    <br /> <textarea
                        placeholder="Enter recipe ingredients"
                        value={recipes.ingredients} onChange={(e) => setRecipes({ ...recipes, ingredients: e.target.value })} /> <br />
                    <br /> <input
                        type="text"
                        placeholder="Enter category"
                        value={recipes.category} onChange={(e) => setRecipes({ ...recipes, category: e.target.value })} /> <br />
                    <br /> <button onClick={addRecipe} className="btn btn-primary btnAdd">Add Recipe</button>
                </div>
                <div className="container-fluid p-3 border border-dark border-3 recipeContainer">
                    <ul className="list-group" id="recipe-list">
                        {recipeList.map((recipe, index) => (
                            <li key={index} className="recipeLists">
                                <div className="card p-3 listContainer">
                                    <div className="card-body cardBody">
                                        <p className="card-text recipeCategory">Category: {recipe.category}</p>
                                        <p className="card-text recipeName">Recipe: {recipe.name}</p>
                                        <p className="card-text recipeIngredient">Ingredients:  {recipe.ingredients}</p>
                                        <button onClick={() => deleteRecipe(index)} className="btn btn-primary btnRemove">Delete</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default RecipeBook;