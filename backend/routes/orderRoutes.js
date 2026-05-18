import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Could not load orders", error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { customerName = "Guest", items } = req.body;
    if (!items || items.length === 0) {
      return res.status(400).json({ message: "Order must include at least one item" });
    }

    const cleanItems = items.map((item) => ({
      menuItemId: item._id || item.menuItemId,
      name: item.name,
      price: Number(item.price),
      quantity: Number(item.quantity),
    }));

    const total = cleanItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const order = await Order.create({ customerName, items: cleanItems, total });
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: "Could not create order", error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (error) {
    res.status(400).json({ message: "Could not update order", error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json({ message: "Order deleted", order });
  } catch (error) {
    res.status(500).json({ message: "Could not delete order", error: error.message });
  }
});

export default router;
