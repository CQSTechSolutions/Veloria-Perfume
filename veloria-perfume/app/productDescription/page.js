// pages/product/[id].js
"use client";
import { useState } from 'react';
import { Star, Minus, Plus } from 'lucide-react';

const product = {
  id: 1,
  name: "Luxury Perfume Gift Set For Men - 4 x 20ml",
  price: 849.00,
  rating: 4.7,
  reviews: 1225,
  type: "Gift Box",
  images: ["https://rukminim1.flixcart.com/image/300/300/xif0q/shopsy-perfume/e/d/r/50-black-panton-1pc-spray-perfume-50-ml-unisex-premium-quality-original-imagqwuwzajvfq3t.jpeg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbdQw6RkS91rzMHhIVhE9s8fQGwTMuOsaNQw&s", "https://rukminim2.flixcart.com/image/850/1000/xif0q/perfume/n/l/d/-original-imagkk24zyxzymxe.jpeg?q=90&crop=false"],
  description: "A luxurious collection of long-lasting perfumes, perfect for gifting.",
  features: ["Long Lasting", "IFRA - Certified", "Imported Oils", "Made in India"]
};

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Images */}
        <div>
          <img src={selectedImage} alt={product.name} className="w-full rounded-lg shadow-md" />
          <div className="flex gap-2 mt-4">
            {product.images.map((img, index) => (
              <img key={index} src={img} alt={product.name} className="w-16 h-16 object-cover cursor-pointer border rounded-md hover:border-gray-700"
                onClick={() => setSelectedImage(img)} />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center gap-2 text-yellow-500 mt-2">
            <Star size={20} fill="currentColor" stroke="none" />
            <span className="text-lg font-medium">{product.rating} ({product.reviews} Reviews)</span>
          </div>
          <p className="text-gray-700 mt-2">Type — <span className="font-semibold">{product.type}</span></p>
          <p className="text-2xl font-bold text-gray-900 mt-4">₹{product.price.toFixed(2)}</p>
          <p className="text-gray-600 mt-2">Inclusive of all taxes</p>

          {/* Quantity Selector */}
          <div className="flex items-center mt-4">
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-2 border rounded-md bg-gray-200 hover:bg-gray-300">
              <Minus size={16} />
            </button>
            <span className="px-4 text-lg font-semibold">{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)} className="p-2 border rounded-md bg-gray-200 hover:bg-gray-300">
              <Plus size={16} />
            </button>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full mt-6 bg-black text-white py-3 rounded-md font-semibold text-lg hover:bg-gray-800 transition">
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="mt-12 border-t pt-6">
        <h2 className="text-2xl font-bold">Product Description</h2>
        <p className="text-gray-700 mt-2">{product.description}</p>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {product.features.map((feature, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg text-center font-semibold">
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
