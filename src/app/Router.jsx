import { Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../components/Home.jsx";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default Router;
