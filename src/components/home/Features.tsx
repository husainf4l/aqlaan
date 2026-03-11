const features = [
  {
    overline: "01",
    title: "AI Strategy",
    text: "Integrate intelligent automation into your core workflows. Design, deploy, and iterate at enterprise velocity.",
  },
  {
    overline: "02",
    title: "Data Labeling",
    text: "High-quality datasets built for precision and scalability. Human-in-the-loop pipelines that power state-of-the-art models.",
  },
  {
    overline: "03",
    title: "Vision Intelligence",
    text: "Real-time visual models that understand context and action. From detection to segmentation — production-ready.",
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-24 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-[10px] font-mono tracking-[2px] uppercase text-[#a3a3a3] mb-4">
            Capabilities
          </p>
          <h2 className="text-4xl font-bold text-white leading-[1.15] tracking-tight max-w-xl">
            Core Capabilities
          </h2>
          <p className="text-lg text-[#a3a3a3] leading-[1.6] mt-4 max-w-2xl">
            Everything you need to build, scale, and operate AI systems with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="scale-card p-8 group">
              <p className="text-[10px] font-mono tracking-[2px] uppercase text-[#a3a3a3] mb-6">
                {f.overline}
              </p>
              <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
              <p className="text-[#a3a3a3] text-sm leading-[1.65]">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
