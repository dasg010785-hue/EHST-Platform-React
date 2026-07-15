import { strategy } from "../../data/strategy";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="bg-gradient-to-br from-slate-50 to-blue-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 text-center">

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          EHST Platform
        </span>

        <h1 className="mt-8 text-5xl font-extrabold text-slate-900">
          {strategy.title}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-600">
          {strategy.subtitle}
        </p>

<button
  onClick={() =>
    document
      .getElementById("dashboard")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="
    mt-10
    rounded-xl
    bg-gradient-to-r
    from-red-600
    to-blue-700
    px-8
    py-4
    font-semibold
    text-white
    shadow-lg
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-xl
  "
>
  {strategy.buttonText}
</button>

      </div>
    </section>
  );
}