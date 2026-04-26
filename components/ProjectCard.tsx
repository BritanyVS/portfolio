"use client";

import { motion } from "framer-motion";

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  frontendUrl?: string;
  backendUrl?: string;
  gitUrl?: string;
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
        <div className="flex flex-wrap items-center gap-2">
          {project.frontendUrl ? (
            <a
              href={project.frontendUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-rose-900/20 bg-white/70 px-3 py-1 text-xs tracking-[0.16em] text-rose-700 uppercase transition-colors hover:border-rose-500/50 hover:text-rose-500"
            >
              Front
            </a>
          ) : null}
          {project.backendUrl ? (
            <a
              href={project.backendUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-rose-900/20 bg-white/70 px-3 py-1 text-xs tracking-[0.16em] text-rose-700 uppercase transition-colors hover:border-rose-500/50 hover:text-rose-500"
            >
              Back
            </a>
          ) : null}
          {project.gitUrl ? (
            <a
              href={project.gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-rose-900/20 bg-white/70 px-3 py-1 text-xs tracking-[0.16em] text-rose-700 uppercase transition-colors hover:border-rose-500/50 hover:text-rose-500"
            >
              Git
            </a>
          ) : null}
        </div>
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