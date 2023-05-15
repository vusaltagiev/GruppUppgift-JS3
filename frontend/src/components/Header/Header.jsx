import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import Logo from "../../images/Logo.svg";
import { HiShoppingCart } from "react-icons/hi";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Header = ({ toggleTheme }) => {
  const [theme, setTheme] = useState("light");
  const { user, logout } = useContext(AuthContext);

  const handleToggle = () => {
    toggleTheme();
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="header-wrapper">
      <header className="container">
        <Link to="/" className="header-logo">
          <img src={Logo} alt="" />
        </Link>

        <div className="header-nav">
          <nav>
            {theme === "light" ? (
              <BsMoonFill
                className="theme-icon"
                size={19}
                onClick={handleToggle}
              />
            ) : (
              <BsSunFill
                className="theme-icon"
                size={19}
                onClick={handleToggle}
              />
            )}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            {!user ? (
              <NavLink to="/login">Login</NavLink>
            ) : (
              <NavLink to="/profile">User Profile</NavLink>
            )}
          </nav>
          <button className="shopping-cart-button">
            <HiShoppingCart size={25} />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
