import React from "react";

function Form(props) {
    function handleSubmit(e) {
        e.preventDefault();
        if (props.selected) {
            props.updateFriend()
         } else {
            props.addFriend()
         }
    }
    return (
        <div>
            <h2>{props.selected ? "Update friend:" : "Add a new friend"}</h2>
            <form>
                <div><input
                    type="text"
                    name="name"
                    value={props.friend.name}
                    placeholder="Name"
                    onChange={props.update}
                /></div>
                <div><input
                    type="number"
                    name="age"
                    value={props.friend.age}
                    placeholder="Age"
                    onChange={props.update}
                /></div>
                <div><input
                    type="text"
                    name="email"
                    value={props.friend.email}
                    placeholder="Email"
                    onChange={props.update}
                /></div>
                <div><button onClick={handleSubmit}>
                    {props.selected ? "Update Friend" : "Add Friend"}
                </button></div>
            </form>
        </div>
    )
}

export default Form;