import Details from "./pages/Details/Details";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
Register;
import Products from "./pages/Products/Products";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/details/:productId" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" component={<Register />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
