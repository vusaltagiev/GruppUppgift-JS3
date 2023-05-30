import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { setUser } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    } else {
      try {
        const res = await fetch("http://localhost:7000/login", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const { token } = await res.json();

        setUser({ user: jwt_decode(token), token: token });

        navigate("/");
      } catch (error) {
        setError("Something went wrong");
      }
    }
  };
  return (
    <div className="container loginPage">
      <Form className="loginForm" onSubmit={handleLogin}>
        <p className="disclaimer">Please Login to Your Account</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="LoginLabel">
            E-mail* <Link to="/register">Don't have a Account yet?</Link>
          </Form.Label>
          <Form.Control
            className="loginInput"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="LoginLabel">
            Password* <Link to="/reset">Forgot Your Password ?</Link>
          </Form.Label>
          <Form.Control
            className="loginInput"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Please keep me logged in" />
        </Form.Group>
        {error && error}
        <Button variant="danger" type="submit" className="loginBtn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
