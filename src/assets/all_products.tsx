import img_1 from "./images/img_1.jpg";
import img_2 from "./images/img_2.jpg";
import img_3 from "./images/img_3.jpg";
import img_4 from "./images/img_4.jpg";
import img_5 from "./images/img_5.jpg";
import img_6 from "./images/img_6.jpg";
import img_7 from "./images/img_7.jpg";
import img_8 from "./images/img_8.jpg";
import img_9 from "./images/img_9.jpg";
import img_10 from "./images/img_10.jpg";
import img_11 from "./images/img_11.jpg";
import img_12 from "./images/img_12.jpg";
import img_13 from "./images/img_13.jpg";
import img_14 from "./images/img_14.jpg";
import img_15 from "./images/img_15.jpg";
import img_16 from "./images/img_16.jpg";
import img_17 from "./images/img_17.jpg";
import img_18 from "./images/img_18.jpg";
import img_19 from "./images/img_19.jpg";
import img_20 from "./images/img_20.jpg";
import img_21 from "./images/img_21.jpg";
import img_22 from "./images/img_22.jpg";
import img_23 from "./images/img_23.jpg";
import img_24 from "./images/img_24.jpg";
import img_25 from "./images/img_25.jpg";
import img_26 from "./images/img_26.jpg";
import img_27 from "./images/img_27.jpg";
import img_28 from "./images/img_28.jpg";
import img_29 from "./images/img_29.jpg";
import img_30 from "./images/img_30.jpg";
import img_31 from "./images/img_31.jpg";
import img_32 from "./images/img_32.jpg";
import img_33 from "./images/img_33.jpg";
import img_34 from "./images/img_34.jpg";
import img_35 from "./images/img_35.jpg";
import img_36 from "./images/img_36.jpg";
import img_37 from "./images/img_37.jpg";
import img_38 from "./images/img_38.jpg";
import img_39 from "./images/img_39.jpg";
import img_40 from "./images/img_40.jpg";
import img_41 from "./images/img_41.jpg";
import img_42 from "./images/img_42.jpg";
import img_43 from "./images/img_43.jpg";
import img_44 from "./images/img_44.jpg";
import img_45 from "./images/img_45.jpg";
import img_46 from "./images/img_46.jpg";
import img_47 from "./images/img_47.jpg";
import img_48 from "./images/img_48.jpg";
import img_49 from "./images/img_49.jpg";
import img_50 from "./images/img_50.jpg";
import img_51 from "./images/img_51.jpg";
import img_52 from "./images/img_52.jpg";
import img_53 from "./images/img_53.jpg";
import img_54 from "./images/img_54.jpg";
import img_55 from "./images/img_55.jpg";
import img_56 from "./images/img_56.jpg";

