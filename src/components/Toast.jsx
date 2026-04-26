function Toast({ message }) {
  if (!message) return null;
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-orange-400 text-black font-bold px-6 py-3 rounded-lg z-50 shadow-lg">
      {message} added to cart!
    </div>
  );
}

export default Toast;
