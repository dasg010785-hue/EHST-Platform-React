import { platform } from "../../data/platform";
import { Activity } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-red-600 to-blue-700 text-white font-bold shadow-lg">
            EH
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              {platform.app.name}
            </h2>

            <p className="text-xs text-slate-500">
              Rama Judicial de Colombia
            </p>
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