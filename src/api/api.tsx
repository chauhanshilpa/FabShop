import { v4 as uuidv4 } from "uuid";
import { STARTING_PRODUCTS } from "./assets/productsData";
import { User, Product, Address } from "./classModels";
import { DISCOUNT, SHIPPING_CHARGE } from "../FabShop_constants";

interface Cart extends Product {
  quantity: number;
}

interface CustomerAddress {
  [key: string]: Address;
}

/**
 * A separate file which is created with a thinking that, later I have to integrate backend. Instead making changes in different files, I wrote all logic here so that changes happen to this file only.
 * all logic that a backend do
 */

let usersList: User[] = [];
let allProducts: Product[] = [...STARTING_PRODUCTS];
let browsedProductsList: Product[] = [];
let wishlist: Product[] = [];
let cartProductsList: Cart[] = [];
let cartTotalPrice: number = 0;
let customerAddresses: CustomerAddress = {};

export async function addNewUser(
  email: string,
  name: string,
  password: string,
  contact: number
) {
  const newUserId = uuidv4();
  const newUser = new User(newUserId, email, name, password, contact);
  usersList.push(newUser);
}

export async function getActiveUserId(
  email: string,
  name: string,
  password: string,
  contact: number
) {
  const activeUser = usersList.filter(
    (user) =>
      user.email === email &&
      user.name === name &&
      user.password === password &&
      user.contact === contact
  )[0];
  return activeUser.id;
}

export async function getHomeCardProducts(userId: string) {
  const headings = [
    "Under ₹499 | Pocket-friendly fashion for you",
    "Customers’ Most-Loved Fashion only for you",
    "Up to 70% off | Top picks by stores near you",
    "Shop smart | Surprise yourself with fashion",
    "Today's deals",
    "Up to 50% off | International brands",
    "Keep shopping for your loved one's",
    "Revamp your wardrobe in style",
    "More fabulous items to consider",
    "Dress to impress | Your daily dose of style",
    "Fashion finds galore | Explore, Shop, Repeat",
    "Up to 30% off | New arrivals at nearby stores",
    "Fabulous finds at FabShop | Explore your style",
  ];
  const homeCardProducts: { [key: string]: Product[] } = {};
  let copiedProducts1 = [...allProducts];
  for (let i = 0; i < headings.length; i++) {
    homeCardProducts[headings[i]] = [];
    if (i === 4) {
      while (homeCardProducts[headings[i]].length < 8) {
        const index = Math.floor(Math.random() * copiedProducts1.length);
        homeCardProducts[headings[i]].push(copiedProducts1[index]);
        copiedProducts1.splice(index, 1);
      }
    } else {
      while (homeCardProducts[headings[i]].length < 4) {
        const index = Math.floor(Math.random() * copiedProducts1.length);
        homeCardProducts[headings[i]].push(copiedProducts1[index]);
        copiedProducts1.splice(index, 1);
      }
    }
  }
  return homeCardProducts;
}

export async function getUsersBrowsingHistoryList(userId: string) {
  return browsedProductsList;
}

export async function setUsersBrowsingHistoryList(userId: string, product: Product) {
  browsedProductsList.push(product);
  // console.log(browsedProductsList);
}

export async function addNewProduct() {
  console.log("This will add new product");
}

export async function addItemToWishlist(userId: string, productId: string) {
  const product = allProducts.filter((product) => product.id === productId)[0];
  wishlist.push(product);
}

export async function removeItemFromWishlist(
  userId: string,
  productId: string
) {
  const productIndex = wishlist.findIndex(
    (product) => product.id === productId
  );
  wishlist.splice(productIndex, productIndex + 1);
}

export async function getWishlist(userId: string) {
  const newWishlist = [...wishlist];
  return newWishlist;
}

export async function addItemToCart(userId: string, productId: string) {
  const product = allProducts.filter((product) => product.id === productId)[0];
  cartProductsList.push({ ...product, quantity: 1 });
}

export async function removeItemFromCart(userId: string, productId: string) {
  const productIndex = cartProductsList.findIndex(
    (product) => product.id === productId
  );
  cartProductsList.splice(productIndex, productIndex + 1);
}

export async function getCartProductsList(userId: string) {
  const newCartProductsList = [...cartProductsList];
  return newCartProductsList;
}

export async function handleProductQuantityInCart(
  userId: string,
  productId: string,
  quantity: number
) {
  const newCartProductsList = [...cartProductsList];
  const product = newCartProductsList.filter(
    (product) => product.id === productId
  )[0];
  product.quantity = quantity;
}

export async function getProductQuantityInCart(
  userId: string,
  productId: string
) {
  const newCartProductsList = [...cartProductsList];
  const product = newCartProductsList.filter(
    (product) => product.id === productId
  )[0];
  return product.quantity;
}

export async function handleCartProductsPrice(userId: string) {
  cartTotalPrice = cartProductsList.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
  }, 0);
  return cartTotalPrice;
}

export async function handleCartTotalAmount(userId: string) {
  const totalAmount =
    cartTotalPrice - (DISCOUNT * cartTotalPrice) / 100 + SHIPPING_CHARGE;
  return totalAmount;
}

export async function getSearchedProducts(text: string) {
  const searchedProducts = allProducts.filter(
    (product) =>
      product.category.toLowerCase().includes(text.toLowerCase()) ||
      product.type.toLowerCase().includes(text.toLowerCase()) ||
      product.sub_category.toLowerCase().includes(text.toLowerCase()) ||
      product.name.includes(text.toLowerCase())
  );
  return searchedProducts;
}

export async function customerAddressDetails(
  user_id: string,
  name: string,
  phoneNumber: string,
  pincode: string,
  locality: string,
  streetAddress: string,
  city: string,
  state: string | null,
  landmark: string,
  secondPhoneNumber: string
) {
  const completeAddress = new Address(
    name,
    phoneNumber,
    pincode,
    locality,
    streetAddress,
    city,
    state,
    landmark,
    secondPhoneNumber
  );
  customerAddresses[user_id] = completeAddress;
}

export async function getCustomerAddressDetails(userId: string) {
  return customerAddresses[userId];
}

export async function makeCartEmpty(userId: string) {
  cartProductsList = [];
  cartTotalPrice = 0;
}
