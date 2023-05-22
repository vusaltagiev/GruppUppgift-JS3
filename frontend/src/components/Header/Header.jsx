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
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useSelector((state) => state.cartItems);
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
            <NavLink to="/">Hem</NavLink>
            <NavLink to="/products">Produkter</NavLink>
            <NavLink to="/contact">Kontakt</NavLink>
            {!user ? (
              <NavLink to="/login">Inloggning</NavLink>
            ) : (
              <NavLink to="/profile">Användar Profil</NavLink>
            )}
          </nav>
            <div className="cart-wrapper">  
              <button className="shopping-cart-button" onClick={() => setIsCartOpen(!isCartOpen)}>
              <FaShoppingCart size={20} />
              </button>
              {cartItems.length > 0 && <span>{cartItems.length}</span>}{isCartOpen && <Cart />}
            </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
