import React from 'react'
import Navbar from '../components/Navbar'

const HomePage = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center" style={{ backgroundImage: "url('/veloria-hero.jpg')" }}>

        <div className="bg-black bg-opacity-50 p-10 rounded-lg">
          <h1 className="text-4xl font-bold text-white">Experience Luxury with Veloria Perfumes</h1>

          <p className="text-lg font-bold text-gray-200 mt-4">Transform every moment with perfect fragrance.<br/> Fragrance is a reflection of Personality, Style and Mood.</p>

          <a href="/products" className="mt-6 inline-block bg-white text-gray-900 px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-gray-200">Shop Now</a>

        </div>
      </section>
      
      {/* Featured Section */}
      <section className="text-center py-16 bg-gray-50">
        <h2 className="text-3xl font-semibold text-gray-800">Featured Perfumes</h2>
        <p className="text-gray-600 mt-2">Discover our best-selling fragrances.</p>

        <div className="grid grid-cols-3 gap-6 mt-8 mx-20">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/perfume1.jpg" alt="Perfume 1" className="w-full rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Veloria Elegance</h3>
            <p className="text-gray-600">A fragrance that defines sophistication.</p>
            <span className="text-gray-900 font-bold mt-2 block">$79.99</span>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/perfume2.jpg" alt="Perfume 2" className="w-full rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Veloria Noir</h3>
            <p className="text-gray-600">A deep and bold scent for special occasions.</p>
            <span className="text-gray-900 font-bold mt-2 block">$89.99</span>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/perfume3.jpg" alt="Perfume 3" className="w-full rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Veloria Bloom</h3>
            <p className="text-gray-600">Floral notes that bring freshness all day long.</p>
            <span className="text-gray-900 font-bold mt-2 block">$69.99</span>
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default HomePage
