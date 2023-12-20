import "./App.css";
import { Route, Routes } from "react-router-dom";
import Foodblog from "./Pages/Foodblog";
import FoodNinja from "./Pages/FoodNinja";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      <BackToTop />
      <Routes>
        <Route path="/" element={<FoodNinja />} />
        <Route path="foodblog" element={<Foodblog />} />
      </Routes>
    </>
  );
}

export default App;
