export class User {
  id: string;
  email: string;
  name: string;
  password: string;
  contact: number;
  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    contact: number
  ) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
    this.contact = contact;
  }
}
export class Image {
  id: string;
  url: string;
  constructor(id: string, url: string) {
    this.id = id;
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
    id: string,
    category: string,
    sub_category: string,
    type: string,
    price: number,
    image_id: string,
    image_url: string,
    name: string,
    description: string,
    ratings: number
  ) {
    this.id = id;
    this.category = category;
    this.sub_category = sub_category;
    this.type = type;
    this.price = price;
    this.image = new Image(image_id, image_url);
    this.name = name;
    this.description = description;
    this.ratings = ratings;
  }
}
