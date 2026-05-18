import express from "express";
import MenuItem from "../models/MenuItem.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const items = await MenuItem.find().sort({ category: 1, name: 1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Could not load menu items", error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const item = await MenuItem.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: "Could not create menu item", error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const item = await MenuItem.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) return res.status(404).json({ message: "Menu item not found" });
    res.json(item);
  } catch (error) {
    res.status(400).json({ message: "Could not update menu item", error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const item = await MenuItem.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: "Menu item not found" });
    res.json({ message: "Menu item deleted", item });
  } catch (error) {
    res.status(500).json({ message: "Could not delete menu item", error: error.message });
  }
});

export default router;
