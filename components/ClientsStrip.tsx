const clients = [
  "NovaSpark",
  "Scalr Labs",
  "Orbitly",
  "Fyndr.io",
  "Launchpad HQ",
  "Driftwave",
  "Crestline",
  "TechVeda",
];

export default function ClientsStrip() {
  return (
    <section className="border-b border-gray-200/70 py-10 sm:py-14 overflow-hidden">
      <p className="text-center text-[11px] tracking-widest text-gray-400 uppercase mb-8 px-6">
        Trusted by startups and tech brands across India
      </p>
      <div className="flex gap-5 animate-marquee">
        {[...clients, ...clients].map((name, i) => (
          <span
            key={i}
            className="text-sm font-medium text-gray-400 tracking-wide whitespace-nowrap px-5 py-2 rounded-full ring-1 ring-gray-200/70 shrink-0"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
