export default function HealthcareConsulting() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6 text-red-600">
          Healthcare Consulting
        </h1>
        
        <p className="text-lg text-gray-700 mb-6">
          We provide expert healthcare consulting services helping hospitals, clinics, 
          medical device companies, and healthcare tech startups optimize operations, 
          comply with regulations, and enhance patient outcomes.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900">Our Services</h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Healthcare digital transformation</li>
          <li>Regulatory & compliance consulting (FDA, HIPAA, EMA)</li>
          <li>Medical device product strategy</li>
          <li>Data management & patient analytics</li>
          <li>Healthcare IT system implementation</li>
          <li>Clinical operations optimization</li>
        </ul>

        <div className="mt-10 p-6 bg-white shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Why Choose Us?</h3>
          <p className="text-gray-700 mb-4">
            Our expertise in healthcare innovation enables faster product approvals, 
            improved patient safety, and efficient operations.
          </p>
          <a 
            href="/contact-us"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </div>
  );
}
