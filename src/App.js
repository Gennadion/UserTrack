import React, { useState } from "react";
import "./App.css";
import { AddUser } from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uId, uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { id: uId, name: uName, age: uAge }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
