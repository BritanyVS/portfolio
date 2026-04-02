type HeaderProps = {
  name: string;
  profileSummary: string;
  profileDetails: string;
  specialties: string;
};

export default function Header({
  name,
  profileSummary,
  profileDetails,
  specialties,
}: HeaderProps) {
  return (
    <header className="flex min-h-[70vh] flex-col justify-center gap-8">
      <p className="text-xs tracking-[0.35em] text-rose-700 uppercase">
        Perfil profesional
      </p>

      <div className="max-w-4xl space-y-5">
        <h1 className="text-4xl leading-tight font-semibold text-rose-950 sm:text-5xl lg:text-6xl">
          {name}
        </h1>

        <p className="max-w-3xl text-base leading-8 text-rose-800 sm:text-lg">
          {profileSummary}
        </p>

        <p className="max-w-3xl text-base leading-8 text-rose-800 sm:text-lg">
          {profileDetails}
        </p>

        <p className="max-w-3xl text-base leading-8 text-rose-900 sm:text-lg">
          <span className="font-semibold">Especialidades:</span> {specialties}
        </p>
      </div>
    </header>
  );
}