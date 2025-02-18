"use client";
import Link from 'next/link';
import { ShoppingCart, Search, User } from 'lucide-react';
import Products from '../products/page';
import Cart from '../cart/page';
import Profile from '../profile/page';
import ContactUs from '../contactUs/page';

const Navbar = () => {

  const handleProducts = () => {
    <Products />
  }
  const handleContact = () => {
    <ContactUs />
  }
  const handleCart = () => {
    <Cart />
  }
  const handleProfile = () => {
    <Profile />
  }

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <img src= "https://png.pngtree.com/png-clipart/20240804/original/pngtree-luxury-perfume-bottle-isolated-on-transparent-background-png-image_15699685.png" alt="Veloria Perfumes" className="w-16 h-16" />
        <span className="text-2xl font-bold text-gray-800 cursor-pointer">Veloria Perfumes</span>
      </Link>

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search perfumes..."
          className="border rounded-full px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <Search className="absolute right-3 top-2.5 text-gray-500" size={18} />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <Link onClick={handleProducts} href="/products" className="text-gray-700 hover:text-gray-900">Products</Link>
        <Link onClick={handleContact} href="/contactUs" className="text-gray-700 hover:text-gray-900">Contact Us</Link>
        <Link onClick={handleCart} href="/cart" className="relative">
          <ShoppingCart size={24} className="text-gray-700 hover:text-gray-900" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-2 py-1 rounded-full">0</span>
        </Link>
        <Link onClick={handleProfile} href="/profile" className="text-gray-700 hover:text-gray-900">
          <User size={24} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;