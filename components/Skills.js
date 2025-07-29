// components/Skills.js
import React from "react";
import { skills } from "../utils/data";
import {
  CodeBracketIcon,
  CpuChipIcon,
  ServerIcon,
  CircleStackIcon,
  PaintBrushIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const Skills = () => {
  const categoryIcons = {
    "AI/ML Core": CpuChipIcon,
    "Programming Languages": CodeBracketIcon,
    "Deep Learning": CpuChipIcon,
    "Data Science": ChartBarIcon,
    "Backend & APIs": ServerIcon,
    "Frontend & UI": PaintBrushIcon,
    "Databases & Cloud": CircleStackIcon,
    "Tools & DevOps": WrenchScrewdriverIcon,
  };

  return (
    <section
      id="skills"
      className="py-16 relative overflow-hidden bg-white dark:bg-gray-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 neural-pattern opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold ai-gradient-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My comprehensive toolkit for building intelligent solutions and
            cutting-edge applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillCategory, index) => {
            const IconComponent =
              categoryIcons[skillCategory.category] || CodeBracketIcon;

            return (
              <div
                key={skillCategory.category}
                className="group ai-card p-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 ai-glass rounded-xl">
                    <IconComponent className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {skillCategory.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center justify-between p-3 glass-card rounded-lg hover:scale-105 transition-all duration-200"
                    >
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                        {skill}
                      </span>
                      <div className="w-12 h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                        <div
                          className="h-full ai-gradient rounded-full transition-all duration-1000"
                          style={{
                            width: `${85 + Math.random() * 15}%`,
                            animationDelay: `${skillIndex * 200}ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Expertise Highlight */}
        <div className="mt-12">
          <div className="ai-card p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <CpuChipIcon className="h-8 w-8 text-blue-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Core Expertise
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-xl font-bold ai-gradient-text mb-2">
                  Deep Learning
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Neural Networks, CNN, RNN, Transformers
                </p>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold ai-gradient-text mb-2">
                  Computer Vision
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Object Detection, Image Segmentation, OCR
                </p>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold ai-gradient-text mb-2">
                  NLP & LLMs
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  BERT, GPT, Text Generation, Sentiment Analysis
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Continuous Learning */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 ai-glass rounded-full">
            <CpuChipIcon className="h-5 w-5 text-blue-400" />
            <span className="text-blue-400 font-medium">
              Continuously expanding knowledge and staying ahead of emerging
              technologies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
