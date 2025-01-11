import { v4 as uuidv4 } from "uuid";
import { STARTING_PRODUCTS } from "./assets/productsData";
import { User, Seller, Product, Address, Image } from "./classModels";
import { DISCOUNT, SHIPPING_CHARGE } from "../helpers/FabShop_constants";

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
interface CustomerDeliveryAddressInterface {
  [key: string]: Address;
}
interface BrowsedProductsInterface {
  [key: string]: Product[];
}
export interface savedAddressesInterface {
  [key: string]: Address[];
}
export interface savedUpiPaymentsInterface {
  upiIdEntryName: string;
  upiId: string | undefined;
}
export interface savedCardInterface {
  cardEntryName: string;
  cardNumber: string | undefined;
  ownerName: string | undefined;
  cardValidity: string | undefined;
  cvv: string | undefined;
}
export interface PaymentInterface {
  [key: string]: savedUpiPaymentsInterface | savedCardInterface;
}

/**
 * A separate file which is created with a thinking that, later I have to integrate backend. Instead making changes in different files, I wrote all logic here so that changes happen to this file only.
 * all logic that a backend do
 */

let usersList: User[] = [];
let sellerList: Seller[] = [];
let allProducts: Product[] = [...STARTING_PRODUCTS];
let browsedProductsList: BrowsedProductsInterface = {};
let wishlist: Product[] = [];
let cartProductsList: CartProductInterface[] = [];
let cartTotalAmount: number = 0;
let customerDeliveryAddress: CustomerDeliveryAddressInterface = {};
let customerSavedAddresses: savedAddressesInterface = {};
let orderedProducts: OrderInterface = {};
let savedPaymentDetails: PaymentInterface = {};

// seller and user

export async function checkSellerAvailability(email: string) {
  const isSellerExists = sellerList.some((user) => user.email === email);
  return isSellerExists;
}

export async function getActiveSellerDetails(sellerId: string) {
  const activeSeller = sellerList.filter((user) => user.id === sellerId)[0];
  return {
    name: activeSeller.name,
    email: activeSeller.email,
    contact: activeSeller.contact,
  };
}

export async function addNewSeller(
  sellerName: string,
  sellerMail: string,
  password: string,
  sellerContact: string
) {
  const newSellerId = uuidv4();
  const newSeller = new Seller(
    newSellerId,
    sellerName,
    sellerMail,
    password,
    sellerContact
  );
  sellerList.push(newSeller);
}

export async function getActiveSellerId(email: string, password: string) {
  const activeSeller = sellerList.filter(
    (seller) => seller.email === email && seller.password === password
  );
  if (activeSeller.length >= 1) {
    return activeSeller[0].id;
  } else {
    return "";
  }
}

export async function checkUserAvailability(email: string) {
  const isUserExists = usersList.some((user) => user.email === email);
  return isUserExists;
}

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

export async function getActiveUserId(email: string, password: string) {
  const activeUser = usersList.filter(
    (user) => user.email === email && user.password === password
  );
  if (activeUser.length >= 1) {
    return activeUser[0].id;
  } else {
    return "";
  }
}

export async function getActiveUserDetails(userId: string) {
  const activeUser = usersList.filter((user) => user.id === userId)[0];
  return {
    name: activeUser.name,
    email: activeUser.email,
    contact: activeUser.contact,
  };
}

export async function addNewProduct(
  category: string,
  subCategory: string,
  productType: string,
  price: number,
  imageUrl: string,
  name: string,
  description: string
) {
  const imageId = uuidv4();
  const productId = uuidv4();
  const ratings = 0;
  const newProduct = new Product(
    productId,
    category,
    subCategory,
    productType,
    price,
    imageId,
    imageUrl,
    name,
    description,
    ratings
  );
  allProducts.push(newProduct);
}

export async function fetchAllProducts(){
 return [...allProducts];
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
  if (browsedProductsList[userId] === undefined)
    return (browsedProductsList[userId] = []);
  else return browsedProductsList[userId];
}

export async function setUsersBrowsingHistoryList(
  userId: string,
  product: Product
) {
  if (browsedProductsList.hasOwnProperty(userId)) {
    if (browsedProductsList[userId].length > 8) {
      browsedProductsList[userId].shift();
      browsedProductsList[userId].push(product);
    } else {
      browsedProductsList[userId].push(product);
    }
  } else {
    browsedProductsList[userId] = [{ ...product }];
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
export async function customerAddressDuringOrder(
  userId: string,
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
  const address_id = uuidv4();
  const address = new Address(
    address_id,
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
  customerDeliveryAddress[userId] = address;
}

export async function getCustomerAddressDuringOrder(userId: string) {
  return customerDeliveryAddress[userId];
}

export async function saveCustomerAddress(
  userId: string,
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
  const address_id = uuidv4();
  const address = new Address(
    address_id,
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
  if (!customerSavedAddresses.hasOwnProperty(userId)) {
    customerSavedAddresses[userId] = [];
  }
  customerSavedAddresses[userId].push({ ...address });
}

export async function getCustomerSavedAddresses(userId: string) {
  return customerSavedAddresses[userId];
}

export async function deleteSavedAddress(addressId: string, userId: string) {
  let newAddres = { ...customerSavedAddresses };
  let addressListOfTheUser = newAddres[userId];
  let indexOfAddressToDelete = addressListOfTheUser.findIndex(address=> address.id === addressId)
  addressListOfTheUser.splice(indexOfAddressToDelete, 1)
  customerSavedAddresses = { ...newAddres };
  return addressListOfTheUser;
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

// payment

export async function addUpiDetails(
  userId: string,
  upiIdEntryName: string,
  upiId: string | undefined
) {
  const newUpiPayment: savedUpiPaymentsInterface = {
    upiIdEntryName,
    upiId,
  };
  savedPaymentDetails[uuidv4()] = newUpiPayment;
}

export async function addCardDetails(
  activeUserId: string,
  cardEntryName: string,
  cardNumber: string | undefined,
  ownerName: string | undefined,
  cardValidity: string | undefined,
  cvv: string | undefined
) {
  const newCardPayment: savedCardInterface = {
    cardEntryName,
    cardNumber,
    ownerName,
    cardValidity,
    cvv,
  };
  savedPaymentDetails[uuidv4()] = newCardPayment;
}

export async function deletePaymentDetail(id: string) {
  let newPaymentDetails = { ...savedPaymentDetails };
  delete newPaymentDetails[id];
  savedPaymentDetails = { ...newPaymentDetails };
}

export async function getPaymentDetails() {
  return savedPaymentDetails;
}
