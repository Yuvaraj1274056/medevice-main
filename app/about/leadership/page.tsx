export default function LeadershipPage() {
  const leaders = [
    {
      name: "Dr. John Carter",
      role: "Founder & CEO",
      bio: "20+ years of MedTech leadership, former FDA advisor, and product innovation expert.",
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Sarah Mitchell",
      role: "Chief Technology Officer",
      bio: "AI & Digital Health systems expert, leading MedTech software innovations globally.",
      img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Michael Grant",
      role: "Head of Regulatory",
      bio: "Specialist in ISO 13485, MDR, and FDA submissions — 150+ successful approvals.",
      img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <main className="py-20 max-w-6xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-red-700 text-center mb-12">
        Leadership Team
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        {leaders.map((leader) => (
          <div
            key={leader.name}
            className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition"
          >
            <img
              src={leader.img}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              alt={leader.name}
            />
            <h2 className="text-xl font-semibold text-red-700">{leader.name}</h2>
            <p className="text-gray-600 font-medium">{leader.role}</p>
            <p className="text-gray-700 text-sm mt-3">{leader.bio}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
