import ProductCard from '../components/ProductCard';

const Products = () => {

  const productsList = [
    { id: 1, name: "Veloria Elegance",description: "description for Veloria Elegance", price: 79.99, rating: 5, reviews: 120, image: "https://rukminim1.flixcart.com/image/300/300/xif0q/shopsy-perfume/e/d/r/50-black-panton-1pc-spray-perfume-50-ml-unisex-premium-quality-original-imagqwuwzajvfq3t.jpeg" },
    { id: 2, name: "Veloria Noir",description: "description for Veloria Noir", price: 89.99, rating: 4, reviews: 98, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbdQw6RkS91rzMHhIVhE9s8fQGwTMuOsaNQw&s" },
    { id: 3, name: "Veloria Bloom",description: "description for Veloria Bloom", price: 69.99, rating: 5, reviews: 150, image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/perfume/n/l/d/-original-imagkk24zyxzymxe.jpeg?q=90&crop=false" },
    { id: 4, name: "Veloria Mystique",description: "description for Veloria Mystique", price: 99.99, rating: 4, reviews: 85, image: "https://zaoud.it/cdn/shop/files/valor-mystique-perfume-bottle-shows-against-white-background.jpg?v=1715544087" },
    { id: 5, name: "Veloria Royal",description: "description for Veloria Royal", price: 109.99, rating: 5, reviews: 200, image: "https://images-eu.ssl-images-amazon.com/images/I/71Unah0s8vL._AC_UL600_SR600,600_.jpg"}
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