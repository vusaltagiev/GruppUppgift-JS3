import { useContext, useState } from "react";
import "./Register.scss";
import { AuthContext } from "../../contexts/AuthContext";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { setUser } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !password) {
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

        setUser(jwt_decode(token));
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
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
