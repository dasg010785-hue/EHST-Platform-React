import { platform } from "../../data/platform";

export default function Strategy() {
  return (
    <section
      id="estrategia"
      className="mx-auto max-w-7xl px-6 py-20"
    >
      <div className="text-center">

        <span className="text-sm font-semibold uppercase tracking-widest text-blue-700">
          Estrategia
        </span>

        <h2 className="mt-3 text-4xl font-bold text-slate-900">
          {platform.app.title}
        </h2>

        <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-600">
          {platform.app.subtitle}
        </p>

      </div>
    </section>
  );
}