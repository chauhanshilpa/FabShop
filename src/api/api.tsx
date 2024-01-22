import { v4 as uuidv4 } from "uuid";
import { STARTING_PRODUCTS } from "./assets/productsData";
import { User, Product } from "./classModels";
import { DISCOUNT, SHIPPING_CHARGE } from "../FabShop_constants";
interface Cart extends Product {
  quantity: number;
}

/**
 * A separate file which is created with a thinking that, later I have to integrate backend. Instead making changes in different files, I wrote all logic here so that changes happen to this file only.
 * all logic that a backend do
 */

let usersList: User[] = [];
let allProducts: Product[] = [...STARTING_PRODUCTS];
let wishlist: Product[] = [];
let cartProductsList: Cart[] = [];
let cartTotalPrice: number = 0;

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
  productId: string,
  quantity: number
) {
  const newCartProductsList = [...cartProductsList];
  const product = newCartProductsList.filter(
    (product) => product.id === productId
  )[0];
  product.quantity = quantity;
}

export async function getProductQuantityInCart(productId: string) {
  const newCartProductsList = [...cartProductsList];
  const product = newCartProductsList.filter(
    (product) => product.id === productId
  )[0];
  return product.quantity;
}

export async function handleCartProductsPrice() {
  cartTotalPrice = cartProductsList.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
  }, 0);
  return cartTotalPrice;
}

export async function handleCartTotalAmount() {
  const totalAmount =
    cartTotalPrice - (DISCOUNT * cartTotalPrice) / 100 + SHIPPING_CHARGE;
  return totalAmount;
}

export async function getSearchedProducts(text: string) {
  const searchedProducts = allProducts.filter(
    (product) =>
      product.category.toLowerCase().includes(text) ||
      product.type.toLowerCase().includes(text) ||
      product.sub_category.toLowerCase().includes(text) ||
      product.name.includes(text)
  );
  return searchedProducts;
}
