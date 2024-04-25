import { v4 as uuidv4 } from "uuid";
import { STARTING_PRODUCTS } from "./assets/productsData";
import { User, Product, Address } from "./classModels";
import { DISCOUNT, SHIPPING_CHARGE } from "../FabShop_constants";

export interface CartProductInterface extends Product {
  quantity: number;
}
export interface SingleOrderInterface {
  orderId: string;
  dateAndTime: string;
  orderedProductList: CartProductInterface[];
  address: Address;
  cartValue: number;
}
export interface OrderInterface {
  [key: string]: SingleOrderInterface;
}

interface CustomerAddressInterface {
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
let cartProductsList: CartProductInterface[] = [];
let cartTotalAmount: number = 0;
let customerAddresses: CustomerAddressInterface = {};
let orderedProducts: OrderInterface = {};

// user
export async function addNewUser(
  name: string,
  email: string,
  password: string,
  contact: string
) {
  const newUserId = uuidv4();
  const newUser = new User(newUserId, email, name, password, contact);
  usersList.push(newUser);
}

export async function getActiveUserId(
  email: string,
  name: string,
  password: string,
  contact: string
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

// products

export async function addNewProduct() {
  console.log("This will add new product");
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

// browsing history
export async function getUsersBrowsingHistoryList(userId: string) {
  return browsedProductsList;
}

export async function setUsersBrowsingHistoryList(
  userId: string,
  product: Product
) {
  if (browsedProductsList.length > 8) {
    browsedProductsList.shift();
    browsedProductsList.push(product);
  } else {
    browsedProductsList.push(product);
  }
}

// wishlist
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

// cart
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

export async function makeCartEmpty(userId: string) {
  cartProductsList = [];
  cartTotalAmount = 0;
}

// product quantity in cart
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

// cart's value
export async function handleCartProductsPrice(userId: string) {
  cartTotalAmount = cartProductsList.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
  }, 0);
  return cartTotalAmount;
}

export async function handleCartTotalAmount(userId: string) {
  const totalAmount =
    cartTotalAmount - (DISCOUNT * cartTotalAmount) / 100 + SHIPPING_CHARGE;
  cartTotalAmount = totalAmount;
  return totalAmount;
}

// search products
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

// address
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

// orders
export async function userOrdersWithDate(
  userId: string,
  orderedProductList: CartProductInterface[],
  customerAddress: Address
) {
  let dateTimeString = new Date().toLocaleString();
  let order_id = uuidv4();
  orderedProducts[dateTimeString] = {
    orderId: order_id,
    dateAndTime: dateTimeString,
    orderedProductList: orderedProductList,
    address: customerAddress,
    cartValue: cartTotalAmount,
  };
}

export async function getUserOrdersList(userId: string) {
  return orderedProducts;
}
