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
        <Route path="/details/:productId" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
