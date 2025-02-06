import ProductCard from '../components/ProductCard';

const Products = () => {

  const productsList = [
    { id: 1, name: "Veloria Elegance",description: "description for Veloria Elegance", price: 79.99, rating: 5, reviews: 120, image: "/perfume1.jpg" },
    { id: 2, name: "Veloria Noir",description: "description for Veloria Noir", price: 89.99, rating: 4, reviews: 98, image: "/perfume2.jpg" },
    { id: 3, name: "Veloria Bloom",description: "description for Veloria Bloom", price: 69.99, rating: 5, reviews: 150, image: "/perfume3.jpg" },
    { id: 4, name: "Veloria Mystique",description: "description for Veloria Mystique", price: 99.99, rating: 4, reviews: 85, image: "" },
    { id: 5, name: "Veloria Royal",description: "description for Veloria Royal", price: 109.99, rating: 5, reviews: 200, image: "" }
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Explore Veloria Perfumes</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsList.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;