function PowerBIDashboard() {
  return (
    <section
      id="dashboard"
      className="py-16 px-6 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">

        {/* Encabezado de sección */}
        <div className="text-center mb-10">

          <h2 className="text-3xl font-bold text-blue-900">
            Dashboard Estratégico EHST
          </h2>

          <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
            Visualización dinámica de indicadores, avance de ejecución,
            cobertura y gestión estratégica de Seguridad y Salud en el Trabajo.
          </p>

        </div>


        {/* Contenedor Power BI */}
        <div
          className="
            relative
            w-full
            overflow-hidden
            rounded-2xl
            shadow-xl
            bg-white
            border
          "
        >

          <iframe
            title="Dashboard Estratégico EHST"
            width="100%"
            height="700"
            src="https://app.powerbi.com/view?r=eyJrIjoiNWUzMmMyMGYtYjllMS00ZGJmLWI3MmQtZjBlYWFhZTQzNmFlIiwidCI6IjYyMmNiYTk4LTgwZjgtNDFmMy04ZGY1LThlYjk5OTAxNTk4YiIsImMiOjR9"
            frameBorder="0"
            allowFullScreen="true"
          ></iframe>

        </div>

      </div>
    </section>
  );
}

export default PowerBIDashboard;