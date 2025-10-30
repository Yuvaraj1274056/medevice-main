export default function StrategyConsultingPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Strategy Consulting
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          We help healthcare & med-tech organizations build future-ready digital,
          operational, and innovation strategies to win in an evolving market.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-sm text-left">
            <h2 className="text-xl font-semibold mb-2">
              Digital Transformation Strategy
            </h2>
            <p className="text-gray-600">
              Roadmapping, modernization, and digital maturity programs aligned
              with future industry needs.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-sm text-left">
            <h2 className="text-xl font-semibold mb-2">
              Go-to-Market & Product Strategy
            </h2>
            <p className="text-gray-600">
              Market positioning, digital product strategy, commercialization,
              and launch execution.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-sm text-left">
            <h2 className="text-xl font-semibold mb-2">
              Enterprise Operating Model
            </h2>
            <p className="text-gray-600">
              Target operating models, org design, and modernization of
              enterprise capabilities.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-sm text-left">
            <h2 className="text-xl font-semibold mb-2">
              Innovation & AI Strategy
            </h2>
            <p className="text-gray-600">
              AI opportunity assessment, automation strategy, R&D acceleration,
              and data-driven decision frameworks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
