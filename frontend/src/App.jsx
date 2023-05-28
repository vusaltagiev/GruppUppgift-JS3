import Details from "./pages/Details/Details";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./pages/Products/Products";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Contact from "./pages/Contact/Contact";
import { useContext, useState } from "react";
import Profile from "./pages/Profile/Profile";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import ScrollToTop from "./components/ScrollToTop";
import Reset from "./pages/Reset/Reset";

const App = () => {
  const [theme, setTheme] = useState("light");
  const { user } = useContext(AuthContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app ${theme === "light" ? "light-theme" : "dark-theme"}`}>
      <Header toggleTheme={toggleTheme} />
      <main className="app-main">
        <ScrollToTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/details/:productId" element={<Details />} />
          <Route
            path="/profile"
            element={user ? <Profile /> : <Navigate to="/" />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
