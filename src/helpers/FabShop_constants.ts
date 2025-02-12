// these are some hard coded constants of FabShop

export interface ProductTypeInterface {
  inputValue?: string;
  title: string;
}

export const DISCOUNT: number = 15;

export const SHIPPING_CHARGE: number = 20;

export const ENTER_KEY: string = "Enter";

export const GOOGLE_CLIENT_ID: string | undefined =
  process.env.PRIVATE_GOOGLE_CLIENT_ID;

export const STATES_LIST: string[] = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra & Nagar Haveli and Daman & Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
];

export const CATEGORY_LIST: string[] = ["Men", "Women", "Kids"];

export const SUB_CATEGORY_LIST: string[] = ["Girls", "Boys"];

export const PRODUCT_TYPE: readonly ProductTypeInterface[] = [
  { title: "shirt" },
  { title: "t-shirt" },
  { title: "top" },
  { title: "frock" },
  { title: "footwear" },
  { title: "bag" },
  { title: "watch" },
  {
    title: "dress",
  },
  { title: "jeans" },
  { title: "shorts" },
  {
    title: "hoodie",
  },
  {
    title: "co-ords",
  },
  { title: "trouser" },
  { title: "jumpsuit" },
];

export const POPULAR_SEARCHES = [
  { product: "Dresses", value: "glittered dress" },
  { product: "Bodysuit", value: "bodysuit" },
  { product: "T-Shirts", value: "t-shirt" },
  { product: "Sandals", value: "sandal" },
  { product: "Handbags", value: "handbag" },
  { product: "Watches", value: "watch" },
  { product: "Bags", value: "bag" },
  { product: "Shoes", value: "shoes" },
  { product: "Tops", value: "top" },
  { product: "Jeans", value: "jeans" },
  { product: "Shorts", value: "shorts" },
  { product: "Shirt", value: "shirt" },
];
