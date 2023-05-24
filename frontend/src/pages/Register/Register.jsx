import { useContext, useState } from "react";
import "./Register.scss";
import { AuthContext } from "../../contexts/AuthContext";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { setUser } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    } else {
      try {
        const res = await fetch("http://localhost:7000/register", {
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
    <div className="register-page">
      <form className="register-form" onSubmit={handleRegister}>
        <h2>Register</h2>
        <div className="">
          <div className="row mb-2">
            <div className="col">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" />
            </div>
            <div className="col">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col">
              <label htmlFor="streetName">Street Name</label>
              <input type="text" id="streetName" />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col">
              <label htmlFor="postalCode">Postal Code</label>
              <input type="text" id="postalCode" />
            </div>
            <div className="col">
              <label htmlFor="city">City</label>
              <input type="text" id="city" />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col">
              <label htmlFor="mobile">Mobile</label>
              <input type="text" id="mobile" />
            </div>
            <div className="col">
              <label htmlFor="company">Company</label>
              <input type="text" id="company" />
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email*</label>
            <input
              required
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password*</label>
            <input
              required
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="confirmPassword">Confirm Password*</label>
            <input
              required
              id="confirmPassword"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {error && <p>{error}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
