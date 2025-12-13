import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Restaurante from "./pages/Restaurante";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurante/:id" element={<Restaurante />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
