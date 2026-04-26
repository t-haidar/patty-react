import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }
  return (
    <div className="bg-[#111] min-h-screen text-white px-6 py-10 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      {submitted ? (
        <p className="text-orange-400 text-xl font-bold">Message sent! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 max-w-md mx-auto">
          <input required type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-[#222] text-white border border-gray-600" />
          <input required type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-[#222] text-white border border-gray-600" />
          <textarea required placeholder="Your Message" rows="5" className="w-full px-4 py-3 rounded-lg bg-[#222] text-white border border-gray-600"></textarea>
          <button type="submit" className="bg-orange-400 text-black font-bold px-8 py-3 rounded hover:bg-orange-500 w-full">Send</button>
        </form>
      )}
      <footer className="bg-black text-center py-6 mt-10 text-gray-400">
        <p>Open: Mon-Sun 10AM - 8PM</p>
        <p>Follow us: Facebook | Instagram</p>
      </footer>
    </div>
  );
}

export default Contact;
