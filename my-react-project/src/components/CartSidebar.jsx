import React from 'react';
import { useCart } from '../context/CartContext';
import { FaTimes, FaPlus, FaMinus, FaTrash, FaWhatsapp } from 'react-icons/fa';

const CartSidebar = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity } = useCart();

  // Calculate total by removing non-numeric chars from price (assuming format like "₦85,000")
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      // Extract numbers only
      const numericPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
      return total + (isNaN(numericPrice) ? 0 : numericPrice * item.quantity);
    }, 0);
  };

  const totalAmount = calculateTotal();

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    let message = "Hello Shiny Power Solution, I would like to order the following items:\n\n";
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - Quantity: ${item.quantity}\n`;
    });

    message += `\n*Total Amount:* ₦${totalAmount.toLocaleString()}`;
    message += "\n\nPlease let me know how to proceed with payment and delivery.";

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "2349048583593"; // Updated to match user provided business line
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity backdrop-blur-sm"
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-2xl z-60 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            Your Cart
            <span className="bg-green-100 text-green-700 text-sm py-0.5 px-2.5 rounded-full">
              {cartItems.length}
            </span>
          </h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                <FaWhatsapp className="text-gray-300 opacity-50" size={32} />
              </div>
              <p>Your cart is empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-green-600 font-medium hover:underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex gap-4 bg-white p-3 border border-gray-100 rounded-xl shadow-sm">
                  <div className="w-20 h-20 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-800 line-clamp-1">{item.name}</h3>
                      <p className="text-green-600 font-bold text-sm mt-1">{item.price}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-3 bg-gray-50 px-2 py-1 rounded-lg border border-gray-200">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-gray-500 hover:text-green-600 transition p-1"
                        >
                          <FaMinus size={10} />
                        </button>
                        <span className="font-medium text-sm w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-gray-500 hover:text-green-600 transition p-1"
                        >
                          <FaPlus size={10} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-600 transition p-2 hover:bg-red-50 rounded-md"
                      >
                        <FaTrash size={14} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-5 border-t border-gray-100 bg-gray-50 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Estimated Total:</span>
              <span className="text-2xl font-bold text-gray-800">₦{totalAmount.toLocaleString()}</span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-md shadow-green-200 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <FaWhatsapp size={20} />
              Checkout via WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
