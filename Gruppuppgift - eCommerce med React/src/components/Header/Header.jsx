import { Link } from "react-router-dom";
import "./Header.scss";
import Logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div className="header-wrapper">
      <header className="container">
        <Link to="/" className="header-logo">
          <img src={Logo} alt="" />
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
