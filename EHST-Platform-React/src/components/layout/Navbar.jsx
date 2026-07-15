import { platform } from "../../data/platform";
import { Activity } from "lucide-react";

import logoRama from "../../assets/logos/logo-rama.png";
import servidorServidor from "../../assets/logos/servidor-servidor.png";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl shadow-sm">

      <div className="mx-auto max-w-7xl px-8 py-4">

        <div className="grid grid-cols-3 items-center">

          {/* Identidad Institucional */}
          <div className="flex flex-col items-start">

            {/* Título */}
            <h2 className="text-xl font-bold leading-tight text-slate-900">
              Estrategia de Higiene y Seguridad
              <br />
              en el Trabajo
            </h2>


            {/* Logos */}
            <div className="mt-3 flex items-center gap-5">

              <img
                src={logoRama}
                alt="Rama Judicial"
                className="h-14 w-auto object-contain"
              />


              <img
                src={servidorServidor}
                alt="La SST de Servidor a Servidor"
                className="h-9 w-auto object-contain"
              />

            </div>

          </div>



          {/* Menú principal */}
          <nav className="hidden justify-center gap-8 lg:flex">

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



          {/* Estado Dashboard */}
          <div className="hidden justify-end lg:flex">

            <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2">

              <Activity
                size={16}
                className="text-emerald-600"
              />


              <span className="text-sm font-medium text-emerald-700">
                Dashboard Activo
              </span>

            </div>

          </div>


        </div>

      </div>

    </header>
  );
}