import React from "react";
import Friend from "./Friend";

function Friends(props) {
    return(
        <div>
            {props.friends.map(friend => {
                return (
                <Friend 
                    key={friend.id} 
                    friend={friend} 
                    deleteFriend={props.deleteFriend} 
                    addDataForm={props.addDataForm}
                />)
            })}
        </div>
    )
}

export default Friends;