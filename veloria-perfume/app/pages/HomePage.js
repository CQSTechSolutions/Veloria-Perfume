"use client";
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Footer from '../components/Footer';

const HomePage = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === offers.length - 1 ? 0 : prevIndex + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const offers = [
    { id: 1, text: "Valentine's Special - Buy 1 Get 1 Free!", image: "https://img.freepik.com/free-vector/perfume-deodorant-bottles-water-splash-with-drops_33099-1657.jpg?semt=ais_hybrid" },
    { id: 2, text: "20% Off on All Perfumes - Limited Time!", image: "https://bellavitaluxury.co.in/cdn/shop/articles/15th_March_blog_banner.jpg?v=1714030009" },
    { id: 3, text: "Exclusive Valentine's Gift Sets - Shop Now!", image: "https://img.freepik.com/free-vector/perfume-cosmetic-bottle-splashing-water-surface-banner_107791-1043.jpg?semt=ais_hybrid" }
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? offers.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === offers.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <Navbar />

      {/* Carousel Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {offers.map((offer) => (
            <div key={offer.id} className="w-full flex-shrink-0 relative">
              <img src={offer.image} alt={offer.text} className="w-full h-[400px] object-fill" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0">
                {/* <h2 className="text-white text-2xl font-bold">{offer.text}</h2> */}
              </div>
            </div>
          ))}
        </div>
        {/* Navigation Buttons */}
        <button onClick={prevSlide} className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          <ChevronRight size={24} />
        </button>
      </section>

      {/* Hero Section */}
      <section className="mt-10 relative bg-contain bg-center h-[500px] flex items-center justify-center text-center" style={{ backgroundImage: "url('https://khanempirespvtltd.com/wp-content/uploads/2024/09/ICE-MOUNTAIN-JPEG-scaled.jpg')" }}>

        <div className="bg-black bg-opacity-50 p-10 rounded-lg">
          <h1 className="text-4xl font-bold text-white">Experience Luxury with Veloria Perfumes</h1>

          <p className="text-lg font-bold text-gray-200 mt-4">Transform every moment with perfect fragrance.<br/> Fragrance is a reflection of Personality, Style and Mood.</p>

          <a href="/products" className="mt-6 inline-block bg-white text-gray-900 px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-gray-200">Shop Now</a>

        </div>
      </section>
      
      {/* Categories Section */}
      <section className="text-center py-16 bg-gray-100">
        <h2 className="text-3xl font-semibold text-gray-800">Explore Our Categories</h2>
        <div className="grid grid-cols-3 gap-6 mt-8 mx-20">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl cursor-pointer">
            <img src="https://i.ebayimg.com/images/g/0wcAAOSwTIVkkufG/s-l400.jpg" alt="Men's Perfume" className="w-full h-[36rem] rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Men's Collection</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl cursor-pointer">
            <img src="https://bryanandcandy.com/cdn/shop/files/Rose-Listing-100ml_1000x.jpg?v=1708064963" alt="Women's Perfume" className="w-full h-[36rem] rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Women's Collection</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl cursor-pointer">
            <img src="https://images-static.nykaa.com/media/catalog/product/5/f/5fcfc40BEAAA00000083_7.jpg?tr=w-500" alt="Unisex Perfume" className="w-full h-[36rem] rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Unisex Collection</h3>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="text-center py-16 bg-gray-50">
        <h2 className="text-3xl font-semibold text-gray-800">Featured Perfumes</h2>
        <p className="text-gray-600 mt-2">Discover our best-selling fragrances.</p>

        <div className="grid grid-cols-3 gap-6 mt-8 mx-20">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://rukminim1.flixcart.com/image/300/300/xif0q/shopsy-perfume/e/d/r/50-black-panton-1pc-spray-perfume-50-ml-unisex-premium-quality-original-imagqwuwzajvfq3t.jpeg" alt="Perfume 1" className="w-full h-[30rem] rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Veloria Elegance</h3>
            <p className="text-gray-600">A fragrance that defines sophistication.</p>
            <span className="text-gray-900 font-bold mt-2 block">$79.99</span>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbdQw6RkS91rzMHhIVhE9s8fQGwTMuOsaNQw&s" alt="Perfume 2" className="w-full h-[30rem] rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Veloria Noir</h3>
            <p className="text-gray-600">A deep and bold scent for special occasions.</p>
            <span className="text-gray-900 font-bold mt-2 block">$89.99</span>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/perfume/n/l/d/-original-imagkk24zyxzymxe.jpeg?q=90&crop=false" alt="Perfume 3" className="w-full h-[30rem] rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Veloria Bloom</h3>
            <p className="text-gray-600">Floral notes that bring freshness all day long.</p>
            <span className="text-gray-900 font-bold mt-2 block">$69.99</span>
          </div>
          
        </div>
      </section>

      <Footer/>
    </div>
  )
}

export default HomePage
