import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import Logo from "../../images/Logo.svg";
import { HiShoppingCart } from "react-icons/hi";
import {BsMoonFill, BsSunFill} from 'react-icons/bs'
import { useState } from "react";

const Header = ({ toggleTheme }) => {
  const [theme, setTheme] = useState('light')

  const handleToggle = () => {
    toggleTheme()
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="header-wrapper">
      <header className="container">
        <Link to="/" className="header-logo">
          <img src={Logo} alt="" />
        </Link>
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
          {/* Shopping Cart */}
          <button className="shopping-cart-button">
            <HiShoppingCart size={25} />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
