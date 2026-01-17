import { GraduationCap, HeartPulse, Sprout, HandHeart } from "lucide-react";

export function WhatWeDo() {
  const programs = [
    {
      icon: GraduationCap,
      title: "Education Programs",
      description: "Providing quality education, scholarships, and learning resources to underprivileged children",
      image: "https://images.unsplash.com/photo-1666281269793-da06484657e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBlZHVjYXRpb24lMjBjaGlsZHJlbnxlbnwxfHx8fDE3Njg2NTAzMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: HeartPulse,
      title: "Healthcare Services",
      description: "Mobile clinics, preventive care, and health awareness programs for rural communities",
      image: "https://images.unsplash.com/photo-1617080090911-91409e3496ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMGhlbHBpbmclMjBjb21tdW5pdHl8ZW58MXx8fHwxNzY4NTkzNzI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Sprout,
      title: "Sustainable Livelihoods",
      description: "Skills training, microfinance, and agricultural support for economic independence",
      image: "https://images.unsplash.com/photo-1616518921461-433d264be347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzY4NjUwMzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: HandHeart,
      title: "Community Support",
      description: "Disaster relief, infrastructure development, and social welfare programs",
      image: "https://images.unsplash.com/photo-1758599668429-121d54188b9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIweW91dGglMjB2b2x1bnRlZXJzfGVufDF8fHx8MTc2ODY1MDMwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="what-we-do" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: "var(--charity-dark-plum)" }}>
            What We Do
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: "var(--charity-text-secondary)" }}>
            Our comprehensive programs address the most pressing needs of Sri Lankan communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              style={{ border: "2px solid var(--charity-soft-plum)" }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <program.icon size={28} style={{ color: "var(--charity-plum)" }} />
                  <h3 className="text-xl" style={{ color: "var(--charity-dark-plum)" }}>
                    {program.title}
                  </h3>
                </div>
                <p style={{ color: "var(--charity-text-secondary)" }}>
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
