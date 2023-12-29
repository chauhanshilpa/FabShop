import { v4 as uuidv4 } from "uuid";
import { STARTING_PRODUCTS } from "./assets/productsData";
import { User, Product } from "./classModels";

// all logic that a backend will do

let usersList: User[] = [];
let allProducts: Product[] = [...STARTING_PRODUCTS];
let wishlist: Product[] = [];
let cartProductsList: Product[] = [];

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

export async function addItemToCart(userId: string, productId: string ){
 const product = allProducts.filter((product) => product.id === productId)[0];
 cartProductsList.push(product);
}

export async function removeItemFromCart(userId: string, productId: string) {
  const productIndex = cartProductsList.findIndex(
    (product) => product.id === productId
  );
  cartProductsList.splice(productIndex, productIndex + 1);
}

export async function getCartProductsList(userId:string) {
  const newCartProductsList = [...cartProductsList]
  return newCartProductsList;
}

