// components/Skills.js
import React from "react";
import { motion } from "framer-motion";
import { skills } from "../utils/data";

const Skills = () => {
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

  const categories = Object.keys(skills);
  const maxSkills = Math.max(...Object.values(skills).map(skillList => skillList.length));

  return (
    <section id="skills" className="py-20 static-glass">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 ai-gradient-text">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Specialized expertise in AI/ML, computer vision, and research
            methodologies
          </p>
        </motion.div>

        {/* Table-like Layout */}
        <motion.div
          className="overflow-x-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((category) => {
              const skillList = skills[category];
              return (
                <div key={category} className="flex flex-col">
                  {/* Category Header */}
                  <div className="mb-4 px-4 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-lg border border-blue-500/20 dark:border-blue-500/30">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white text-center">
                      {category}
                    </h3>
                  </div>
                  
                  {/* Skills List */}
                  <div className="space-y-2">
                    {skillList.map((skill, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 text-center bg-gray-50 dark:bg-gray-800/50 rounded border border-gray-200 dark:border-gray-700"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
