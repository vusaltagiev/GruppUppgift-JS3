import Details from "./pages/Details/Details";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./pages/Products/Products";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Contact from "./pages/Contact/Contact";
import { ThemeContext } from "./contexts/ThemeContext";
import { useState } from "react";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`app ${theme === "light" ? "light-theme" : "dark-theme"}`}
      >
        <Header toggleTheme={toggleTheme} />
        <main className="app-main">
          <ScrollToTop />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/details/:productId" element={<Details />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" component={<Register />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
