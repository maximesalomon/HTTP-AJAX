import React from "react";
import { Link } from "react-router-dom";


function Friend(props) {
    return(
        <div>
            <div>{props.friend.name}</div>
            <div>Age: {props.friend.age}</div>
            <div>Email: {props.friend.email}</div>
            <Link to="/form">
            <button onClick={(e) => props.addDataForm(e, props.friend.id)}>Update Friend</button>
            </Link>
            <button onClick={(e) => props.deleteFriend(e, props.friend.id)}>Delete Friend</button>
        </div>
    )
}

export default Friend;