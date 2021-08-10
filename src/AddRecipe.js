import React, { useState } from 'react';
import styles from './AddRecipe.css';

function AddRecipe({onSubmit}){
    const [recipeName, setRecipeName] = useState("");

    const onAddRecipeName = (e) => {
        setRecipeName(e.target.value);
    }

    return(
        
        <form name="AddRecipeForm">
            <label>Recipe Name</label>
            <input role="textbox" aria-label="Recipe name" type="text" onChange = {(e) => onAddRecipeName(e)}></input>
            <label>Recipe Instructions</label>
            <input role="textbox" label="instructions" type="text"></input>
            <div className="submitRecipeButton">
                <button onClick = {() => onSubmit(recipeName)}>Submit</button>        
            </div>
        </form>
        
    )
}

export default AddRecipe;