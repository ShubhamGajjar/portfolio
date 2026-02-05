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
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { journey, projects } from "../utils/data";

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
    if (type === "Work" || type === "Experience") {
      return (
        <BriefcaseIcon className="h-5 w-5 text-blue-500 dark:text-blue-400" />
      );
    }
    if (type === "Research" || type === "Project") {
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
    if (type === "Work" || type === "Experience") {
      return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
    }
    if (type === "Research" || type === "Project") {
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

  // Transform projects to journey item format
  const transformedProjects = projects.map((project) => ({
    id: `project-${project.id}`,
    type: project.category === "Research" ? "Research" : "Project",
    title: project.title,
    organization: project.category,
    location: project.impact || project.category,
    period: project.status || "Completed",
    summary: project.description,
    technologies: project.technologies,
    status: project.status,
    github: project.github,
    demoUrl: project.demoUrl,
    live: project.live,
    category: project.category,
  }));

  // Combine journey items with projects (exclude research from projects to avoid duplicates with journey research entries)
  const nonResearchProjects = transformedProjects.filter((p) => p.type !== "Research");
  const allJourneyItems = [
    ...journey.filter(
      (item) =>
        item.type === "Work" ||
        item.type === "Research" ||
        item.type === "Education"
    ),
    ...nonResearchProjects,
  ]
    .slice()
    .reverse();

  // Subsections: Work, Education, Research & Projects
  const workItems = allJourneyItems.filter((item) => item.type === "Work");
  const educationItems = allJourneyItems.filter((item) => item.type === "Education");
  const researchStatusOrder = { Published: 0, "Under Review": 1, Submitted: 2 };
  const projectTitleOrder = (title) => {
    if (!title) return 1;
    if (title.includes("TrackMania")) return 0;
    if (title.includes("Interactive Image Mosaic")) return 2;
    return 1;
  };
  const researchAndProjectItems = allJourneyItems
    .filter((item) => item.type === "Research" || item.type === "Project")
    .sort((a, b) => {
      if (a.type !== b.type) return a.type === "Research" && b.type === "Project" ? -1 : 1;
      if (a.type === "Research" && b.type === "Research") {
        const orderA = researchStatusOrder[a.status] ?? 99;
        const orderB = researchStatusOrder[b.status] ?? 99;
        return orderA - orderB;
      }
      if (a.type === "Project" && b.type === "Project") {
        return projectTitleOrder(a.title) - projectTitleOrder(b.title);
      }
      return 0;
    });

  const renderJourneyItem = (item) => {
    return (
      <motion.div
        key={item.id}
        className="ai-card p-4 hover:scale-[1.02] transition-all duration-300 h-full flex flex-col"
        variants={itemVariants}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              {getTypeIcon(item.type)}
              <span
                className={`px-2 py-0.5 rounded-full border text-xs ${getTypePillClasses(
                  item.type,
                )}`}
              >
                {item.type === "Work" ? "Experience" : item.type === "Project" ? "Project" : item.type}
              </span>
            </div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1 line-clamp-2">
              {item.title}
            </h3>
            {item.organization && (
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 line-clamp-1">
                {item.organization}
              </p>
            )}
            {item.period &&
              !(item.type === "Project" && item.period === "Completed") && (
              <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                <CalendarIcon className="h-3.5 w-3.5" />
                <span>{item.period}</span>
              </div>
            )}
            {item.status &&
              item.type !== "Work" &&
              !(item.type === "Project" && item.status === "Completed") && (
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <span
                  className={`px-2 py-0.5 rounded-full border text-xs ${
                    item.status === "Published" || item.status === "Completed"
                      ? "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
                      : item.status === "Under Review" || item.status === "Submitted"
                      ? "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20"
                      : "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
                  }`}
                >
                  {item.status}
                </span>
                {item.type === "Research" &&
                  item.status === "Published" &&
                  item.links?.paper && (
                    <a
                      href={item.links.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-medium hover:bg-purple-500/15 transition-colors"
                    >
                      <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
                      View Paper
                    </a>
                  )}
              </div>
            )}
            {item.location && (
              <div className="flex items-center gap-1 mt-1 text-xs text-gray-500 dark:text-gray-400">
                {item.type === "Research" ? (
                  item.location.includes("Conference") ||
                  item.location.includes("World Conference") ? (
                    <AcademicCapIcon className="h-3.5 w-3.5" />
                  ) : (
                    <BeakerIcon className="h-3.5 w-3.5" />
                  )
                ) : item.type === "Education" ? (
                  <AcademicCapIcon className="h-3.5 w-3.5" />
                ) : (
                  <MapPinIcon className="h-3.5 w-3.5" />
                )}
                <span className="line-clamp-1">{item.location}</span>
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={() => toggleItem(item.id)}
            className={`flex-shrink-0 transition-transform duration-200 ${
              expandedId === item.id ? "rotate-180" : ""
            }`}
          >
            <ChevronDownIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Summary preview - show when collapsed */}
        {expandedId !== item.id && (
          <>
            {item.summary && (
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                {item.summary}
              </p>
            )}
            {item.type === "Research" && !item.summary && item.highlights && item.highlights.length > 0 && (
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                {item.highlights[0]}
              </p>
            )}
          </>
        )}

        {/* Quick info badges */}
        <div className="flex flex-wrap gap-2 mb-3 mt-auto">
          {item.type === "Education" && item.gpa && (
            <span className="px-2 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs rounded-full border border-indigo-500/20">
              GPA: {item.gpa}
            </span>
          )}
          {item.type === "Work" &&
            item.technologies &&
            item.technologies.length > 0 && (
              <span className="px-2 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs rounded-full border border-blue-500/20">
                {item.technologies.length} tech
              </span>
            )}
          {(item.type === "Research" || item.type === "Project") &&
            item.technologies &&
            item.technologies.length > 0 && (
              <span className="px-2 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs rounded-full border border-purple-500/20">
                {item.technologies.length} tech
              </span>
            )}
          {item.type === "Project" && item.demoUrl && (
            <a
              href={item.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs rounded-full hover:scale-105 transition-all duration-200 font-medium"
            >
              <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
              Live
            </a>
          )}
        </div>

        {/* Expandable details */}
        <AnimatePresence initial={false}>
          {expandedId === item.id && (
            <motion.div
              key="details"
              className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 overflow-hidden"
              variants={detailsVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {/* Work details */}
              {item.type === "Work" && (
                <>
                  {item.summary && (
                    <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed text-sm">
                      {item.summary}
                    </p>
                  )}

                  {item.responsibilities &&
                    item.responsibilities.length > 0 && (
                      <div className="mb-3">
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
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
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
                    <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed text-sm">
                      {item.summary}
                    </p>
                  )}

                  {item.status && (
                    <div className="mb-3">
                      <span className="px-2 py-1 rounded-full border text-xs bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20">
                        {item.status}
                      </span>
                    </div>
                  )}

                  {item.relevantCoursework &&
                    item.relevantCoursework.length > 0 && (
                      <div className="mb-2">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Relevant Coursework
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.relevantCoursework.map((course, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs rounded-full border border-indigo-500/20"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                </>
              )}

              {/* Project details */}
              {(item.type === "Project" || (item.type === "Research" && item.category)) && (
                <>
                  {item.summary && (
                    <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed text-sm">
                      {item.summary}
                    </p>
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
                            className="px-2 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs rounded-full border border-purple-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Research details */}
              {item.type === "Research" && !item.category && (
                <>
                  {/* Meta line: conference, year, status */}
                  <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
                    {item.conference && (
                      <span className="font-semibold text-purple-600 dark:text-purple-400">
                        {item.conference}
                      </span>
                    )}
                    {item.year && (
                      <span className="text-gray-500 dark:text-gray-400">
                        • {item.year}
                      </span>
                    )}
                    {item.doi &&
                      item.doi !== "Pending" &&
                      !item.doi.includes("Pending") && (
                        <span className="text-gray-500 dark:text-gray-400">
                          • DOI: {item.doi}
                        </span>
                      )}
                  </div>

                  {item.summary && (
                    <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed text-sm">
                      {item.summary}
                    </p>
                  )}

                  {item.abstract && (
                    <div className="mb-3">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Abstract
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.abstract}
                      </p>
                    </div>
                  )}

                  {item.highlights && item.highlights.length > 0 && (
                    <div className="mb-3">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Key Contributions
                      </h4>
                      <ul className="space-y-2">
                        {item.highlights.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm"
                          >
                            <span className="text-purple-500 dark:text-purple-400 mt-1.5">
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
                            className="px-2 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs rounded-full border border-purple-500/20"
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
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Links for research papers */}
              {item.links &&
                (item.links.github ||
                  (item.links.paper &&
                    !(item.type === "Research" && item.status === "Published")) ||
                  item.links.demo ||
                  item.links.venue) && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.links.github && (
                      <a
                        href={item.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:scale-105 transition-all duration-200 text-xs font-medium"
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
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:scale-105 transition-all duration-200 text-xs font-medium"
                      >
                        Live Demo
                      </a>
                    )}
                    {item.links.paper &&
                      !(item.type === "Research" && item.status === "Published") && (
                        <a
                          href={item.links.paper}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-lg border border-purple-500/20 hover:bg-purple-500/15 transition-all duration-200 text-xs font-medium"
                        >
                          View Paper
                        </a>
                      )}
                    {item.links.venue && (
                      <a
                        href={item.links.venue}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 glass-card text-gray-900 dark:text-white rounded-lg hover:scale-105 transition-all duration-200 text-xs font-medium"
                      >
                        View Venue
                      </a>
                    )}
                  </div>
                )}

              {/* Links for projects */}
              {(item.github || (item.type !== "Project" && item.demoUrl) || item.live) && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:scale-105 transition-all duration-200 text-xs font-medium"
                    >
                      <CodeBracketIcon className="h-4 w-4" />
                      View Code
                    </a>
                  )}
                  {item.type !== "Project" && item.demoUrl && (
                    <a
                      href={item.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:scale-105 transition-all duration-200 text-xs font-medium"
                    >
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                  {item.live && (
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 glass-card text-gray-900 dark:text-white rounded-lg hover:scale-105 transition-all duration-200 text-xs font-medium"
                    >
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                      Live Site
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  const subsections = [
    { title: "Work", items: workItems, icon: BriefcaseIcon },
    { title: "Education", items: educationItems, icon: AcademicCapIcon },
    { title: "Research & Projects", items: researchAndProjectItems, icon: BeakerIcon },
  ];

  return (
    <section id="experience" className="py-16 static-glass">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 ai-gradient-text">
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Work experience, education, research, and projects in one place.
          </p>
        </motion.div>

        {/* Subsections: Work, Education, Research & Projects */}
        <div className="space-y-14">
          {subsections.map(({ title, items, icon: Icon }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Icon className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {title}
                </h3>
              </div>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {items.map(renderJourneyItem)}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
