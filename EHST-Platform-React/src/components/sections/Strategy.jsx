import {
  Target,
  ShieldCheck,
  Globe2,
  CheckCircle2,
} from "lucide-react";

export default function Strategy() {
  return (
    <section
      id="estrategia"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-24"
    >
      {/* Elementos decorativos */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-red-200/30 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6">

        {/* Encabezado */}

        <div className="mb-16 text-center">

          <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold tracking-wide text-blue-700">
            ESTRATEGIA EHST
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Estrategia de Higiene y Seguridad en el Trabajo
          </h2>

          <div className="mx-auto mt-5 h-1 w-40 rounded-full bg-gradient-to-r from-red-600 via-blue-600 to-cyan-500"></div>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-8 text-slate-600">
            Una estrategia institucional orientada a fortalecer la cultura
            preventiva, la continuidad operacional y la toma de decisiones
            mediante la gestión integral del riesgo.
          </p>

        </div>

        {/* Tarjetas */}

        <div className="grid gap-8 lg:grid-cols-3">

          {/* OBJETIVO */}

          <div className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white/80 backdrop-blur-lg shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

            <div className="h-2 bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-300"></div>

            <div className="p-8">

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-500 text-white shadow-lg">

                <Target size={34} />

              </div>

              <h3 className="mb-5 text-2xl font-bold text-slate-900">
                Objetivo General
              </h3>

              <p className="leading-8 text-slate-600">
                Implementar directrices y controles para prevenir y gestionar
                los riesgos de higiene y seguridad en el trabajo, garantizando
                la integridad de las personas, la continuidad operativa y el
                cumplimiento normativo en la Rama Judicial.
              </p>

            </div>

          </div>

          {/* ACCIONES */}

          <div className="group relative overflow-hidden rounded-3xl border border-emerald-100 bg-white/80 backdrop-blur-lg shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

            <div className="h-2 bg-gradient-to-r from-emerald-600 via-green-500 to-teal-400"></div>

            <div className="p-8">

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-500 text-white shadow-lg">

                <ShieldCheck size={34} />

              </div>

              <h3 className="mb-5 text-2xl font-bold text-slate-900">
                Acciones Específicas
              </h3>

              <div className="space-y-4">

                {[
                  "Prevenir riesgos laborales.",
                  "Garantizar un ambiente de trabajo seguro y saludable.",
                  "Reducir accidentes y enfermedades laborales.",
                  "Promover la cultura de prevención.",
                  "Cumplir con la responsabilidad legal y ética.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-1 text-emerald-600"
                    />

                    <span className="text-slate-600">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* ALCANCE */}

          <div className="group relative overflow-hidden rounded-3xl border border-red-100 bg-white/80 backdrop-blur-lg shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

            <div className="h-2 bg-gradient-to-r from-red-700 via-red-500 to-blue-700"></div>

            <div className="p-8">

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-700 to-blue-700 text-white shadow-lg">

                <Globe2 size={34} />

              </div>

              <h3 className="mb-5 text-2xl font-bold text-slate-900">
                Alcance
              </h3>

              <p className="leading-8 text-slate-600">
                Inicia con la identificación de peligros, evaluación y control
                de riesgos en los lugares de trabajo, y culmina con la
                implementación y seguimiento de medidas preventivas y mejora
                continua, aplicado a todas las sedes judiciales, trabajadores,
                contratistas y visitantes de la Rama Judicial en Colombia.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}