// pages/cart.js
"use client";
import { useEffect, useState } from 'react';
import { Trash } from 'lucide-react';

const initialCart = [
  { id: 1, name: "Veloria Elegance", price: 79.99, quantity: 1, image: "https://rukminim1.flixcart.com/image/300/300/xif0q/shopsy-perfume/e/d/r/50-black-panton-1pc-spray-perfume-50-ml-unisex-premium-quality-original-imagqwuwzajvfq3t.jpeg" },
  { id: 2, name: "Veloria Noir", price: 89.99, quantity: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbdQw6RkS91rzMHhIVhE9s8fQGwTMuOsaNQw&s" },
];

const Cart = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const updateQuantity = (id, amount) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {cart.map(item => (
              <div key={item.id} className="flex items-center gap-6 border-b pb-4 mb-4">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => updateQuantity(item.id, -1)} className="p-2 border rounded-md bg-gray-200 hover:bg-gray-300">-</button>
                    <span className="px-4 text-lg font-semibold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="p-2 border rounded-md bg-gray-200 hover:bg-gray-300">+</button>
                  </div>
                </div>
                <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
                  <Trash size={20} />
                </button>
              </div>
            ))}
          </div>
          <div className="bg-gray-100 p-6 rounded-lg h-fit shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <p className="text-lg">Total: <span className="font-bold">₹{totalPrice}</span></p>
            <button className="w-full mt-4 bg-black text-white py-3 rounded-md font-semibold text-lg hover:bg-gray-800 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 text-lg">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
