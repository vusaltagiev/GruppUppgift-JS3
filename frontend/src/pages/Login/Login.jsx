import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container loginPage">
      <Form className="loginForm">
        <p className="disclaimer">Please Login to Your Account</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="LoginLabel">
            E-mail* <Link to="/register">Don't have a Account yet?</Link>
          </Form.Label>
          <Form.Control className="loginInput" type="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="LoginLabel">
            Password* <a href="#">Forgot Your Password ?</a>
          </Form.Label>
          <Form.Control className="loginInput" type="password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Please keep me logged in" />
        </Form.Group>
        <Button variant="danger" type="submit" className="loginBtn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
