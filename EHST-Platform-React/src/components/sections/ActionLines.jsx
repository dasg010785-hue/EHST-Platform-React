import {
  Search,
  ShieldAlert,
  Car,
  Users,
  AlertTriangle,
  HardHat,
  HeartHandshake,
} from "lucide-react";

import { platform } from "../../data/platform";

const icons = {
  Search,
  ShieldAlert,
  Car,
  Users,
  AlertTriangle,
  HardHat,
  HeartHandshake,
};

const colors = {
  blue: "bg-blue-100 text-blue-700",
  red: "bg-red-100 text-red-700",
  green: "bg-green-100 text-green-700",
  purple: "bg-purple-100 text-purple-700",
  orange: "bg-orange-100 text-orange-700",
  slate: "bg-slate-100 text-slate-700",
  emerald: "bg-emerald-100 text-emerald-700",
};

export default function ActionLines() {
  return (
    <section id="lineas" className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <span className="font-semibold uppercase tracking-widest text-blue-700">
            Líneas de Acción
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Acciones estratégicas transversales
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            Las líneas de acción articulan todos los ejes estratégicos y permiten desarrollar
            una gestión integral de la Higiene y Seguridad en el Trabajo.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {platform.actionLines.map((item) => {
            const Icon = icons[item.icon];

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${colors[item.color]}`}
                >
                  {Icon && <Icon size={24} />}
                </div>

                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}