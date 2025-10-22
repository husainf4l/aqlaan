export default function Solutions() {
  const items = [
    { title: "Enterprise Automation", desc: "Deploy large-scale AI systems that transform productivity." },
    { title: "Healthcare Intelligence", desc: "Improve diagnosis and outcomes through contextual AI insights." },
    { title: "Smart Infrastructure", desc: "Enable predictive analytics for safer, smarter cities." },
  ];
  return (
    <section className="py-24 px-6 bg-linear-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Solutions</h2>
        <p className="text-gray-400 mb-16">Tailored systems that bridge human expertise and AI precision.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.title} className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-600">
              <h3 className="text-xl text-blue-400 mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}