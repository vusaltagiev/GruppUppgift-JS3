import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import Logo from "../../images/Logo.svg";
import { FaShoppingCart } from "react-icons/fa";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";

const Header = ({ toggleTheme }) => {
  const [theme, setTheme] = useState('light')

  const handleToggle = () => {
    toggleTheme()
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="header-wrapper">
      <header className="container">
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="header-logo">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="col-md-6">
        <div className="header-nav">
          <nav>
            {
              theme === 'light' ? (

                <BsMoonFill className="theme-icon" size={19} onClick={handleToggle}/>
              ): (
                <BsSunFill className="theme-icon" size={19} onClick={handleToggle}/>
              )
            }
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/login">Login</NavLink>
          </nav>
          <button className="shopping-cart-button">
            <FaShoppingCart size={20} />
          </button>
          </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
