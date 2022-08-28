import React from "react";
import ReactDOM from "react-dom";
import { Card } from "../Users/AddUser";
import { Button } from "../Users/AddUser";

const Backdrop = (props) => {
  return <Card><div className="backdrop" onClick={props.onConfirm}></div></Card>;
};

const ModalOverlay = (props) => {
  return (
    <Card>
      <div className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </div>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <Card>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("modal-root")
      )}
    </Card>
  );
};

export default ErrorModal;
