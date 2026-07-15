export default function Button({
  children,
  href,
  variant = "primary",
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-gradient-to-r from-red-600 via-red-500 to-blue-700 text-white shadow-lg hover:scale-105 hover:shadow-xl",

    secondary:
      "border border-slate-300 bg-white text-slate-700 hover:border-blue-600 hover:text-blue-700",
  };

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${variants[variant]}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}