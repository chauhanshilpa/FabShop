import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";
import Navbar from "./components/header/Navbar";
import Home from "./pages/home_page/Home";
import SearchedProducts from "./pages/searched_products/SearchedProducts";
import Category from "./pages/category/Category";
import SingleProduct from "./pages/single_product/SingleProduct";
import Profile from "./pages/profile/Profile";
import Wishlist from "./pages/wishlist/Wishlist";
import Orders from "./pages/orders/Orders";
import Checkout from "./pages/checkout/checkout_main/Checkout";
import Footer from "./components/footer/Footer";
import { STARTING_PRODUCTS } from "./api/assets/productsData";
import { Product } from "./api/classModels";
import {
  addNewUser,
  getActiveUserId,
  addItemToCart,
  removeItemFromCart,
  addItemToWishlist,
  removeItemFromWishlist,
  getCartProductsList,
  getWishlist,
  getUserOrdersList,
  CartProductInterface,
  OrderInterface,
} from "./api/api";
import { EMAIL, NAME, PASSWORD, CONTACT } from "./FabShop_constants";
import OrderConfirmation from "./pages/order_confirmation/OrderConfirmation";
import OrderDetails from "./components/order_section/order_details/OrderDetails";

function App() {
  const [activeUserId, setActiveUserId] = useState<string>(""); // hard coded as for now
  const [allProducts, setAllProducts] = useState<Product[]>([
    ...STARTING_PRODUCTS,
  ]);
  const [wishlistProductsList, setWishlistProductsList] = useState<Product[]>(
    []
  );
  const [cartProductsList, setCartProductsList] = useState<
    CartProductInterface[]
  >([]);
  const [ordersData, setOrdersData] = useState<OrderInterface>({});

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
    const getCartAndWishlist = async () => {
      const cartProductList = await getCartProductsList(activeUserId);
      setCartProductsList(cartProductList);
      const wishlist = await getWishlist(activeUserId);
      setWishlistProductsList(wishlist);
    };
    getCartAndWishlist();
    const getOrderList = async () => {
      const response = await getUserOrdersList(activeUserId);
      setOrdersData(response);
    };
    getOrderList();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    const signUpAndFetchUserId = async () => {
      await addNewUser(EMAIL, NAME, PASSWORD, CONTACT);
      await getUserId(EMAIL, NAME, PASSWORD, CONTACT);
    };
    signUpAndFetchUserId();
    //eslint-disable-next-line
  }, []);

  async function addToCart(productId: string) {
    await addItemToCart(activeUserId, productId);
    const response = await getCartProductsList(activeUserId);
    setCartProductsList(response);
  }

  async function removeFromCart(productId: string) {
    await removeItemFromCart(activeUserId, productId);
    const response = await getCartProductsList(activeUserId);
    setCartProductsList(response);
  }

  async function addToWishlist(productId: string) {
    const isWishlisted = wishlistProductsList.some(
      (product) => product.id === productId
    );
    if (!isWishlisted) {
      await addItemToWishlist(activeUserId, productId);
      const response = await getWishlist(activeUserId);
      setWishlistProductsList(response);
    }
  }

  async function removeFromWishlist(productId: string) {
    await removeItemFromWishlist(activeUserId, productId);
    const response = await getWishlist(activeUserId);
    setWishlistProductsList(response);
  }

  return (
    <>
      <ScrollToTop />
      <Navbar totalProductsInCart={cartProductsList.length} />
      <Routes>
        <Route path="/" element={<Home activeUserId={activeUserId} />} />
        <Route path="/search/:text" element={<SearchedProducts />} />
        <Route
          path="/category/:page"
          element={<Category allProducts={allProducts} />}
        />
        <Route
          path="/product/:product_id"
          element={
            <SingleProduct
              activeUserId={activeUserId}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              addToWishlist={addToWishlist}
              removeFromWishlist={removeFromWishlist}
            />
          }
        />
        <Route path="/user/Profile" element={<Profile />} />
        <Route
          path="/user/Wishlists"
          element={
            <Wishlist
              activeUserId={activeUserId}
              wishlistProductsList={wishlistProductsList}
              removeFromWishlist={removeFromWishlist}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/user/Orders"
          element={<Orders ordersData={ordersData} />}
        />
        <Route
          path="/order-details"
          element={<OrderDetails />}
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              activeUserId={activeUserId}
              cartProductsList={cartProductsList}
              addToWishlist={addToWishlist}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/checkout/confirmation"
          element={
            <OrderConfirmation
              activeUserId={activeUserId}
              setCartProductsList={setCartProductsList}
              setOrdersData={setOrdersData}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
