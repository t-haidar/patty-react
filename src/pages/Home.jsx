import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-[#111] min-h-screen text-white">
      <div
        className="flex flex-col items-center justify-center text-center px-6 py-40 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Patty's Burger Restaurant</h2>
        <p className="text-lg mb-6">Enjoy delicious burgers, fries, pizza, and more in a warm and welcoming place.</p>
        <Link to="/menu" className="bg-orange-400 text-black font-bold px-6 py-3 rounded hover:bg-orange-500">View Menu</Link>
      </div>
      <div className="text-center py-12 px-6">
        <h2 className="text-3xl font-bold mb-4">Welcome</h2>
        <p className="max-w-xl mx-auto text-gray-300">We serve fresh, affordable food made with quality ingredients. Come in and enjoy a meal with us!</p>
      </div>
      <footer className="bg-black text-center py-6 mt-10 text-gray-400">
        <p>Open: Mon-Sun 10AM - 8PM</p>
        <p>Follow us: Facebook | Instagram</p>
      </footer>
    </div>
  );
}

export default Home;
