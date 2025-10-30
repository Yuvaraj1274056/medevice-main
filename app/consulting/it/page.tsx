export default function ITConsultingPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          IT Consulting Services
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          We provide comprehensive IT consulting solutions to help organizations build secure, scalable, and modern technology systems across cloud, security, automation, and enterprise applications.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="font-semibold text-xl">Cloud Solutions</h2>
            <p className="text-gray-600 mt-2">
              Cloud migration, DevOps, Infrastructure automation, and Cloud security initiatives.
            </p>
          </div>

          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="font-semibold text-xl">Cybersecurity</h2>
            <p className="text-gray-600 mt-2">
              Threat assessment, identity management, vulnerability testing, and compliance programs.
            </p>
          </div>

          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="font-semibold text-xl">Enterprise Systems</h2>
            <p className="text-gray-600 mt-2">
              SAP, Oracle, Microsoft Dynamics, and ERP modernization services.
            </p>
          </div>

          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="font-semibold text-xl">AI & Automation</h2>
            <p className="text-gray-600 mt-2">
              AI solutions, workflow automation, RPA and intelligent analytics platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
