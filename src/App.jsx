import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Restaurante from "./pages/Restaurante";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurante/:id" element={<Restaurante />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
