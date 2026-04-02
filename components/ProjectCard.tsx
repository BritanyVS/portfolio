"use client";

import { motion } from "framer-motion";

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.012 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="group rounded-2xl border border-rose-900/10 bg-white/35 p-6 backdrop-blur-sm"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <h4 className="text-lg font-semibold text-rose-950">{project.name}</h4>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-[0.2em] text-rose-700 uppercase transition-colors hover:text-rose-500"
        >
          → GitHub
        </a>
      </div>

      <p className="mb-5 line-clamp-2 text-sm leading-7 text-rose-800 sm:text-base">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={`${project.name}-${tech}`}
            className="rounded-full border border-rose-900/15 bg-white/45 px-3 py-1 text-xs text-rose-900 transition-colors group-hover:border-rose-400/60"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}