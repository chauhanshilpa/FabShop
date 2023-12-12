import { Product } from "./classModels";

// all logic that a backend do

let wishlists: Product[] = [];

export function addItemToWishlist(product: Product) {
  wishlists.push(product);
  return wishlists;
}

