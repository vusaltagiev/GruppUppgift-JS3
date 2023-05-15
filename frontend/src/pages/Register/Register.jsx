import "./Register.scss";

const Register = () => {
  return (
    <div className="register-page">
      <form className="register-form">
        <h2>Register</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
