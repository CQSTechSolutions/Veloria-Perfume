
"use client";

const AboutUs = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">About Veloria Perfumes</h1>
      
      {/* Company Introduction */}
      <section className="text-center mb-12">
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Veloria Perfumes is a premium fragrance brand dedicated to crafting luxurious, long-lasting scents. Our perfumes are crafted with the finest ingredients to create captivating experiences that linger in your memories.
        </p>
      </section>
      
      {/* Our Mission */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-4">Our Mission</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          Our mission is to deliver world-class fragrances that exude elegance and confidence. We aim to provide high-quality, affordable luxury perfumes inspired by nature, culture, and individuality.
        </p>
      </section>
      
      {/* Why Choose Us */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-4">Why Choose Veloria?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">We use the finest ingredients to create long-lasting, elegant scents.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Affordable Luxury</h3>
            <p className="text-gray-600">Experience luxury at an accessible price without compromising on quality.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Trusted by Thousands</h3>
            <p className="text-gray-600">Our loyal customers love our perfumes for their sophistication and uniqueness.</p>
          </div>
        </div>
      </section>
      
      {/* Customer Trust */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Trusted by Our Customers</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Veloria Perfumes is proud to be trusted by thousands of customers worldwide. We strive to create memorable fragrances that leave a lasting impression. Join our community and indulge in timeless elegance.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
