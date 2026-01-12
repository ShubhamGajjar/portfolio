// components/Journey.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BriefcaseIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  CalendarIcon,
  MapPinIcon,
  BeakerIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { journey } from "../utils/data";

const Journey = () => {
  const [expandedId, setExpandedId] = useState(null);

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

  const getTypeIcon = (type) => {
    if (type === "Work") {
      return (
        <BriefcaseIcon className="h-5 w-5 text-blue-500 dark:text-blue-400" />
      );
    }
    if (type === "Research") {
      return (
        <AcademicCapIcon className="h-5 w-5 text-purple-500 dark:text-purple-400" />
      );
    }
    if (type === "Education") {
      return (
        <AcademicCapIcon className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
      );
    }
    return (
      <CodeBracketIcon className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
    );
  };

  const getTypePillClasses = (type) => {
    if (type === "Work") {
      return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
    }
    if (type === "Research") {
      return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20";
    }
    if (type === "Education") {
      return "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20";
    }
    return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
  };

  const detailsVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  const toggleItem = (id) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  // Show Education, Work, and Research items on the journey timeline (latest first)
  const visibleJourney = journey
    .filter((item) => item.type === "Work" || item.type === "Research" || item.type === "Education")
    .slice()
    .reverse();

  const renderJourneyItem = (item) => {
    const metaType = item.type;
    const metaPeriod = item.period;

    return (
      <motion.div
        key={item.id}
        className="relative pl-20"
        variants={itemVariants}
      >
        {/* Timeline dot */}
        <div className={`absolute left-6 top-2 w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 shadow-lg ${
          item.type === "Education" 
            ? "bg-gradient-to-r from-indigo-500 to-indigo-600" 
            : item.type === "Work"
            ? "bg-gradient-to-r from-blue-500 to-blue-600"
            : item.type === "Research"
            ? "bg-gradient-to-r from-purple-500 to-purple-600"
            : "bg-gradient-to-r from-emerald-500 to-emerald-600"
        }`}></div>

        {/* Left-side meta (type + date) completely outside the card */}
        <div className="absolute -left-40 top-0 flex flex-col items-start gap-1 text-xs text-left">
          <span
            className={`px-2 py-0.5 rounded-full border ${getTypePillClasses(
              metaType
            )}`}
          >
            {metaType}
          </span>
          {metaPeriod && (
            <span className="mt-0.5 text-gray-500 dark:text-gray-400">
              {metaPeriod}
            </span>
          )}
        </div>

        {/* Card */}
        <div className="ai-card p-4 sm:p-5 hover:scale-[1.02] transition-all duration-300">
          {/* Clickable header */}
          <button
            type="button"
            onClick={() => toggleItem(item.id)}
            className="w-full text-left flex items-center justify-between gap-4 focus:outline-none"
          >
            <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {getTypeIcon(item.type)}
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </span>
                </div>
                {item.organization && (
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {item.organization}
                  </p>
                )}
                {item.location && (
                  <div className="flex items-center gap-1 mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {item.type === "Research" ? (
                      // Distinguish between conference/venue and dataset-style locations
                      item.location.includes("Conference") ||
                      item.location.includes("World Conference") ? (
                        <AcademicCapIcon className="h-4 w-4" />
                      ) : (
                        <BeakerIcon className="h-4 w-4" />
                      )
                    ) : item.type === "Education" ? (
                      <AcademicCapIcon className="h-4 w-4" />
                    ) : (
                      <MapPinIcon className="h-4 w-4" />
                    )}
                    <span>{item.location}</span>
                  </div>
                )}
              </div>
            </div>
            <div
              className={`transition-transform duration-200 ${
                expandedId === item.id ? "rotate-180" : ""
              }`}
            >
              <ChevronDownIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </div>
          </button>

          {/* Expandable details */}
          <AnimatePresence initial={false}>
            {expandedId === item.id && (
              <motion.div
                key="details"
                className="mt-4 overflow-hidden"
                variants={detailsVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {/* Work details */}
                {item.type === "Work" && (
                  <>
                    {item.summary && (
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {item.summary}
                      </p>
                    )}

                    {item.responsibilities &&
                      item.responsibilities.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {item.responsibilities.map((resp, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm"
                              >
                                <span className="text-blue-500 dark:text-blue-400 mt-1.5">
                                  •
                                </span>
                                <span className="flex-1">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    {item.technologies && item.technologies.length > 0 && (
                      <div className="mb-2">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Education details */}
                {item.type === "Education" && (
                  <>
                    {item.summary && (
                      <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                        {item.summary}
                      </p>
                    )}

                    {item.gpa && (
                      <div className="mb-3">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                          GPA:{" "}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {item.gpa}
                        </span>
                      </div>
                    )}

                    {item.status && (
                      <div className="mb-4">
                        <span className="px-2 py-0.5 rounded-full border text-[11px] bg-indigo-500/5 text-indigo-700 dark:text-indigo-300 border-indigo-500/20">
                          {item.status}
                        </span>
                      </div>
                    )}

                    {item.relevantCoursework && item.relevantCoursework.length > 0 && (
                      <div className="mb-2">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Relevant Coursework
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.relevantCoursework.map((course, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs rounded-full border border-indigo-500/20"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Research details */}
                {item.type === "Research" && (
                  <>
                    {/* Meta line: conference, year, status */}
                    <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
                      {item.conference && (
                        <span className="font-semibold text-blue-600 dark:text-blue-400">
                          {item.conference}
                        </span>
                      )}
                      {item.year && (
                        <span className="text-gray-500 dark:text-gray-400">
                          • {item.year}
                        </span>
                      )}
                      {item.status && (
                        <span className="px-2 py-0.5 rounded-full border text-[11px] bg-blue-500/5 text-blue-700 dark:text-blue-300 border-blue-500/20">
                          {item.status}
                        </span>
                      )}
                      {item.doi && (
                        <span className="text-gray-500 dark:text-gray-400 truncate">
                          • DOI: {item.doi}
                        </span>
                      )}
                    </div>

                    {item.summary && (
                      <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                        {item.summary}
                      </p>
                    )}

                    {item.abstract && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Abstract
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {item.abstract}
                        </p>
                      </div>
                    )}

                    {item.highlights && item.highlights.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Key Contributions
                        </h4>
                        <ul className="space-y-2">
                          {item.highlights.map((point, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm"
                            >
                              <span className="text-blue-500 dark:text-blue-400 mt-1.5">
                                •
                              </span>
                              <span className="flex-1">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.keywords && item.keywords.length > 0 && (
                      <div className="mb-2">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Research Areas
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.keywords.map((keyword, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs rounded-full border border-blue-500/20"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Shared tags */}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {item.links &&
                  (item.links.github ||
                    item.links.paper ||
                    item.links.demo ||
                    item.links.venue) && (
                    <div className="flex flex-wrap gap-3 mt-4">
                      {item.links.github && (
                        <a
                          href={item.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:scale-105 transition-all duration-200 text-xs font-medium"
                        >
                          <CodeBracketIcon className="h-4 w-4" />
                          View Code
                        </a>
                      )}
                      {item.links.demo && (
                        <a
                          href={item.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:scale-105 transition-all duration-200 text-xs font-medium"
                        >
                          Live Demo
                        </a>
                      )}
                      {item.links.paper && (
                        <a
                          href={item.links.paper}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg border border-blue-500/20 hover:bg-blue-500/15 transition-all duration-200 text-xs font-medium"
                        >
                          View Paper
                        </a>
                      )}
                      {item.links.venue && (
                        <a
                          href={item.links.venue}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 glass-card text-gray-900 dark:text-white rounded-lg hover:scale-105 transition-all duration-200 text-xs font-medium"
                        >
                          View Venue
                        </a>
                      )}
                    </div>
                  )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="journey" className="py-20 static-glass">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 ai-gradient-text">
            Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A unified timeline of education, work experience, research publications, and
            key projects that shaped my path in AI.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-blue-500 via-purple-500 to-emerald-500 dark:from-indigo-400 via-blue-400 dark:via-purple-400 dark:to-emerald-400 opacity-30"></div>

            <div className="space-y-12">
              {visibleJourney.map(renderJourneyItem)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
