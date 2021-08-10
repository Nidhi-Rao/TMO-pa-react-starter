import React, { useState } from 'react';

function AddRecipe({onSubmit}){
    const [recipeName, setRecipeName] = useState("");

    const onAddRecipeName = (e) => {
        setRecipeName(e.target.value);
    }

    return(
        <>
        <div>
            <label>Recipe Name</label>
            <input type = "text" onBlur = {(e) => onAddRecipeName(e)}/>
            <label>Recipe Instructions</label>
            <input type = "text"/>
            <div className="submitRecipeButton">
                <button onClick = {() => onSubmit(recipeName)}>Submit</button>        
            </div>
        </div>
        </>
    )
}

export default AddRecipe;