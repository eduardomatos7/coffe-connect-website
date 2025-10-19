import { Product } from "@/interfaces/Product";

const BUCKET_URL = "https://coffeeconnect-bucket.s3.us-east-1.amazonaws.com";

const muffin = `${BUCKET_URL}/muffin.jpg`;
const smoothie = `${BUCKET_URL}/smoothie.jpg`;
const brownie = `${BUCKET_URL}/brownie.jpg`;
const cappuccino = `${BUCKET_URL}/cappuccino.jpg`;
const chai_latte = `${BUCKET_URL}/chai_latte.jpg`;
const cheese_bread = `${BUCKET_URL}/cheese_bread.jpg`;
const cheesecake = `${BUCKET_URL}/cheesecake.jpg`;
const croissant = `${BUCKET_URL}/croissant.jpg`;
const donut = `${BUCKET_URL}/donut.jpg`;
const espresso = `${BUCKET_URL}/espresso.jpg`;
const iced_coffee = `${BUCKET_URL}/iced_coffee.jpg`;
const juice = `${BUCKET_URL}/juice.jpg`;
const sandwich = `${BUCKET_URL}/sandwich.jpg`;

export const devProducts: Product[] = [
  { id: 14, imageUrl: brownie, name: "Brownie", price: 12.9, rebate: 5, quantity: "1 unidade" },
  { id: 15, imageUrl: cappuccino, name: "Cappuccino", price: 14.5, rebate: 25, quantity: 200 },
  { id: 16, imageUrl: chai_latte, name: "Chai Latte", price: 16.0, rebate: 12, quantity: 300 },
  { id: 24, imageUrl: muffin, name: "Muffin", price: 8.5, quantity: "1 unidade" },
  { id: 26, imageUrl: smoothie, name: "Smoothie", price: 13.9, quantity: 300 },
  { id: 17, imageUrl: cheese_bread, name: "Cheese Bread", price: 4, rebate: 9, quantity: "1 unidade" },
  { id: 18, imageUrl: cheesecake, name: "Cheesecake", price: 18.0, rebate: 9},
  { id: 19, imageUrl: croissant, name: "Croissant", price: 9.5, rebate: 10, quantity: "1 unidade"},
  { id: 20, imageUrl: donut, name: "Donut", price: 10.9, rebate: 12.5, quantity: "1 unidade" },
  { id: 22, imageUrl: iced_coffee, name: "Iced Coffee", price: 11.9, rebate: 10, quantity: 400 },
  { id: 23, imageUrl: juice, name: "Juice", price: 7.9, rebate: 5, quantity: 500 },
  { id: 25, imageUrl: sandwich, name: "Sandwich", price: 19.9, rebate: 12, quantity: "1 unidade" },
  { id: 21, imageUrl: espresso, name: "Espresso Clássico", price: 6.9, rebate: 25, quantity: 100 },
];

export const productsInCart: Product[] = [

  {
    id: 1,
    name: "Café Expresso",
    price: 9.99,
    imageUrl: espresso,
  },
  {
    id: 2,
    name: "Café Latte",
    price: 12.49,
    imageUrl: chai_latte,
    rebate: 10,
  },
  {
    id: 4,
    name: "Café Latte",
    price: 12.49,
    imageUrl: chai_latte,
    rebate: 10,
  },
  {
    id: 3,
    name: "Café Expresso",
    price: 9.99,
    imageUrl: espresso,
  },
];