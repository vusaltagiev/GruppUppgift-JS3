import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import Logo from "../../images/Logo.svg";
import { HiShoppingCart } from "react-icons/hi";

const Header = () => {
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
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
