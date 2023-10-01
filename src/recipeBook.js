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
        if (recipes.name.trim() === '' || recipes.ingredients.trim() === '' || recipes.category.trim() === '')
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
            <div className="container-fluid p-4 headContainer">
                <div className="container-fluid p-2 titleHead">
                    <center>Recipe Book</center>
                </div>
                <div className="main_page">
                    <div className="recipe_main">
                        <div className="container-fluid d-flex justify-content-between inputContainer">
                            <div >
                                <input
                                    className="border border-4 border-secondary recipeNameContainer"
                                    type="text"
                                    placeholder="Enter recipe name"
                                    value={recipes.name} onChange={(e) => setRecipes({ ...recipes, name: e.target.value })} />
                            </div>

                            <div>
                                <input
                                    className="border border-4 border-secondary categoryContainer"
                                    type="text"
                                    placeholder="Enter category"
                                    value={recipes.category} onChange={(e) => setRecipes({ ...recipes, category: e.target.value })} />

                            </div>
                            <div>
                                <textarea
                                    className="border border-4 border-secondary ingredientContainer"
                                    placeholder="Enter recipe ingredients"
                                    value={recipes.ingredients} onChange={(e) => setRecipes({ ...recipes, ingredients: e.target.value })} />
                            </div>
                            <div className="button_base">
                                <button onClick={addRecipe} className="add_btn border border-4 border-secondary">Add Recipe</button>
                            </div>
                        </div>
                        <div className="container-fluid recipeListContainer">
                            <ul className="list-group recipe-list">
                                {recipeList.map((recipe, index) => (
                                    <li key={index} className="recipeLists">
                                        <div className="card p-2 listContainer">
                                            <div className="card-body cardBody">
                                                <p className="card-text recipeCategory"><span>Category:</span> {recipe.category}</p>
                                                <p className="card-text recipeName"><span>Recipe:</span> {recipe.name}</p>
                                                <p className="card-text recipeIngredient"><span>Ingredients:</span>  {recipe.ingredients}</p>
                                                <button onClick={() => deleteRecipe(index)} className="btn btn-danger border border-3 btnRemove">Delete</button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default RecipeBook;