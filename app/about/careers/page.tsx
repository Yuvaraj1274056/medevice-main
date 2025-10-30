export default function CareersPage() {
  const jobs = [
    {
      title: "Regulatory Affairs Specialist",
      location: "Remote / USA",
      type: "Full-Time",
      desc: "Work with MedTech clients to navigate FDA & global regulatory submissions.",
      email: "jobs@medevice.com",
    },
    {
      title: "Medical Software Engineer",
      location: "Austin, TX (Hybrid)",
      type: "Full-Time",
      desc: "Develop AI-enabled medical device applications & cloud systems.",
      email: "jobs@medevice.com",
    },
    {
      title: "Quality & Compliance Manager",
      location: "Remote / USA",
      type: "Contract",
      desc: "Lead ISO 13485 compliance, audits and medical product QA systems.",
      email: "jobs@medevice.com",
    },
  ];

  return (
    <main className="py-20 max-w-6xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-red-700 text-center mb-4">
        Careers at MeDevice
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Join us to build the future of MedTech and healthcare innovation.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {jobs.map((job, index) => (
          <div key={index} className="border p-6 rounded-xl bg-white shadow-sm hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-red-700 mb-2">{job.title}</h2>
            <p className="text-gray-600">{job.location} • {job.type}</p>
            <p className="text-gray-700 mt-3">{job.desc}</p>

            <a
              href={`mailto:${job.email}?subject=Application for ${job.title}`}
              className="inline-block mt-5 px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-xl font-semibold">
          Didn’t find what you're looking for?
        </h2>
        <p className="text-gray-600 mt-2">Send your resume to: <b>jobs@medevice.com</b></p>
      </div>
    </main>
  );
}
