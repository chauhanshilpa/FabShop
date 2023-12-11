import { v4 as uuidv4 } from "uuid";

export class Image {
  id: string
  url: string;
  constructor(url: string) {
    this.id = uuidv4();
    this.url = url;
  }
}

export class Product {
  id: string;
  category: string;
  sub_category: string;
  type: string;
  price: number;
  image: Image;
  name: string;
  description: string;
  ratings: number;
  constructor(
    category: string,
    sub_category: string,
    type: string,
    price: number,
    url: string,
    name: string,
    description: string,
    ratings: number
  ) {
    this.id = uuidv4();
    this.category = category;
    this.sub_category = sub_category;
    this.type = type;
    this.price = price;
    this.image = new Image(url);
    this.name = name;
    this.description = description;
    this.ratings = ratings;
  }
}

export class WishlistItem {
  wishlist_id: string;
  product_id: string[];
  user_id: string;

  constructor(product_id: string, user_id: string) {
    this.wishlist_id = uuidv4();
    this.product_id = [product_id];
    this.user_id = user_id;
  }
}
