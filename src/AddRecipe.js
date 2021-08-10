import React, { useState } from 'react';
import styles from './AddRecipe.css';

function AddRecipe({onSubmit}){
    const [recipeName, setRecipeName] = useState("");

    const onAddRecipeName = (e) => {
        setRecipeName(e.target.value);
    }

    return(
        <>
        <form>
            <label>Recipe Name</label>
            <input role="textbox" label = "Recipe name" type="text" name="Recipe name" onChange = {(e) => onAddRecipeName(e)}/>
            <label>Recipe Instructions</label>
            <input role="textbox" label = "Recipe Instructions" type="text" name="instructions"/>
            <div className="submitRecipeButton">
                <button onClick = {() => onSubmit(recipeName)}>Submit</button>        
            </div>
        </form>
        </>
    )
}

export default AddRecipe;