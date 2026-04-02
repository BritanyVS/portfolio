"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "./Header";
import ProjectCard, { type Project } from "./ProjectCard";

const projects: Project[] = [
  {
    name: "Cabaña Coronilla",
    description:
      "Sistema de gestion de reservas y administración internal para cabaña, con interfaz intuitiva y funcionalidades completas.",
    technologies: [".NET 8", "Blazor"],
    githubUrl: "https://github.com/BritanyVS/Cabana-Coronilla-Project",
  },
  {
    name: "Lonjevus",
    description:
      "Plataforma web de alto rendimiento con arquitectura fullstack moderna y escalable.",
    technologies: ["Next.js", ".NET Core"],
    githubUrl: "https://github.com/BritanyVS/Lonjevus-Project",
  },
  {
    name: "Brittany Salon",
    description:
      "Aplicacion para servicios de salon con reservas, gestion de clientes y datos estructurados.",
    technologies: ["Next.js", "PostgreSQL"],
    githubUrl: "https://github.com/BritanyVS/Brittany-Salon-Project",
  },
  {
    name: "Pagina Amarilla",
    description:
      "Directorio digital optimizado para busqueda y administracion de contenido con ORM moderno.",
    technologies: ["Next.js", "Prisma"],
    githubUrl: "https://github.com/pagina-amarilla-guacimo",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
};

export default function PortfolioLayout() {
  return (
    <main className="relative min-h-screen overflow-hidden text-rose-950">
      <header className="sticky top-0 z-50 border-b border-rose-900/10 bg-white/70 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
          <a href="#perfil" className="text-sm font-semibold tracking-[0.2em] text-rose-900 uppercase">
            BRITANY
          </a>

          <div className="flex flex-wrap items-center gap-4 text-sm text-rose-800 sm:gap-6">
            <a href="#perfil" className="transition-colors hover:text-rose-950">
              Perfil
            </a>
            <a href="#projects" className="transition-colors hover:text-rose-950">
              Proyectos
            </a>
            <a href="#resources" className="transition-colors hover:text-rose-950">
              Recursos
            </a>
            <a href="#contact" className="transition-colors hover:text-rose-950">
              Contacto
            </a>
          </div>
        </nav>
      </header>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-140px] top-[-120px] h-[360px] w-[360px] rounded-full bg-white/40 blur-3xl" />
        <div className="absolute bottom-[-180px] right-[-120px] h-[360px] w-[360px] rounded-full bg-rose-400/30 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-28 px-6 pt-24 pb-16 sm:px-10 lg:px-16 lg:pt-28 lg:pb-20">
        <motion.section {...fadeUp} id="perfil" className="scroll-mt-28">
          <Header
            name="BRITANY VILLALOBOS"
            profileSummary="Futura Ingeniera en Informatica Empresarial especializada en construir el puente entre la estrategia de negocio y la arquitectura de software. Mi enfoque se centra en la creacion de sistemas robustos, escalables y visualmente impecables, garantizando siempre la calidad tecnica y la eficiencia operativa."
            profileDetails="Desde la consultoria tecnica hasta el desarrollo de aplicaciones criticas, mi objetivo es asegurar que cada linea de codigo aporte un valor medible. Aplico metodologias agiles y un pensamiento analitico para transformar necesidades complejas en experiencias digitales de alto impacto."
            specialties="Arquitectura Distribuida · Fullstack Development · UX/UI Minimalista · Analisis de Datos · Ciberseguridad."
          />
        </motion.section>

        <motion.section {...fadeUp} className="space-y-8 scroll-mt-28" id="projects">
          <div className="space-y-3">
            <p className="text-xs tracking-[0.3em] text-rose-700 uppercase">
              Proyectos
            </p>
            <h3 className="text-2xl font-semibold text-rose-950 sm:text-3xl">
              Trabajos Recientes
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="space-y-7 scroll-mt-28" id="resources">
          <div className="space-y-3">
            <p className="text-xs tracking-[0.3em] text-rose-700 uppercase">
              Recursos
            </p>
            <h3 className="text-2xl font-semibold text-rose-950 sm:text-3xl">
              CV | Certificados
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-rose-900/10 bg-white/35 p-6 backdrop-blur-sm">
              <p className="text-xs tracking-[0.25em] text-rose-700 uppercase">
                Curriculum
              </p>
              <p className="text-sm leading-7 text-rose-800">
                Ver CV en linea o descargarlo
              </p>
              <Link
                href="/cv"
                className="mt-4 inline-flex items-center justify-center rounded-xl border border-rose-900/20 bg-white/80 px-5 py-2 text-sm font-medium text-rose-900 transition-colors hover:bg-white"
              >
                Ver CV
              </Link>
            </article>

            <article className="rounded-2xl border border-rose-900/10 bg-white/35 p-6 backdrop-blur-sm">
              <p className="text-xs tracking-[0.25em] text-rose-700 uppercase">
                Certificados
              </p>
              <p className="text-sm leading-7 text-rose-800">
                Consulta mis certificados de participacion y cursos
              </p>
              <Link
                href="/certificados"
                className="mt-4 inline-flex items-center justify-center rounded-xl border border-rose-900/20 bg-white/80 px-5 py-2 text-sm font-medium text-rose-900 transition-colors hover:bg-white"
              >
                Certificados
              </Link>
            </article>
          </div>
        </motion.section>

        <motion.section {...fadeUp} className="space-y-7 scroll-mt-28" id="contact">
          <div className="space-y-3">
            <p className="text-xs tracking-[0.3em] text-rose-700 uppercase">
              Contacto
            </p>
            <h3 className="text-2xl font-semibold text-rose-950 sm:text-3xl">
              Hablemos
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-rose-900/10 bg-white/35 p-6 backdrop-blur-sm">
              <p className="text-xs tracking-[0.25em] text-rose-700 uppercase">
                GitHub
              </p>
              <a
                href="https://github.com/BritanyVS"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm leading-7 text-rose-900 underline-offset-4 hover:underline"
              >
                github.com/BritanyVS
              </a>
            </article>

            <article className="rounded-2xl border border-rose-900/10 bg-white/35 p-6 backdrop-blur-sm">
              <p className="text-xs tracking-[0.25em] text-rose-700 uppercase">
                Correo
              </p>
              <a
                href="mailto:britanyvsalazar@gmail.com"
                className="mt-2 inline-block text-sm leading-7 text-rose-900 underline-offset-4 hover:underline"
              >
                britanyvsalazar@gmail.com
              </a>
            </article>

            <article className="rounded-2xl border border-rose-900/10 bg-white/35 p-6 backdrop-blur-sm">
              <p className="text-xs tracking-[0.25em] text-rose-700 uppercase">
                Telefono
              </p>
              <a
                href="tel:+50661966273"
                className="mt-2 inline-block text-sm leading-7 text-rose-900 underline-offset-4 hover:underline"
              >
                +506 6196 6273
              </a>
            </article>
          </div>
        </motion.section>

        <motion.footer
          {...fadeUp}
          className="flex flex-col items-start justify-between gap-6 border-t border-rose-900/10 pt-10 text-sm text-rose-700 sm:flex-row sm:items-center"
        >
          <p className="text-rose-700">Britany Villalobos - 2026</p>
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-pink-300"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M6.94 7.5a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88ZM5.75 8.81h2.39V19.5H5.75V8.81Zm4.18 0h2.29v1.46h.03c.32-.6 1.1-1.23 2.26-1.23 2.42 0 2.87 1.6 2.87 3.68v6.78H15v-6.01c0-1.44-.03-3.29-2-3.29-2 0-2.3 1.56-2.3 3.18v6.12H9.93V8.81Z" />
              </svg>
            </a>
            <a
              href="https://github.com/BritanyVS"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-pink-300"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M12 .5C5.65.5.5 5.68.5 12.06c0 5.11 3.3 9.45 7.88 10.98.57.1.78-.25.78-.56 0-.28-.01-1.01-.02-1.99-3.2.7-3.87-1.55-3.87-1.55-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.02 1.77 2.68 1.26 3.34.96.1-.75.4-1.26.73-1.56-2.55-.29-5.23-1.29-5.23-5.74 0-1.27.45-2.31 1.19-3.13-.12-.3-.52-1.5.11-3.13 0 0 .97-.31 3.18 1.2a10.93 10.93 0 0 1 5.8 0c2.2-1.51 3.17-1.2 3.17-1.2.63 1.63.23 2.83.12 3.13.74.82 1.19 1.86 1.19 3.13 0 4.47-2.69 5.45-5.25 5.73.41.36.78 1.07.78 2.16 0 1.56-.01 2.81-.01 3.19 0 .31.2.67.79.56A11.58 11.58 0 0 0 23.5 12.06C23.5 5.68 18.35.5 12 .5Z" />
              </svg>
            </a>
            <a
              href="mailto:britanyvsalazar@gmail.com"
              className="transition-colors hover:text-pink-300"
              aria-label="Correo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M2.25 5.25A2.25 2.25 0 0 1 4.5 3h15a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 19.5 21h-15a2.25 2.25 0 0 1-2.25-2.25V5.25Zm2.11-.75 7.64 5.46 7.64-5.46H4.36Zm15.89 2.14-7.82 5.59a.75.75 0 0 1-.86 0L3.75 6.64v12.11c0 .41.34.75.75.75h15c.41 0 .75-.34.75-.75V6.64Z" />
              </svg>
            </a>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}