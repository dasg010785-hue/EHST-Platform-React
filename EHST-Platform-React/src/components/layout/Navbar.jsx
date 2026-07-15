import { platform } from "../../data/platform";
import { Activity } from "lucide-react";

import logoRama from "../../assets/logos/logo-rama.png";
import servidorServidor from "../../assets/logos/servidor-servidor.png";


export default function Navbar() {

  return (

    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-slate-200/70
        bg-white/90
        backdrop-blur-xl
        shadow-sm
      "
    >


      <div className="mx-auto max-w-7xl px-8">


        {/* ==============================
            CABECERA INSTITUCIONAL
        =============================== */}

        <div
          className="
            grid
            grid-cols-3
            items-center
            py-4
          "
        >



          {/* LOGO RAMA JUDICIAL */}

          <div
            className="
              flex
              justify-start
            "
          >

            <img
              src={logoRama}
              alt="Rama Judicial"
              className="
                h-20
                w-auto
                object-contain
              "
            />

          </div>





          {/* TITULO CENTRAL */}

          <div
            className="
              flex
              flex-col
              items-center
              justify-center
            "
          >

            <h1
              className="
                text-center
                text-3xl
                font-extrabold
                leading-tight
                tracking-tight
                text-slate-900
              "
            >

              Estrategia de Higiene y Seguridad

              <br />

              <span
                className="
                  text-blue-700
                "
              >
                en el Trabajo
              </span>


            </h1>


          </div>





          {/* LOGO SERVIDOR A SERVIDOR */}

          <div
            className="
              flex
              justify-end
            "
          >

            <img
              src={servidorServidor}
              alt="La SST de Servidor a Servidor"
              className="
                h-14
                w-auto
                object-contain
              "
            />

          </div>


        </div>





        {/* ==============================
             MENU INFERIOR
        =============================== */}


        <div
          className="
            flex
            items-center
            justify-between
            border-t
            border-slate-200
            py-3
          "
        >



          <nav
            className="
              hidden
              gap-8
              lg:flex
            "
          >

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





          {/* ESTADO DASHBOARD */}

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