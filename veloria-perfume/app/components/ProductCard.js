"use client";
import { Star } from "lucide-react";
import Link from "next/link";
import ProductDetail from "../productDescription/page";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const addToCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    // console.log("Product added to cart",cart);
    const updatedCart = [...cart];
    // console.log("Updated Cart",updatedCart);
    const existingProduct = updatedCart.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage"));
    toast.success(`${product.name} added to cart!`);
    alert(`${product.name} added to cart!`);
  };

  const handleProductDescription = () => {
    // Redirect to product description page
    <ProductDetail />;
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 hover:cursor-pointer">
      <Link onClick={handleProductDescription} href="/productDescription">
        <img
          src={product.image || "/placeholder.jpg"}
          alt={product.name}
          className="w-full h-60 object-cover rounded-md"
        />

        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
        <p className="text-md font-sans mt-2">{product.description}</p>

        <div className="flex items-center gap-1 text-yellow-500 mt-1">
          {[...Array(product.rating)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" stroke="none" />
          ))}
        </div>

        <p className="text-gray-600 mt-1">{product.reviews} reviews</p>
        <span className="text-xl font-bold text-gray-900 mt-2 block">
          ${product.price}
        </span>
      </Link>
      <button onClick={addToCart} className="mt-3 w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-700 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
