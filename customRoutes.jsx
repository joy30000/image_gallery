import { Routes, Route } from "react-router-dom";
import Home from "./home";
import FetchImages from "./fetchImages";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<FetchImages />} />
      <Route path="/home/:id" element={<Home />} />
    </Routes>
  );
}

export default CustomRoutes;
