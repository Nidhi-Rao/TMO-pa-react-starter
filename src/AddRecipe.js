import React, { useState } from 'react';
import styles from './AddRecipe.css';

function AddRecipe({onSubmit}){
    const [recipeName, setRecipeName] = useState("");

    const onAddRecipeName = (e) => {
        setRecipeName(e.target.value);
    }

    return(
        
        <form>
            <label>Recipe name</label>
            <input role="textbox" label="Recipe name" type="text" name="Recipe name" onChange = {(e) => onAddRecipeName(e)}></input>
            <label>Recipe Instructions</label>
            <input role="textbox" label="instructions" type="text" name="instructions"></input>
            <div className="submitRecipeButton">
                <button onClick = {() => onSubmit(recipeName)}>Submit</button>        
            </div>
        </form>
        
    )
}

export default AddRecipe;