import Details from "./pages/Details/Details";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./style.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" component={<Products />} />
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
