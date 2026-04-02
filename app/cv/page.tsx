import Link from "next/link";

export default function CvPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-rose-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-140px] top-[-120px] h-[360px] w-[360px] rounded-full bg-white/40 blur-3xl" />
        <div className="absolute bottom-[-180px] right-[-120px] h-[360px] w-[360px] rounded-full bg-rose-400/30 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs tracking-[0.3em] text-rose-700 uppercase">CV</p>
            <h1 className="text-3xl font-semibold text-rose-950 sm:text-4xl">
              Curriculum Vitae
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
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm leading-7 text-rose-800">
              Visualiza mi CV directamente aqui o descargalo en PDF.
            </p>

            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center rounded-xl border border-rose-900/20 bg-white/80 px-5 py-2 text-sm font-medium text-rose-900 transition-colors hover:bg-white"
            >
              Descargar CV
            </a>
          </div>

          <div className="h-[72vh] overflow-hidden rounded-xl border border-rose-900/10 bg-white/60">
            <iframe
              src="/cv.pdf#view=FitH"
              title="Curriculum Vitae"
              className="h-full w-full"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
