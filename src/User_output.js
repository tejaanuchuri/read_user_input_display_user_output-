import React from 'react';

const userOutput = (props) =>{
    return (
        <div className="userOutput">
            <p>UserName: {props.userName}</p>
            <p> I hope I will overwrie it...! </p>
        </div>
    );
};
export default userOutput;