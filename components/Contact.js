// components/Contact.js
import React from "react";
import { socialLinks } from "../utils/data";
import {
  EnvelopeIcon,
  GlobeAltIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  const contactInfo = [
    {
      icon: EnvelopeIcon,
      label: "Email",
      value: "shubhamkgajjar2002@gmail.com",
      href: "mailto:shubhamkgajjar2002@gmail.com",
    },
    {
      icon: GlobeAltIcon,
      label: "Website",
      value: "shubhamgajjar.vercel.app",
      href: "https://shubhamgajjar.vercel.app",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 relative overflow-hidden bg-white dark:bg-gray-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 ai-pattern opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold ai-gradient-text mb-4">
            Let's Build Together
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate on cutting-edge projects? Let's discuss how we
            can bring innovative solutions to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="ai-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <CpuChipIcon className="h-8 w-8 text-blue-400" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Get In Touch
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Whether you're looking to collaborate on projects, discuss
                opportunities, or explore innovative solutions, I'm here to help
                bring your vision to reality.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 ai-card transition-all duration-200"
                >
                  <div className="p-3 ai-glass rounded-lg">
                    <info.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {info.label}
                    </div>
                    <div className="text-gray-900 dark:text-white font-medium">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-8">
            <div className="ai-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <CpuChipIcon className="h-8 w-8 text-purple-400" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Connect & Collaborate
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Follow my journey and connect with me on social platforms to
                stay updated with the latest developments and insights.
              </p>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-6 ai-card transition-all duration-200"
                >
                  <div className="p-3 ai-gradient rounded-lg group-hover:scale-110 transition-transform">
                    <div className="text-white font-bold text-lg">
                      {social.icon === "github" && "G"}
                      {social.icon === "linkedin" && "L"}
                      {social.icon === "twitter" && "T"}
                      {social.icon === "email" && "E"}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-900 dark:text-white font-semibold">
                      {social.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Connect
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Call to Action */}
            <div className="ai-card p-8">
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Ready to Innovate Together?
              </h4>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Let's discuss how we can leverage AI and machine learning to
                solve complex problems and create impactful solutions.
              </p>
              <a
                href="mailto:shubhamkgajjar2002@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 btn-ai"
              >
                Start a Conversation
                <EnvelopeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Collaboration Areas */}
        <div className="mt-12">
          <div className="ai-card p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <CpuChipIcon className="h-8 w-8 text-blue-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Collaboration Areas
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-lg font-bold ai-gradient-text mb-2">
                  Research & Development
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Novel algorithms and cutting-edge research
                </p>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold ai-gradient-text mb-2">
                  Product Development
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  AI-powered applications and solutions
                </p>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold ai-gradient-text mb-2">
                  Consulting
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Strategy and implementation guidance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
