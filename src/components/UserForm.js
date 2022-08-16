import { useState } from "react";
import "./UserForm.css";
const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  /* const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  }); */

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
    /* setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    }); */
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      username: enteredUsername,
      age: enteredAge,
    };
    props.onSaveExpenseData(expenseData);
    setEnteredUsername('');
    setEnteredAge('');
  };

  return (
    <form onSubmit={submitHandler}>
        <div className="new-user__control">
          <label>Username</label>
          <input
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
        </div>
        <div className="new-user__control">
          <label>Age</label>
          <input
            type="number"
            min="0"
            step="1"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
      </div>
      <div className="new-user__actions">
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default UserForm;