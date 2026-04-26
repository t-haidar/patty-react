import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Toast from "./components/Toast";

function App() {
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState("");

  function addToCart(name, price) {
    setCart(prev => {
      const existing = prev.find(i => i.name === name);
      if (existing) return prev.map(i => i.name === name ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { name, price, quantity: 1 }];
    });
    setToast(name);
    setTimeout(() => setToast(""), 2500);
  }

  function removeFromCart(name) {
    setCart(prev => {
      const existing = prev.find(i => i.name === name);
      if (!existing) return prev;
      if (existing.quantity > 1) return prev.map(i => i.name === name ? { ...i, quantity: i.quantity - 1 } : i);
      return prev.filter(i => i.name !== name);
    });
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <Router>
      <Navbar />
      <Toast message={toast} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
