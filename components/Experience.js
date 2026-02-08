// components/Experience.js
import React from "react";
import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  AcademicCapIcon,
  CalendarIcon,
  BeakerIcon,
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { journey, projects } from "../utils/data";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  };

  const getTypePillClasses = (type) => {
    if (type === "Work" || type === "Experience") return "bg-brand/10 text-brand border-brand/20";
    if (type === "Research" || type === "Project") return "bg-brand/10 text-brand border-brand/20";
    if (type === "Education") return "bg-brand/10 text-brand border-brand/20";
    return "bg-brand/10 text-brand border-brand/20";
  };

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

  const nonResearchProjects = transformedProjects.filter((p) => p.type !== "Research");
  const allItems = [
    ...journey.filter(
      (item) =>
        item.type === "Work" || item.type === "Research" || item.type === "Education"
    ),
    ...nonResearchProjects,
  ].slice().reverse();

  const workItems = allItems.filter((item) => item.type === "Work");
  const educationItems = allItems.filter((item) => item.type === "Education");
  const researchStatusOrder = { Published: 0, "Under Review": 1, Submitted: 2 };
  const projectTitleOrder = (title) => {
    if (!title) return 1;
    if (title.includes("TrackMania")) return 0;
    if (title.includes("Interactive Image Mosaic")) return 2;
    return 1;
  };
  const researchAndProjectItems = allItems
    .filter((item) => item.type === "Research" || item.type === "Project")
    .sort((a, b) => {
      if (a.type !== b.type) return a.type === "Research" && b.type === "Project" ? -1 : 1;
      if (a.type === "Research" && b.type === "Research") {
        return (researchStatusOrder[a.status] ?? 99) - (researchStatusOrder[b.status] ?? 99);
      }
      if (a.type === "Project" && b.type === "Project") {
        return projectTitleOrder(a.title) - projectTitleOrder(b.title);
      }
      return 0;
    });

  const subsections = [
    { title: "Work", items: workItems, icon: BriefcaseIcon },
    { title: "Education", items: educationItems, icon: AcademicCapIcon },
    { title: "Research & Projects", items: researchAndProjectItems, icon: BeakerIcon },
  ];

  const renderItem = (item) => {
    const typeLabel =
      item.type === "Work" ? "Work" : item.type === "Project" ? "Project" : item.type;
    const showStatus =
      item.status &&
      item.type !== "Work" &&
      !(item.type === "Project" && item.status === "Completed");
    const showPeriod =
      item.period && !(item.type === "Project" && item.period === "Completed");

    return (
      <motion.article
        key={item.id}
        variants={itemVariants}
        className="rounded-xl border border-border/60 bg-card/50 dark:bg-card/30 p-6 sm:p-7 shadow-sm"
      >
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full border ${getTypePillClasses(
              item.type
            )}`}
          >
            {typeLabel}
          </span>
          {showPeriod && (
            <span className="text-xs text-muted flex items-center gap-1">
              <CalendarIcon className="h-3.5 w-3.5" />
              {item.period}
            </span>
          )}
          {showStatus && (
            <span
              className={`text-xs px-2.5 py-1 rounded-full border ${
                item.status === "Published" || item.status === "Completed"
                  ? "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
                  : item.status === "Under Review" || item.status === "Submitted"
                  ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                  : "bg-brand/10 text-brand border-brand/20"
              }`}
            >
              {item.status}
            </span>
          )}
        </div>

        {/* Title & org */}
        <h3 className="text-xl font-semibold text-fg font-display mb-1">{item.title}</h3>
        {item.organization && (
          <p className="text-sm text-muted mb-4">
            {item.organization}
            {item.location && <span> · {item.location}</span>}
          </p>
        )}

        {/* Summary - one place only */}
        {item.summary && (
          <p className="text-muted leading-relaxed mb-5 max-w-2xl">
            {item.summary}
          </p>
        )}

        {item.type === "Education" && item.gpa && (
          <p className="text-sm text-muted mb-4">GPA: {item.gpa}</p>
        )}

        {/* Research: paper link near top */}
        {item.type === "Research" && item.status === "Published" && item.links?.paper && (
          <a
            href={item.links.paper}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-brand hover:opacity-85 mb-4"
          >
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            View paper
          </a>
        )}

        {/* Work: responsibilities */}
        {item.type === "Work" && item.responsibilities?.length > 0 && (
          <div className="mb-5">
            <h4 className="text-sm font-semibold text-fg mb-2">Key responsibilities</h4>
            <ul className="space-y-1.5">
              {item.responsibilities.map((resp, idx) => (
                <li
                  key={idx}
                  className="flex gap-2 text-sm text-muted leading-relaxed"
                >
                  <span className="text-brand mt-0.5">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Education: coursework */}
        {item.type === "Education" && item.relevantCoursework?.length > 0 && (
          <div className="mb-5">
            <h4 className="text-sm font-semibold text-fg mb-2">Relevant coursework</h4>
            <div className="flex flex-wrap gap-2">
              {item.relevantCoursework.map((course, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs rounded-full bg-brand/10 text-brand border border-brand/20"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Research details: conference, abstract, highlights, keywords */}
        {item.type === "Research" && !item.category && (
          <div className="space-y-5 mb-5">
            {(item.conference || item.year) && (
              <p className="text-sm text-muted">
                {item.conference && <span className="font-medium text-brand">{item.conference}</span>}
                {item.year && <span> · {item.year}</span>}
              </p>
            )}
            {item.abstract && (
              <div>
                <h4 className="text-sm font-semibold text-fg mb-1">Abstract</h4>
                <p className="text-sm text-muted leading-relaxed">{item.abstract}</p>
              </div>
            )}
            {item.highlights?.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-fg mb-2">Key contributions</h4>
                <ul className="space-y-1.5">
                  {item.highlights.map((point, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-muted leading-relaxed">
                      <span className="text-brand mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {item.keywords?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {item.keywords.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs rounded-full bg-brand/10 text-brand border border-brand/20"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Project/Research with category: technologies */}
        {(item.type === "Project" || (item.type === "Research" && item.category)) &&
          item.technologies?.length > 0 && (
            <div className="mb-5">
              <h4 className="text-sm font-semibold text-fg mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs rounded-full bg-muted/15 dark:bg-muted/20 text-muted border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

        {/* Work: technologies */}
        {item.type === "Work" && item.technologies?.length > 0 && (
          <div className="mb-5">
            <h4 className="text-sm font-semibold text-fg mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs rounded-full bg-muted/15 dark:bg-muted/20 text-muted border border-border/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-border/40">
          {item.links?.github && (
            <a
              href={item.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg bg-fg text-bg hover:opacity-90 dark:bg-fg dark:text-bg transition-opacity"
            >
              <CodeBracketIcon className="h-4 w-4" />
              Code
            </a>
          )}
          {item.github && (
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg bg-fg text-bg hover:opacity-90 dark:bg-fg dark:text-bg transition-opacity"
            >
              <CodeBracketIcon className="h-4 w-4" />
              Code
            </a>
          )}
          {(item.demoUrl || item.links?.demo) && (
            <a
              href={item.demoUrl || item.links?.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg bg-brand text-white hover:opacity-90 transition-opacity"
            >
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              Demo
            </a>
          )}
          {(item.live || item.links?.venue) && (
            <a
              href={item.live || item.links?.venue}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg border border-border bg-card hover:bg-muted/10 transition-colors"
            >
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              {item.links?.venue ? "Venue" : "Live"}
            </a>
          )}
          {item.links?.paper &&
            !(item.type === "Research" && item.status === "Published") && (
              <a
                href={item.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg border border-brand/30 bg-brand/10 text-brand hover:bg-brand/15 transition-colors"
              >
                Paper
              </a>
            )}
        </div>
      </motion.article>
    );
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.header
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold ai-gradient-text font-display mb-2">
            Experience
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Work, education, research, and projects.
          </p>
        </motion.header>

        <div className="space-y-16">
          {subsections.map(({ title, items, icon: Icon }) => {
            const isEducation = title === "Education";
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <Icon className="h-5 w-5 text-brand" aria-hidden />
                  <h3 className="text-lg font-semibold text-fg font-display">{title}</h3>
                </div>
                {isEducation ? (
                  <motion.div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                  >
                    {items.map(renderItem)}
                  </motion.div>
                ) : (
                  <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                  >
                    {items.map(renderItem)}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
