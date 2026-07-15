import {
  Target,
  ShieldCheck,
  Globe2,
  ArrowRight,
} from "lucide-react";

export default function Strategy() {
  return (
    <section
      id="estrategia"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24"
    >
      {/* Fondo decorativo */}
      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-50"></div>

      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-red-100 blur-3xl opacity-50"></div>

      <div className="mx-auto max-w-7xl px-6">

        {/* Encabezado */}

        <div className="mb-16 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            Estrategia EHST
          </span>

          <h2 className="mt-5 text-5xl font-black text-slate-900">
            Estrategia de Higiene y Seguridad en el Trabajo
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            Un enfoque estratégico para fortalecer la prevención,
            proteger la integridad de las personas y apoyar la toma
            de decisiones mediante una gestión integral del riesgo.
          </p>

        </div>



        {/* Tarjetas */}

        <div className="grid gap-8 lg:grid-cols-3">

          {/* TARJETA 1 */}

          <div className="group rounded-3xl border border-blue-100 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-700 to-cyan-500 text-white shadow-lg">

              <Target size={34} />

            </div>

            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              Objetivo General
            </h3>

            <p className="leading-8 text-slate-600">
              Implementar directrices y controles para prevenir y
              gestionar los riesgos de higiene y seguridad en el
              trabajo, garantizando la integridad de las personas,
              la continuidad operativa y el cumplimiento normativo
              en la Rama Judicial.
            </p>

          </div>



          {/* TARJETA 2 */}

          <div className="group rounded-3xl border border-emerald-100 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg">

              <ShieldCheck size={34} />

            </div>

            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              Acciones Específicas
            </h3>

            <ul className="space-y-4 text-slate-600">

              {[
                "Prevenir riesgos laborales.",
                "Garantizar un ambiente de trabajo seguro y saludable.",
                "Reducir accidentes y enfermedades laborales.",
                "Promover la cultura de prevención.",
                "Cumplir con la responsabilidad legal y ética.",
              ].map((item) => (

                <li
                  key={item}
                  className="flex items-start gap-3"
                >

                  <ArrowRight
                    size={18}
                    className="mt-1 text-emerald-600"
                  />

                  <span>{item}</span>

                </li>

              ))}

            </ul>

          </div>



          {/* TARJETA 3 */}

          <div className="group rounded-3xl border border-red-100 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-red-700 to-blue-700 text-white shadow-lg">

              <Globe2 size={34} />

            </div>

            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              Alcance
            </h3>

            <p className="leading-8 text-slate-600">
              Inicia con la identificación de peligros, evaluación
              y control de riesgos en los lugares de trabajo y
              culmina con la implementación y seguimiento de medidas
              preventivas y de mejora continua, aplicándose a todas
              las sedes judiciales, trabajadores, contratistas y
              visitantes de la Rama Judicial en Colombia.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}