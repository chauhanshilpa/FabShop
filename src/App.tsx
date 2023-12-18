import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Home from "./pages/home_page/Home";
import Category from "./pages/category/Category";
import SingleProduct from "./pages/single_product/SingleProduct";
import Profile from "./pages/profile/Profile";
import Wishlist from "./pages/wishlist/Wishlist";
import Orders from "./pages/all_orders/Orders";
import Footer from "./components/footer/Footer";
import { products } from "./api/assets/productsData";
import { Product } from "./api/classModels";
import { addNewUser, getActiveUserId } from "./api/api";

function App() {
  const [activeUserId, setActiveUserId] = useState<string>(""); // hard coded as for now
  const [allProducts, setAllProducts] = useState([...products]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  //these values are hard coded as for now
  const email: string = "user@gmail.com";
  const name: string = "user";
  const password: string = "password";
  const contact: number = 1234567892;

  async function signUp(
    email: string,
    name: string,
    password: string,
    contact: number
  ) {
    await addNewUser(email, name, password, contact);
  }

  async function getUserId(
    email: string,
    name: string,
    password: string,
    contact: number
  ) {
    const response = await getActiveUserId(email, name, password, contact);
    setActiveUserId(response);
  }

  useEffect(() => {
    const signUpAndFetchUserId = async () => {
      await signUp(email, name, password, contact);
      await getUserId(email, name, password, contact);
    };
    signUpAndFetchUserId();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home allProducts={allProducts} />} />
        <Route
          path="/category/:page"
          element={<Category allProducts={allProducts} />}
        />
        <Route
          path="/product/:product_id"
          element={
            <SingleProduct
              setWishlist={setWishlist}
              activeUserId={activeUserId}
            />
          }
        />
        <Route path="/user/Profile" element={<Profile />} />
        <Route
          path="/user/Wishlists"
          element={
            <Wishlist
              activeUserId={activeUserId}
              wishlist={wishlist}
              setWishlist={setWishlist}
            />
          }
        />
        <Route path="/user/Orders" element={<Orders />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
