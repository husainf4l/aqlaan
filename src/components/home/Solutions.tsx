import Link from "next/link";

const items = [
  {
    overline: "01",
    title: "Enterprise Automation",
    desc: "Deploy large-scale AI systems that transform productivity. Automate complex workflows end-to-end.",
    href: "/solutions/enterprise-automation",
  },
  {
    overline: "02",
    title: "Healthcare Intelligence",
    desc: "Improve diagnosis and outcomes through contextual AI insights. Built for clinical precision.",
    href: "/solutions/healthcare-ai",
  },
  {
    overline: "03",
    title: "Smart Infrastructure",
    desc: "Enable predictive analytics for safer, smarter cities. Monitor, adapt, and respond in real time.",
    href: "/solutions/infrastructure-ai",
  },
];

export default function Solutions() {
  return (
    <section className="py-20 md:py-24 border-t border-white/[0.06] bg-[#00000f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-[10px] font-mono tracking-[2px] uppercase text-[#a3a3a3] mb-4">
            Solutions
          </p>
          <h2 className="text-4xl font-bold text-white leading-[1.15] tracking-tight max-w-xl">
            Built for Every Industry
          </h2>
          <p className="text-lg text-[#a3a3a3] leading-[1.6] mt-4 max-w-2xl">
            Tailored systems that bridge human expertise and AI precision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((item) => (
            <Link key={item.title} href={item.href} className="block group">
              <div className="scale-card p-8 h-full">
                <p className="text-[10px] font-mono tracking-[2px] uppercase text-[#a3a3a3] mb-6">
                  {item.overline}
                </p>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#a3a3a3] text-sm leading-[1.65] mb-6">{item.desc}</p>
                <span className="text-[#a3a3a3] group-hover:text-white transition-colors duration-300 text-sm font-mono">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
