import React from 'react';

const userInput = (props) =>{
    return (
        <div className="Userinput">
            <h1>UserName:</h1>
            <input type="text" onChange={props.changed} value={props.currentUserName}/>.
        </div>
    )
};
export default userInput;