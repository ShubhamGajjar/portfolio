// components/Hero.js
import React, { useEffect, useState } from "react";
import {
  ArrowDownIcon,
  DocumentArrowDownIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

const Hero = ({ title, subtitle, resumeLink }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 ai-pattern opacity-30"></div>

      {/* Floating Elements - Simplified */}
      <div className="absolute top-20 left-10 floating-element">
        <CpuChipIcon className="h-8 w-8 text-blue-500" />
      </div>
      <div className="absolute top-40 right-20 floating-element">
        <CpuChipIcon className="h-6 w-6 text-purple-500" />
      </div>
      <div className="absolute bottom-40 left-20 floating-element">
        <CpuChipIcon className="h-7 w-7 text-pink-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* AI Badge */}
        <div
          className={`mb-8 transition-all duration-500 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 ai-glass rounded-full">
            <CpuChipIcon className="h-5 w-5 text-blue-400" />
            <span className="text-blue-400 font-medium">
              AI Engineer & ML Specialist
            </span>
          </div>
        </div>

        {/* Main Title */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 transition-all duration-500 delay-200 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="ai-gradient-text">
            {title || "Hi, I'm Shubham Gajjar"}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-500 delay-400 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {subtitle ||
            "Pioneering the future with AI, Machine Learning, and Deep Learning solutions"}
        </p>

        {/* Action Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-500 delay-600 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {resumeLink && (
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 btn-ai"
            >
              <DocumentArrowDownIcon className="h-6 w-6 transition-transform duration-200 group-hover:translate-y-1" />
              Download Resume
            </a>
          )}

          <a
            href="#projects"
            className="group inline-flex items-center gap-3 px-8 py-4 glass-card text-gray-900 dark:text-white text-lg font-semibold hover:scale-105 transition-all duration-200"
          >
            Explore My Work
            <ArrowDownIcon className="h-6 w-6 transition-transform duration-200 group-hover:translate-y-1" />
          </a>
        </div>

        {/* AI Stats */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto transition-all duration-500 delay-800 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="text-center p-6 ai-card">
            <div className="text-3xl font-bold ai-gradient-text mb-2">15+</div>
            <div className="text-gray-600 dark:text-gray-400">
              AI/ML Projects
            </div>
          </div>

          <div className="text-center p-6 ai-card">
            <div className="text-3xl font-bold ai-gradient-text mb-2">5+</div>
            <div className="text-gray-600 dark:text-gray-400">
              Years in AI/ML
            </div>
          </div>

          <div className="text-center p-6 ai-card">
            <div className="text-3xl font-bold ai-gradient-text mb-2">25+</div>
            <div className="text-gray-600 dark:text-gray-400">
              Technologies Mastered
            </div>
          </div>
        </div>

        {/* AI Capabilities */}
        <div
          className={`mt-12 transition-all duration-500 delay-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            {[
              "Deep Learning",
              "Computer Vision",
              "NLP",
              "MLOps",
              "Data Science",
              "AI Ethics",
            ].map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 glass-card text-sm font-medium text-gray-700 dark:text-gray-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-500 delay-1200 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="animate-bounce">
          <ArrowDownIcon className="h-8 w-8 text-blue-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
