// components/Hero.js
import React from 'react';

const Hero = ({ title, subtitle, resumeLink }) => {
  return (
    <section id="hero" className="py-20 md:py-28 text-center"> {/* Add padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
          {title || "Hi, I'm Shubham Gajjar 👋"} {/* Provide default */}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          {subtitle || "I’m passionate about AI, ML, and Deep Learning. Explore my work!"} {/* Provide default */}
        </p>
        {resumeLink && ( // Only render button if link is provided
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 transition-all"
          >
            📄 Download Resume
          </a>
        )}
      </div>
    </section>
  );
};

export default Hero;