export default function Features() {
  const features = [
    { title: "AI Strategy", text: "Integrate intelligent automation into your core workflows." },
    { title: "Data Labeling", text: "High-quality datasets built for precision and scalability." },
    { title: "Vision Intelligence", text: "Real-time visual models that understand context and action." },
  ];
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">Core Capabilities</h2>
      <div className="grid md:grid-cols-3 gap-12">
        {features.map((f) => (
          <div key={f.title} className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition">
            <h3 className="text-2xl mb-3 text-blue-400">{f.title}</h3>
            <p className="text-gray-400">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}