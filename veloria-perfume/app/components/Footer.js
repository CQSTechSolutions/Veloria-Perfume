import Link from 'next/link';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src= "https://png.pngtree.com/png-clipart/20240804/original/pngtree-luxury-perfume-bottle-isolated-on-transparent-background-png-image_15699685.png" alt="Veloria Perfumes" className="w-16 h-16" />
          <span className="text-xl font-bold ml-2">Veloria Perfumes</span>
        </div>
        
        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/products" className="hover:text-gray-400">Products</Link>
          <Link href="/about" className="hover:text-gray-400">About Us</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <Instagram size={24} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <Facebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <Twitter size={24} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <Youtube size={24} />
          </a>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="text-center mt-6 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Veloria Perfumes | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;