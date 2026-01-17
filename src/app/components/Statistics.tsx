import { Users, Building2, Award, Target } from "lucide-react";

export function Statistics() {
  const stats = [
    {
      icon: Users,
      number: "25,000+",
      label: "Lives Impacted",
    },
    {
      icon: Building2,
      number: "75+",
      label: "Active Projects",
    },
    {
      icon: Award,
      number: "12",
      label: "Years of Service",
    },
    {
      icon: Target,
      number: "98%",
      label: "Program Success Rate",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--charity-warm-white)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: "var(--charity-dark-plum)" }}>
            Our Achievements
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: "var(--charity-text-secondary)" }}>
            Numbers that reflect our commitment to making a difference
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "var(--charity-blush-plum)" }}
              >
                <stat.icon size={28} style={{ color: "var(--charity-plum)" }} />
              </div>
              <div className="text-3xl mb-2" style={{ color: "var(--charity-dark-plum)" }}>
                {stat.number}
              </div>
              <div style={{ color: "var(--charity-text-secondary)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
