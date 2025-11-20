// components/WorkExperience.js
import React from "react";
import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import { workExperience } from "../utils/data";

const WorkExperience = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="work-experience" className="py-20 static-glass">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 ai-gradient-text">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional experience in AI research and software development
          </p>
        </motion.div>

        {/* Work Experience Timeline */}
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 opacity-30"></div>

            {/* Work Experience Items */}
            <div className="space-y-12">
              {workExperience.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  className="relative pl-20"
                  variants={itemVariants}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>

                  {/* Experience Card */}
                  <div className="ai-card p-6 hover:scale-[1.02] transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <BriefcaseIcon className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {experience.position}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <BuildingOfficeIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <span className="text-gray-600 dark:text-gray-300 font-medium">
                            {experience.company}
                          </span>
                        </div>
                        {experience.location && (
                          <div className="flex items-center gap-2 mb-2">
                            <MapPinIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <span className="text-gray-500 dark:text-gray-400 text-sm">
                              {experience.location}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{experience.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    {experience.description && (
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {experience.description}
                      </p>
                    )}

                    {/* Responsibilities/Achievements */}
                    {experience.responsibilities &&
                      experience.responsibilities.length > 0 && (
                        <ul className="space-y-2 mb-4">
                          {experience.responsibilities.map(
                            (responsibility, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                              >
                                <span className="text-blue-500 dark:text-blue-400 mt-1.5">
                                  •
                                </span>
                                <span className="flex-1">{responsibility}</span>
                              </li>
                            )
                          )}
                        </ul>
                      )}

                    {/* Technologies/Skills */}
                    {experience.technologies &&
                      experience.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {experience.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
