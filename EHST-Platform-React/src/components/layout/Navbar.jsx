import { platform } from "../../data/platform";
import { Activity } from "lucide-react";

import logoRama from "../../assets/logos/logo-rama.png";
import servidorServidor from "../../assets/logos/servidor-servidor.png";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl shadow-sm">

      <div className="mx-auto max-w-7xl px-8">

        {/* ===========================
            CABECERA INSTITUCIONAL
        ============================ */}

        <div className="grid grid-cols-[1fr_2.5fr_1fr] items-center py-5">

          {/* Logo Rama Judicial */}
          <div className="flex justify-start">

            <img
              src={logoRama}
              alt="Rama Judicial"
              className="h-20 w-auto object-contain"
            />

          </div>

          {/* Título */}
          <div className="flex flex-col items-center">

            <h1
              className="
                text-5xl
                font-extrabold
                leading-none
                tracking-tight
                text-slate-900
              "
            >
              Estrategia
            </h1>

            <h2
              className="
                mt-2
                whitespace-nowrap
                text-2xl
                xl:text-3xl
                font-black
                tracking-tight
                bg-gradient-to-r
                from-[#821212]
                via-[#C53030]
                to-[#1E3A8A]
                bg-clip-text
                text-transparent
              "
            >
              Higiene y Seguridad en el Trabajo
            </h2>

          </div>

          {/* Logo Servidor a Servidor */}
          <div className="flex justify-end">

            <img
              src={servidorServidor}
              alt="La SST de Servidor a Servidor"
              className="h-14 w-auto object-contain"
            />

          </div>

        </div>

        {/* ===========================
            MENÚ
        ============================ */}

        <div className="flex items-center justify-between border-t border-slate-200 py-3">

          <nav className="hidden gap-8 lg:flex">

            {platform.navigation.map((item) => (

              <a
                key={item.id}
                href={`#${item.id}`}
                className="
                  text-sm
                  font-semibold
                  text-slate-600
                  transition
                  hover:text-blue-700
                "
              >
                {item.label}
              </a>

            ))}

          </nav>

          {/* Estado */}
          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-emerald-200
              bg-emerald-50
              px-4
              py-2
            "
          >

            <Activity
              size={16}
              className="text-emerald-600"
            />

            <span
              className="
                text-sm
                font-semibold
                text-emerald-700
              "
            >
              Dashboard Activo
            </span>

          </div>

        </div>

      </div>

    </header>
  );
}