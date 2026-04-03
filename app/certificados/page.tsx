import Image from "next/image";
import Link from "next/link";

export default function CertificadosPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-rose-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-140px] top-[-120px] h-[360px] w-[360px] rounded-full bg-white/40 blur-3xl" />
        <div className="absolute bottom-[-180px] right-[-120px] h-[360px] w-[360px] rounded-full bg-rose-400/30 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs tracking-[0.3em] text-rose-700 uppercase">
              Certificados
            </p>
            <h1 className="text-3xl font-semibold text-rose-950 sm:text-4xl">
              Participación y formación
            </h1>
          </div>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-rose-900/20 bg-white/80 px-5 py-2 text-sm font-medium text-rose-900 transition-colors hover:bg-white"
          >
           ← Volver
          </Link>
        </div>

        <section className="space-y-4 rounded-2xl border border-rose-900/10 bg-white/35 p-6 backdrop-blur-sm">
          <p className="text-sm tracking-[0.2em] text-rose-700 uppercase">
            Certificados de cursos y formación
          </p>

          <article className="rounded-xl border border-rose-900/10 bg-white/60 p-5">
            <h2 className="text-lg font-medium text-rose-950">
              Introduction to Cybersecurity
            </h2>
            <p className="mt-1 text-sm leading-7 text-rose-800">
              Cisco Networking Academy - Certificado obtenido al completar el
              curso introductorio de ciberseguridad.
            </p>
            <div className="mt-4 flex items-center justify-between gap-4">
            <div className="mt-4 overflow-hidden rounded-xl border border-rose-900/10 bg-white/70">
              <Image
                src="/C1.png"
                alt=" Introduction to Cybersecurity"
                width={100}
                height={100}
                className="h-auto max-h-[100px] w-full object-contain"
                priority
              />
            </div>
            <a
              href="https://www.credly.com/badges/89744220-408d-4162-a373-62252131a00e/linked_in?t=tcu3o5"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-lg border border-rose-900/20 bg-white/80 px-4 py-2 text-sm font-medium text-rose-900 transition-colors hover:bg-white"
            >
              Ver certificado en Credly
            </a>
            </div>
          </article>

           <article className="rounded-xl border border-rose-900/10 bg-white/60 p-5">
            <h2 className="text-lg font-medium text-rose-950">
              Introduction to Data Science
            </h2>
            <p className="mt-1 text-sm leading-7 text-rose-800">
              Cisco Networking Academy - Certificado obtenido al completar el
              curso introductorio de ciencia de datos.
            </p>
            <div className="mt-4 flex items-center justify-between gap-4">
            <div className="mt-4 overflow-hidden rounded-xl border border-rose-900/10 bg-white/70">
              <Image
                src="/C2.png"
                alt=" Introduction to Data Science"
                width={100}
                height={100}
                className="h-auto max-h-[100px] w-full object-contain"
                priority
              />
            </div>
            <a
              href="https://www.credly.com/badges/193d4801-3892-4d9a-83ec-c9a45a64e781/linked_in_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-lg border border-rose-900/20 bg-white/80 px-4 py-2 text-sm font-medium text-rose-900 transition-colors hover:bg-white"
            >
              Ver certificado en Credly
            </a>
            </div>
          </article>


        </section>

        <section className="space-y-4 rounded-2xl border border-rose-900/10 bg-white/35 p-6 backdrop-blur-sm">
          <p className="text-sm tracking-[0.2em] text-rose-700 uppercase">
            Certificados de participación
          </p>

          <article className="rounded-xl border border-rose-900/10 bg-white/60 p-4">
            <h2 className="text-lg font-medium text-rose-950">
              JAIIO 54 - Jornadas Argentinas de Informática
            </h2>
            <p className="mt-1 text-sm leading-7 text-rose-800">
              Universidad de Buenos Aires, Argentina - Agosto 2025
            </p>

            <div className="mt-4 overflow-hidden rounded-xl border border-rose-900/10 bg-white/70">
              <Image
                src="/jaiio.jpg"
                alt="Certificado de participación en JAIIO"
                width={1200}
                height={850}
                className="h-auto max-h-[780px] w-full object-contain"
                priority
              />
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
