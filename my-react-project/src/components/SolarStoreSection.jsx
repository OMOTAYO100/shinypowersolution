import React, { useState } from "react";
import { useSolarStore } from "../hooks/useSolarStore";
import { useCart } from "../context/CartContext";
import { SolarStore } from "../data/SolarStore";

function SolarStoreSection() {
  const { products } = useSolarStore();
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Panels", "Batteries", "Inverters", "Others"];

  const filteredProducts = activeTab === "All" 
    ? products 
    : products.filter(product => product.category === activeTab);

  return (
    <section className="py-16 bg-gray-50 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center font-figtree">
          Solar Store
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === category
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Products Grid */}
        

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No products found in this category.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="relative">
                   <img
                     src={product.image}
                     alt={`${product.name} - Solar Energy Product by Shiny Power Solution`}
                     loading="lazy"
                     className="w-full h-48 object-cover"
                   />
                   <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-green-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                     {product.category || "Others"}
                   </span>
                </div>

                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-4">
                    <p className="text-xl font-bold text-green-600">
                      {product.price}
                    </p>
                    <button 
                      onClick={() => addToCart(product)}
                      className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 active:scale-95 transition font-medium"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default SolarStoreSection;
