import { platform } from "../../data/platform";
import { Activity } from "lucide-react";

import logoRama from "../../assets/logos/logo-rama.png";
import servidorServidor from "../../assets/logos/servidor-servidor.png";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">

{/* Identidad Institucional */}
<div className="flex items-center gap-4">

  <img
    src={logoRama}
    alt="Rama Judicial"
    className="h-16 w-auto object-contain"
  />

  <div>

    <h2 className="text-xl font-bold leading-tight text-slate-900">
      Estrategia de Higiene y Seguridad
      <br />
      en el Trabajo
    </h2>

    <img
      src={servidorServidor}
      alt="La SST de Servidor a Servidor"
      className="mt-2 h-9 w-auto object-contain"
    />

  </div>

</div>

        {/* Menú */}
        <nav className="hidden gap-8 lg:flex">
          {platform.navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-medium text-slate-600 transition hover:text-blue-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Estado */}
        <div className="hidden items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 lg:flex">
          <Activity
            size={16}
            className="text-emerald-600"
          />

          <span className="text-sm font-medium text-emerald-700">
            Dashboard Activo
          </span>
        </div>

      </div>
    </header>
  );
}