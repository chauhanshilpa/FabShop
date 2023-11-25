import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/header/AppBar";
import Home from "./pages/Home";
import Category from "./pages/category/Category";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:page" element={<Category />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
