export default function CompanyPage() {
  return (
    <main className="py-32 text-center">
      <h1 className="text-4xl font-bold text-red-700 mb-4">
        Company Overview
      </h1>

      <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
        MeDevice is dedicated to empowering healthcare and MedTech innovation. 
        We bridge technology, talent, and strategic solutions to accelerate 
        medical advancements and build a healthier future.
      </p>

      <div className="mt-10">
        <img 
          src="/images/medtech-team.jpg" 
          alt="MedTech Innovation" 
          className="rounded-xl shadow-lg mx-auto"
        />
      </div>
    </main>
  );
}
