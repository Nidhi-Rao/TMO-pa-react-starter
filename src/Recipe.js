import React, { useState } from 'react';
import AddRecipe from './AddRecipe';

function Recipe () {
    const [addRecipe, setAddRecipe] = useState(false);
    const [hideMyRecipe, setHideMyRecipe] = useState(true);
    const [recipeNames, setRecipeNames] = useState([]);

    const onAddRecipeClicked = () => {
        setAddRecipe(true);
        setHideMyRecipe(false);
    }

    const onSubmit = (recipeName) => {
        setRecipeNames(arr => [...arr, recipeName]);
        setHideMyRecipe(true);
        setAddRecipe(false);

    }

    const displayRecipeNames = () => {
        return recipeNames.map( (name, index ) => {
            return (
                <li key={index}>
                    <p role="textbox" name="Recipe name">{name}</p>
                </li>
            )
        })
    } 
        
    return (
        <>
            <h1 role="heading">My Recipes</h1>
                {
                    hideMyRecipe && (
                    <div>
                        
                        {
                            recipeNames.length === 0 && (
                            <div>
                                <p>There are no recipes to list</p>
                            </div>
                            )
                        }
                        {
                            recipeNames && 
                            <ul>
                                {displayRecipeNames()}
                            </ul>
                        }
                        
                        <div>
                            <button role="button" onClick={() => onAddRecipeClicked()}>Add Recipe</button>
                        </div>
                    </div>
                    )
                }
            {addRecipe && <AddRecipe onSubmit={onSubmit}/>}
        </>
    )
}


export default Recipe;