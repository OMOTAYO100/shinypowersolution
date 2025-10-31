import React, { useState } from "react";
import { solarNewsData } from "../data/SolarNewsData";
import { Link } from "react-router-dom";

function BlogSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="p-6 md:p-16 lg:p-20 bg-white text-center font-Figtree">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Latest Articles
      </h2>

      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between" >
      
       <Link to="/blog" className="self-center text-green-600 font-medium mb-8 inline-block bg-slate-100 p-2 rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300">
        View All Articles
      </Link>

      <p className="text-md text-gray-400 mb-8">
        Stay updated with our latest news and insights
      </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {solarNewsData.map((post, index) => {
          const isExpanded = expandedIndex === index;
          const content = isExpanded
            ? post.brief
            : post.brief.slice(0, 120) + "...";

          return (
            <div
              key={index}
              className={`bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-left ${index === 1 ? "md:ring-1 md:ring-green-100 md:scale-110" : ""}`}
            >
              <figure className="w-full">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover mb-2 rounded-lg"
                />
              </figure>
              <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{content}</p>
              <p className="text-sm text-gray-500 mb-4 text-end">{post.date}</p>

              <button
                onClick={() => toggleReadMore(index)}
                className="text-green-600 font-medium hover:text-green-800 hover:underline transition-all duration-300"
              >
                {isExpanded ? "Show Less ⬆" : "Show More ⬇"}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default BlogSection;
