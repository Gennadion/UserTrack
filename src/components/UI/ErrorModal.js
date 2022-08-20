import React from "react";
import { Card } from "../Users/AddUser";
import { Button } from "../Users/AddUser";

const ErrorModal = (props) => {
  return (
    <Card>
      <div className="backdrop"></div>
      <div className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <Button>Okay</Button>
        </footer>
      </div>
    </Card>
  );
};

export default ErrorModal;