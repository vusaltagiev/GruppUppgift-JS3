import Details from "./pages/Details/Details";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./style.scss";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/details/:productId" element={<Details />} />
    </Routes>
  );
};

export default App;
