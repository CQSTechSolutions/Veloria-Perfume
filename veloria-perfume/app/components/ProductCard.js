import { Star } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
      <img 
        src={product.image || '/placeholder.jpg'} 
        alt={product.name} 
        className="w-full h-60 object-cover rounded-md"
      />

      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>

      <div className="flex items-center gap-1 text-yellow-500 mt-1">
        {[...Array(product.rating)].map((_, i) => (
          <Star key={i} size={16} fill="currentColor" stroke="none" />
        ))}
      </div>

      <p className="text-gray-600 mt-1">{product.reviews} reviews</p>
      <span className="text-xl font-bold text-gray-900 mt-2 block">${product.price}</span>
      
      <button className="mt-3 w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-700 transition">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
