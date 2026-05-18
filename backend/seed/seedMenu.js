import mongoose from "mongoose";
import dotenv from "dotenv";
import MenuItem from "../models/MenuItem.js";

dotenv.config();

const menuItems = [
  { name: "Burger", price: 7.99, category: "Food", description: "Classic burger with lettuce, tomato, and house sauce.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd" },
  { name: "Fries", price: 2.99, category: "Side", description: "Crispy golden fries.", img: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d" },
  { name: "Pizza", price: 9.99, category: "Food", description: "Cheesy pizza with tomato sauce.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591" },
  { name: "Salad", price: 5.99, category: "Food", description: "Fresh garden salad.", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c" },
  { name: "Pasta", price: 8.99, category: "Food", description: "Pasta with savory sauce.", img: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb" },
  { name: "Soda", price: 1.99, category: "Drink", description: "Cold refreshing soda.", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97" }
];

try {
  await mongoose.connect(process.env.MONGO_URI);
  await MenuItem.deleteMany({});
  await MenuItem.insertMany(menuItems);
  console.log("Menu seeded successfully");
  process.exit(0);
} catch (error) {
  console.error(error);
  process.exit(1);
}
