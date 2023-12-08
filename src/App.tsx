import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/header/AppBar";
import Home from "./pages/Home";
import Category from "./pages/category/Category";
import Product from "./pages/single-product/SingleProduct";
import Profile from "./pages/profile/Profile";
import Wishlist from "./pages/wishlist/Wishlist";
import Orders from "./pages/all-orders/Orders";
import Footer from "./components/footer/Footer";
import { products } from "./server/assets/productsData";
import { images } from "./server/assets/imagesData";

function App() {
  const [allProducts, setAllProducts] = useState([...products]);
  const [allImages, setAllImages] = useState({ ...images });

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home allProducts={allProducts} allImages={allImages} />}
        />
        <Route
          path="/category/:page"
          element={<Category allProducts={allProducts} allImages={allImages} />}
        />
        <Route
          path="/product/:product_id"
          element={<Product allProducts={allProducts} allImages={allImages} />}
        />
        <Route path="/user/Profile" element={<Profile />} />
        <Route path="/user/Wishlists" element={<Wishlist />} />
        <Route path="/user/Orders" element={<Orders />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
