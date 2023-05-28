import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import "../Login/Login.scss";

const Reset = () => {
  return (
    <div className="container loginPage">
       <Form className="loginForm">
      <p className="disclaimer">Reset Password</p>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="LoginLabel">E-mail*</Form.Label>
        <Form.Control className="loginInput" type="email" />
      </Form.Group>
 
      <Button variant="danger" type="submit" className="loginBtn">
          Submit
        </Button>
        </Form>
    </div>
  );
};

export default Reset;
