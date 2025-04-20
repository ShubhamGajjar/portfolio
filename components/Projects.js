// components/Projects.js
import React from 'react';

const Projects = () => {
  // Placeholder for project data - replace with actual data later
  const projectData = []; // e.g., [ { id: 1, title: 'Project A', ... }, ... ]

  return (
    <section id="projects" className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800"> {/* Subtle background change */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          My Projects
        </h2>

        {/* Project Grid Placeholder */}
        {projectData.length > 0 ? (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* Map through projectData here later to create project cards */}
             {/* Example Card Structure (commented out):
             <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
               <img src="/path/to/image.jpg" alt="Project Thumbnail" className="w-full h-48 object-cover"/>
               <div className="p-6">
                 <h3 className="text-xl font-semibold mb-2">Project Title</h3>
                 <p className="text-gray-600 dark:text-gray-300 mb-4">Short description...</p>
                 <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View Details</a>
               </div>
             </div>
             */}
           </div>
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400">
            Projects coming soon...
          </p>
        )}

      </div>
    </section>
  );
};

export default Projects;