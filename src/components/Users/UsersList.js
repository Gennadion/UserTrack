import React from "react";
import {Card} from "./AddUser";

const UsersList = (props) => {
  return (
    <Card>
      <div className="users">
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default UsersList;