interface product {
  id: number;
  category: string;
  sub_category: string;
  type: string;
  price: number;
  image: string;
  name: string;
  description: string;
  shipping_charge: number;
  ratings: number;
  colors: string[];
}
export const products: product[] = [
  {
    id: 1,
    category: "Men",
    sub_category: "Boy",
    type: "t-shirt",
    price: 499,
    image: img_1,
    name: "T-shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: ["black", "blue", "grey"],
  },
  {
    id: 2,
    category: "Women",
    sub_category: "Girl",
    type: "top",
    price: 629,
    image: img_2,
    name: "Off-shoulder crop top",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 5,
    colors: ["white"],
  },
  {
    id: 3,
    category: "Kid",
    sub_category: "Girl",
    type: "frock",
    price: 779,
    image: img_3,
    name: "Frock",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 5,
    colors: ["red"],
  },
  {
    id: 4,
    category: "Kid",
    sub_category: "Boy",
    type: "t-shirt",
    price: 399,
    image: img_4,
    name: "Cotton t-shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: ["green", "red", "grey"],
  },
  {
    id: 5,
    category: "Male",
    type: "footwear",
    sub_category: "Boy",
    price: 3099,
    image: img_5,
    name: "Leather boots",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 5,
    colors: ["white", "black"],
  },
  {
    id: 6,
    category: "Women",
    type: "bag",
    sub_category: "Girl",
    price: 879,
    image: img_6,
    name: "Handbag",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 5,
    colors: ["brown", "blue"],
  },
  {
    id: 7,
    category: "Women",
    type: "shrug",
    sub_category: "Girl",
    price: 599,
    image: img_7,
    name: "Shrug",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: ["grey", "black"],
  },
  {
    id: 8,
    category: "Women",
    type: "jeans",
    sub_category: "Girl",
    price: 1049,
    image: img_8,
    name: "Faded boyfriend jeans",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: ["grey"],
  },
  {
    id: 9,
    category: "Women",
    type: "bag",
    sub_category: "Girl",
    price: 589,
    image: img_9,
    name: "Sling bag",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: ["one"],
  },
  {
    id: 10,
    category: "Women",
    type: "shoes",
    sub_category: "Girl",
    price: 2069,
    image: img_10,
    name: "Sneakers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 5,
    colors: ["one"],
  },
  {
    id: 11,
    category: "Men",
    type: "jacket",
    sub_category: "Boy",
    price: 669,
    image: img_11,
    name: "Denim jacket",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 2,
    colors: ["blue", "black"],
  },
  {
    id: 12,
    category: "Women",
    type: "shirt",
    sub_category: "girl",
    price: 869,
    image: img_12,
    name: "Bottom tied top",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: ["white", "black"],
  },
  {
    id: 13,
    category: "Women",
    type: "bag",
    sub_category: "Girl",
    price: 69,
    image: img_13,
    name: "Set of 5 sling bags",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: ["multi"],
  },
  {
    id: 14,
    category: "Kids",
    type: "frock",
    sub_category: "Girl",
    price: 539,
    image: img_14,
    name: "frock",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 3,
    colors: ["white", "green"],
  },
  {
    id: 15,
    category: "Men",
    type: "t-shirt",
    sub_category: "Boy",
    price: 369,
    image: img_15,
    name: "T-shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: ["white", "blue", "black", "grey"],
  },
  {
    id: 16,
    category: "Men",
    type: "watch",
    sub_category: "Boy",
    price: 1039,
    image: img_16,
    name: "Black Plastic band watch",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: ["one"],
  },
  {
    id: 17,
    category: "Women",
    type: "dress",
    sub_category: "Girl",
    price: 969,
    image: img_17,
    name: "Glittered dress",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: ["one"],
  },
  {
    id: 18,
    category: "Women",
    type: "jeans",
    sub_category: "Girl",
    price: 1069,
    image: img_18,
    name: "Jeans",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: ["one"],
  },
  {
    id: 19,
    category: "Men",
    type: "jacket",
    sub_category: "Boy",
    price: 4889,
    image: img_19,
    name: "Leather jacket",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: ["black", "maroon"],
  },
  {
    id: 20,
    category: "Men",
    type: "shoes",
    sub_category: "Boy",
    price: 1209,
    image: img_20,
    name: "Traditional shoes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 5,
    colors: ["one"],
  },
  {
    id: 21,
    category: "Men",
    type: "Watch",
    sub_category: "Boy",
    price: 4999,
    image: img_21,
    name: "Royal watch",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 5,
    colors: ["one"],
  },
  {
    id: 22,
    category: "Women",
    type: "shorts",
    sub_category: "Girl",
    price: 569,
    image: img_22,
    name: "Denim shorts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: ["one"],
  },
  {
    id: 23,
    category: "Men",
    type: "shoes",
    sub_category: "Boy",
    price: 2069,
    image: img_23,
    name: "Boots",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: ["one"],
  },
  {
    id: 24,
    category: "Women",
    type: "shorts",
    sub_category: "Girl",
    price: 669,
    image: img_24,
    name: "Denim shorts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 5,
    colors: ["one"],
  },
  {
    id: 25,
    category: "Women",
    type: "jeans",
    sub_category: "Girl",
    price: 989,
    image: img_25,
    name: "Lightly scratched jeans",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: ["blue", "black"],
  },
  {
    id: 26,
    category: "Men",
    type: "hoodie",
    sub_category: "Boy",
    price: 789,
    image: img_26,
    name: "Hoodie",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: ["black", "green"],
  },
  {
    id: 27,
    category: "Women",
    type: "sandals",
    sub_category: "Girls",
    price: 2079,
    image: img_27,
    name: "Sandal block heels",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 5,
    colors: ["one"],
  },
  {
    id: 28,
    category: "Women",
    type: "Bellies",
    sub_category: "Girl",
    price: 1099,
    image: img_28,
    name: "bellies",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 3,
    colors: ["white", "grey"],
  },
  {
    id: 29,
    category: "Women",
    type: "sandals",
    sub_category: "Girls",
    price: 2039,
    image: img_29,
    name: "blue sneakers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: ["grey", "pink"],
  },
  {
    id: 30,
    category: "Women",
    type: "Bellies",
    sub_category: "Girl",
    price: 5029,
    image: img_30,
    name: "Glittered bellies",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4.2,
    colors: ["one"],
  },
  {
    id: 31,
    category: "Women",
    type: "co-ords",
    sub_category: "Girls",
    price: 2319,
    image: img_31,
    name: "Co-ords",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 2,
    colors: ["yellow", "purple"],
  },
  {
    id: 32,
    category: "Men",
    type: "shirt",
    sub_category: "Boys",
    price: 709,
    image: img_32,
    name: "Check shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: ["black", "blue"],
  },
  {
    id: 33,
    category: "Men",
    type: "shirt",
    sub_category: "Boys",
    price: 879,
    image: img_33,
    name: "Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: ["one"],
  },
  {
    id: 34,
    category: "Men",
    type: "shirt",
    sub_category: "Boys",
    price: 999,
    image: img_34,
    name: "Checkered shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 5,
    colors: ["maroon", "brown"],
  },
  {
    id: 35,
    category: "Men",
    type: "shirt",
    sub_category: "Boy",
    price: 959,
    image: img_35,
    name: "Formal shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 3,
    colors: ["blue", "purple"],
  },
  {
    id: 36,
    category: "Kids",
    type: "top",
    sub_category: "Girls",
    price: 339,
    image: img_36,
    name: "Top",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 2,
    colors: ["white", "pink", "blue", "red"],
  },
  {
    id: 37,
    category: "Women",
    type: "trouser",
    sub_category: "Girls",
    price: 819,
    image: img_37,
    name: "Trouser",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 3,
    colors: ["pink", "orange", "yellow"],
  },
  {
    id: 38,
    category: "Men",
    type: "t-shirt",
    sub_category: "Boys",
    price: 459,
    image: img_38,
    name: "T-shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: ["white"],
  },
  {
    id: 39,
    category: "Men",
    type: "t-shirt",
    sub_category: "Boys",
    price: 69,
    image: img_39,
    name: "Plain t-shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 2,
    colors: ["black", "white"],
  },
  {
    id: 40,
    category: "Women",
    type: "shoes",
    sub_category: "Girls",
    price: 2069,
    image: img_40,
    name: "Casual shoes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 5,
    colors: ["one"],
  },
  {
    id: 41,
    category: "Women",
    type: "jeans",
    sub_category: "Girls",
    price: 989,
    image: img_41,
    name: "Solid jeans",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 3,
    colors: ["blue", "black"],
  },
  {
    id: 42,
    category: "Men",
    type: "watch",
    sub_category: "Boys",
    price: 2099,
    image: img_42,
    name: "Watch",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: ["one"],
  },
  {
    id: 43,
    category: "Women",
    type: "watch",
    sub_category: "Girls",
    price: 2069,
    image: img_43,
    name: "Metal watch",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: ["one"],
  },
  {
    id: 44,
    category: "Kids",
    type: "dress",
    sub_category: "any",
    price: 2019,
    image: img_44,
    name: "Furred bodysuit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: ["white", "beige", "pink", "blue"],
  },
  {
    id: 45,
    category: "Men",
    type: "watch",
    sub_category: "Boys",
    price: 7029,
    image: img_45,
    name: "Silver metal watch",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 5,
    colors: ["one"],
  },
  {
    id: 46,
    category: "Men",
    type: "watch",
    sub_category: "Boys",
    price: 3069,
    image: img_46,
    name: "blue metal watch",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: ["one"],
  },
  {
    id: 47,
    category: "Kids",
    type: "dress",
    sub_category: "any",
    price: 999,
    image: img_47,
    name: "fully covering bodysuit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: ["brown", "grey"],
  },
  {
    id: 48,
    category: "Men",
    type: "hoodie",
    sub_category: "Boys",
    price: 919,
    image: img_48,
    name: "Check hoodie",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: [],
  },
  {
    id: 49,
    category: "Men",
    type: "shoes",
    sub_category: "Boys",
    price: 5099,
    image: img_49,
    name: "Fox leather boots",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 5,
    colors: [],
  },
  {
    id: 50,
    category: "Women",
    type: "jumpsuit",
    sub_category: "Grils",
    price: 1029,
    image: img_50,
    name: "Jump suit with belt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 5,
    colors: ["white", "cream"],
  },
  {
    id: 51,
    category: "Women",
    type: "bellies",
    sub_category: "Girls",
    price: 2039,
    image: img_51,
    name: "White bellies",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: ["one"],
  },
  {
    id: 52,
    category: "Women",
    type: "bellies",
    sub_category: "Girls",
    price: 2019,
    image: img_52,
    name: "Flower print bellies",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: ["blue", "yellow", "red"],
  },
  {
    id: 53,
    category: "Men",
    type: "shoes",
    sub_category: "Boys",
    price: 69,
    image: img_53,
    name: "Multi color sneakers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 5,
    colors: ["one"],
  },
  {
    id: 54,
    category: "Men",
    type: "jeans",
    sub_category: "Boys",
    price: 69,
    image: img_54,
    name: "Solid jeans",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 2,
    colors: ["blue", "black"],
  },
  {
    id: 55,
    category: "Men",
    type: "pants",
    sub_category: "Boys",
    price: 69,
    image: img_55,
    name: "Casual pants",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: ["beige", "grey", "black", "blue"],
  },
  {
    id: 56,
    category: "Kids",
    type: "frock",
    sub_category: "Girls",
    price: 69,
    image: img_56,
    name: "Wooven frock",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    shipping_charge: 0,
    ratings: 4,
    colors: ["one"],
  },
];
