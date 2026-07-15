import {
  Shield,
  Flame,
  Activity,
  Users,
} from "lucide-react";

import { platform } from "../../data/platform";

const icons = {
  Shield,
  Flame,
  Activity,
  Users,
};

const colors = {
  blue: "bg-blue-100 text-blue-700",
  red: "bg-red-100 text-red-700",
  green: "bg-green-100 text-green-700",
  purple: "bg-purple-100 text-purple-700",
};

export default function StrategicAxes() {
  return (
    <section
      id="ejes"
      className="bg-slate-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="font-semibold uppercase tracking-widest text-blue-700">
            Ejes Estratégicos
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Los pilares de la estrategia EHST
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {platform.strategicAxes.map((axis) => {
            const Icon = icons[axis.icon];

            return (
              <div
                key={axis.title}
                className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${colors[axis.color]}`}
                >
                  <Icon size={28} />
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {axis.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {axis.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}