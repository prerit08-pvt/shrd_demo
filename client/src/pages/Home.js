import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100">
    {/* Hero Section */}
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url("https://png.pngtree.com/background/20230613/original/pngtree-multiple-prints-of-flowers-on-a-machine-picture-image_3411361.jpg")' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold mb-6">
          Your Creative Printing Partner
        </h1>
        <p className="text-xl mb-8">
          From business cards to large-format banners, we bring your ideas to life.
        </p>
        <button className="px-8 py-3 bg-orange-500 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300">
          Explore Our Services
        </button>
      </div>
    </section>

    {/* Featured Services */}
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Our Featured Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Business Cards</h3>
            <p className="text-gray-600">
              High-quality, custom-designed business cards to leave a lasting impression.
            </p>
          </div>
          <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Brochures</h3>
            <p className="text-gray-600">
              Beautiful brochures to highlight your brand and services.
            </p>
          </div>
          <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Banners</h3>
            <p className="text-gray-600">
              Large-format banners for events, promotions, and more.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <blockquote className="p-8 bg-white rounded-lg shadow-lg">
            <p className="text-xl italic text-gray-600">"The quality of the printing and the customer service was outstanding!"</p>
            <cite className="block mt-4 text-lg font-semibold text-orange-500">- Client A</cite>
          </blockquote>
          <blockquote className="p-8 bg-white rounded-lg shadow-lg">
            <p className="text-xl italic text-gray-600">"Fast delivery, great prices, and top-notch printing solutions."</p>
            <cite className="block mt-4 text-lg font-semibold text-orange-500">- Client B</cite>
          </blockquote>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Your Printing Agency. All rights reserved.</p>
        <p className="mt-4">Follow us on <span className="text-orange-500">Instagram</span> and <span className="text-orange-500">Facebook</span></p>
      </div>
    </footer>
  </div>
  );
};

export default Home;
