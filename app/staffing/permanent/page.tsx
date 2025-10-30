export default function PermanentStaffingPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Permanent Staffing Solutions
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          We help healthcare and med-tech companies hire high-quality, experienced
          full-time talent across engineering, regulatory, clinical, IT, and commercial roles.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-sm text-left">
            <h2 className="text-xl font-semibold mb-2">
              Specialized Talent
            </h2>
            <p className="text-gray-600">
              Our team sources niche med-tech and healthcare professionals with proven industry expertise.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-sm text-left">
            <h2 className="text-xl font-semibold mb-2">
              Full-Cycle Recruitment
            </h2>
            <p className="text-gray-600">
              From talent sourcing and screening to offer negotiation and onboarding support.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-sm text-left">
            <h2 className="text-xl font-semibold mb-2">
              Leadership & Executive Hiring
            </h2>
            <p className="text-gray-600">
              We help you build high-performance leadership teams for long-term success.
            </p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-sm text-left">
            <h2 className="text-xl font-semibold mb-2">
              Medical & Tech Roles
            </h2>
            <p className="text-gray-600">
              Clinical experts, R&D engineers, regulatory specialists, IT architects, AI/ML talent & more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
