const items = [
  { name: "Burger", price: 7.99, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd" },
  { name: "Fries", price: 2.99, img: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d" },
  { name: "Pizza", price: 9.99, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591" },
  { name: "Salad", price: 5.99, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c" },
  { name: "Pasta", price: 8.99, img: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb" },
  { name: "Soda", price: 1.99, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97" },
];

function Menu({ cart, addToCart, removeFromCart, clearCart }) {
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  return (
    <div className="bg-[#111] min-h-screen text-white px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Menu</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {items.map(item => (
          <div key={item.name} className="bg-[#222] rounded-xl p-4 w-52 text-center">
            <img src={item.img} alt={item.name} className="w-full h-36 object-cover rounded-lg mb-3" />
            <h3 className="font-bold text-lg">{item.name}</h3>
            <p className="text-gray-300 mb-3">${item.price.toFixed(2)}</p>
            <button onClick={() => addToCart(item.name, item.price)} className="bg-orange-400 text-black font-bold px-4 py-2 rounded hover:bg-orange-500 w-full">Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="bg-[#1b1b1b] max-w-2xl mx-auto mt-12 p-6 rounded-xl">
        <h3 className="text-2xl font-bold mb-4">Your Cart</h3>
        {cart.length === 0 ? (
          <p className="text-gray-400">Your cart is empty.</p>
        ) : (
          <>
            {cart.map(item => (
              <div key={item.name} className="flex justify-between items-center bg-[#222] px-4 py-3 rounded-lg mb-3 flex-wrap gap-2">
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
                <span>Qty: {item.quantity}</span>
                <button onClick={() => removeFromCart(item.name)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Remove</button>
              </div>
            ))}
            <p className="text-right font-bold mt-4 text-lg">Total: ${total.toFixed(2)}</p>
            <button onClick={clearCart} className="mt-4 bg-orange-400 text-black font-bold px-5 py-2 rounded hover:bg-orange-500">Clear Cart</button>
          </>
        )}
      </div>
      <footer className="bg-black text-center py-6 mt-10 text-gray-400">
        <p>Open: Mon-Sun 10AM - 8PM</p>
        <p>Follow us: Facebook | Instagram</p>
      </footer>
    </div>
  );
}

export default Menu;
