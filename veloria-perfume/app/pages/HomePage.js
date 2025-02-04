import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">Veloria Collections - Luxury Perfumes</h1>
      <Link href="/products">
        <button className="mt-5 px-6 py-3 bg-blue-600 text-white rounded-lg">
          Explore Our Collection
        </button>
      </Link>
    </div>
  )
}

export default HomePage
