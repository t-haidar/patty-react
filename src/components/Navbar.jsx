import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-black text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-orange-400 text-2xl font-bold">Patty's</h1>
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>&#9776;</button>
        <ul className="hidden md:flex gap-6 font-bold">
          <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
          <li><Link to="/menu" className="hover:text-orange-400">Menu</Link></li>
          <li><Link to="/about" className="hover:text-orange-400">About</Link></li>
          <li><Link to="/contact" className="hover:text-orange-400">Contact</Link></li>
        </ul>
      </div>
      {open && (
        <ul className="md:hidden flex flex-col mt-3 font-bold">
          <li className="border-t border-gray-700"><Link to="/" className="block px-4 py-3 hover:text-orange-400" onClick={() => setOpen(false)}>Home</Link></li>
          <li className="border-t border-gray-700"><Link to="/menu" className="block px-4 py-3 hover:text-orange-400" onClick={() => setOpen(false)}>Menu</Link></li>
          <li className="border-t border-gray-700"><Link to="/about" className="block px-4 py-3 hover:text-orange-400" onClick={() => setOpen(false)}>About</Link></li>
          <li className="border-t border-gray-700"><Link to="/contact" className="block px-4 py-3 hover:text-orange-400" onClick={() => setOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
