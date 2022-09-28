import React, {useState} from "react";
import "NewUserForm.css";

const NewUserForm = (props) => {

    const [userName, setUserName] = useState("");
    const [userAge, setUserAge] = useState("");

    const nameChangedHandler = (event) => {
        setUserName(event.target.value.trim());
    };
    const ageChangedHandler = (event) => {
        setUserAge(event.target.value.trim());
    };
    const formSubmissionHandler = () => {
        const newUser = {
            userName: userName,
            userAge: userAge
        }
        props.onAddUser(newUser);
    }
    return(
        <form onSubmit={formSubmissionHandler}>
            <div>
                <label>Username</label>\
                <input type="text" onChange={nameChangedHandler}></input>
                <label>Age in Years</label>
                <input type="text" onChange={ageChangedHandler}></input>
                <button type="submit">Add user</button>

            </div>
        </form>
    )

}
export default NewUserForm;