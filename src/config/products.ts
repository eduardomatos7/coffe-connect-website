import { Product } from "@/interfaces/Product";
import muffin from "@/public/assets/images/products/muffin.jpg";
import smoothie from "@/public/assets/images/products/smoothie.jpg";
import brownie from "@/public/assets/images/products/brownie.jpg";
import cappuccino from "@/public/assets/images/products/cappuccino.jpg";
import chai_latte from "@/public/assets/images/products/chai_latte.jpg";
import cheese_bread from "@/public/assets/images/products/cheese_bread.jpg";
import cheesecake from "@/public/assets/images/products/cheesecake.jpg";
import croissant from "@/public/assets/images/products/croissant.jpg";
import donut from "@/public/assets/images/products/donut.jpg";
import espresso from "@/public/assets/images/products/espresso.jpg";
import iced_coffee from "@/public/assets/images/products/iced_coffee.jpg";
import juice from "@/public/assets/images/products/juice.jpg";
import sandwich from "@/public/assets/images/products/sandwich.jpg";

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
