import React, { useState } from 'react';
import AddRecipe from './AddRecipe';

function Recipe () {
    const [addRecipe, setAddRecipe] = useState(false);
    const [hideMyRecipe, setHideMyRecipe] = useState(true);
    const [recipeName, setRecipeName] = useState('');

    const onAddRecipeClicked = () => {
        setAddRecipe(true);
        setHideMyRecipe(false);
    }

    const onSubmit = (recipeName) => {
        setRecipeName(recipeName);
        setHideMyRecipe(true);
        setAddRecipe(false);

    }
        
    return (
        <>
            <h1 role="heading">My Recipes</h1>
                {
                    hideMyRecipe && recipeName && (
                        <ul>
                            <li>
                                {recipeName}
                            </li>
                        </ul>
                    )
                }
                {
                    hideMyRecipe && (
                    <div>
                        
                        {
                            recipeName.length === 0 && (
                            <div>
                                <p>There are no recipes to list</p>
                            </div>
                            )
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