import React, { useState } from 'react';
import AddRecipe from './AddRecipe';

function Recipe () {
    const [addRecipe, setAddRecipe] = useState(false);
    const [hideMyRecipe, setHideMyRecipe] = useState(true);
    const [recipeName, setRecipeNames] = useState('');

    const onAddRecipeClicked = () => {
        setAddRecipe(true);
        setHideMyRecipe(false);
    }

    const onSubmit = (recipeName) => {
        setRecipeNames(recipeName);
        setHideMyRecipe(true);
        setAddRecipe(false);

    }

    const displayRecipeNames = () => {
        return (
            <li>
                <p role="textbox" name="Recipe name">{recipeName}</p>
            </li>
        )
    } 
        
    return (
        <>
            <h1 role="heading">My Recipes</h1>
                {
                    hideMyRecipe && (
                    <div>
                        
                        {
                            recipeName.length === 0 && (<div>
                                <p>There are no recipes to list</p>
                            </div>)
                        }
                        {
                            recipeName && 
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