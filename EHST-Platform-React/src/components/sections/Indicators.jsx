function Indicators() {
  return (
    <section className="py-16 px-6 bg-white">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Indicadores Estratégicos EHST
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Cumplimiento */}
          <div className="rounded-2xl shadow-lg border p-8 bg-white">

            <h3 className="text-xl font-semibold text-blue-900">
              Cumplimiento
            </h3>

            <div className="text-6xl font-bold text-green-600 mt-4">
              85%
            </div>

            <p className="text-gray-500 mt-2">
              Avance de cumplimiento de la estrategia
            </p>

            <div className="mt-6 text-2xl font-bold text-gray-800">
              198
            </div>

            <p className="text-gray-600">
              Actividades ejecutadas
            </p>

            <div className="mt-5 text-sm text-gray-500 border-t pt-4">
              Cumplimiento = cantidad de actividades ejecutadas.
            </div>

          </div>


          {/* Cobertura */}
          <div className="rounded-2xl shadow-lg border p-8 bg-white">

            <h3 className="text-xl font-semibold text-blue-900">
              Cobertura
            </h3>

            <div className="text-6xl font-bold text-green-600 mt-4">
              48%
            </div>

            <p className="text-gray-500 mt-2">
              Alcance de la estrategia SST
            </p>

            <div className="mt-6 text-2xl font-bold text-gray-800">
              12.450
            </div>

            <p className="text-gray-600">
              Registros y participaciones
            </p>

            <div className="mt-5 text-sm text-gray-500 border-t pt-4">
              Cobertura = cantidad de registros o participaciones.
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Indicators;