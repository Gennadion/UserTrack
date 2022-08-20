import React, { useState } from "react";
import styled from "styled-components";
import ErrorModal from "../UI/ErrorModal";

const Card = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  max-width: 40rem;
  width: 90%;
  margin: 2rem auto;

  .input {
    padding: 1rem;
  }

  .input label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .input input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
  }

  .input input:focus {
    outline: none;
    border-color: #4f005f;
  }

  .users {
    margin: 2rem auto;
    width: 90%;
    max-width: 40rem;
  }

  .users ul {
    list-style: none;
    padding: 1rem;
  }

  .users li {
    border: 1px solid #ccc;
    margin: 0.5rem 0;
    padding: 0.5rem;
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.75);
  }

  .modal {
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 10px;
    max-width: 40rem;
    width: 90%;
    margin: 2rem auto;
    position: fixed;
    top: 30vh;
    left: 10%;
    width: 80%;
    z-index: 100;
    overflow: hidden;
  }

  .header {
    background: #4f005f;
    padding: 1rem;
  }

  .header h2 {
    margin: 0;
    color: white;
  }

  .content {
    padding: 1rem;
  }

  .actions {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  @media (min-width: 768px) {
    .modal {
      left: calc(50% - 20rem);
      width: 40rem;
    }
  }
`;

const Button = styled.button.attrs((props) => ({
  type: props.type,
  onClick: props.onClick,
}))`
  font: inherit;
  border: 1px solid #4f005f;
  background: #4f005f;
  color: white;
  padding: 0.25rem 1rem;
  cursor: pointer;

  &:hover,
  &:active {
    background: #741188;
    border-color: #741188;
  }

  &:focus {
    outline: none;
  }
`;

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)."
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age."
      })
      return;
    }

    const userId = Math.random().toString();

    props.onAddUser(userId, enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card>
        <form className="input" onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export { AddUser, Card, Button };
