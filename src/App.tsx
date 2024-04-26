import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";
import Navbar from "./components/header/navbar/Navbar";
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
import OrderConfirmation from "./pages/order_confirmation/OrderConfirmation";
import OrderedItemDetails from "./components/order_section/ordered_item_details/OrderedItemDetails";
import LoginForm from "./components/login/LoginForm";
import SignUpForm from "./components/signup/SignUpForm";

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
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState<boolean>(false);
  const [isSignUpFormOpen, setIsSignUpFormOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchInitialInformation = async () => {
      // const userId = await getUserId(EMAIL, NAME, PASSWORD, CONTACT);
      // setActiveUserId(userId);
      const cartProductList = await getCartProductsList(activeUserId);
      setCartProductsList(cartProductList);
      const wishlist = await getWishlist(activeUserId);
      setWishlistProductsList(wishlist);
      const response = await getUserOrdersList(activeUserId);
      setOrdersData(response);
    };
    fetchInitialInformation();
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
      <Navbar
        totalProductsInCart={cartProductsList.length}
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
        setIsLoginFormOpen={setIsLoginFormOpen}
        setActiveUserId={setActiveUserId}
      />
      {isLoginFormOpen && !isUserLoggedIn && (
        <LoginForm
          setIsLoginFormOpen={setIsLoginFormOpen}
          setActiveUserId={setActiveUserId}
          setIsUserLoggedIn={setIsUserLoggedIn}
          setIsSignUpFormOpen={setIsSignUpFormOpen}
        />
      )}
      {isSignUpFormOpen && (
        <SignUpForm
          setIsSignUpFormOpen={setIsSignUpFormOpen}
          setIsUserLoggedIn={setIsUserLoggedIn}
          setIsLoginFormOpen={setIsLoginFormOpen}
          setActiveUserId={setActiveUserId}
        />
      )}
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
        <Route path="/order-details" element={<OrderedItemDetails />} />
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
