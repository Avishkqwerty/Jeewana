import { Heart, Users, TrendingUp } from "lucide-react";

export function OurImpact() {
  const impacts = [
    {
      icon: Heart,
      title: "Healthcare Access",
      description: "Providing medical care and health education to underserved communities",
      metric: "15,000+ patients served annually",
    },
    {
      icon: Users,
      title: "Community Development",
      description: "Building stronger communities through sustainable programs",
      metric: "50+ villages transformed",
    },
    {
      icon: TrendingUp,
      title: "Economic Empowerment",
      description: "Creating livelihood opportunities and skill development programs",
      metric: "2,000+ families supported",
    },
  ];

  return (
    <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--charity-blush-plum)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: "var(--charity-dark-plum)" }}>
            Our Impact
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: "var(--charity-dark-plum)" }}>
            Every contribution creates a ripple effect of positive change across Sri Lankan communities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: "var(--charity-blush-plum)" }}
              >
                <impact.icon size={32} style={{ color: "var(--charity-plum)" }} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: "var(--charity-dark-plum)" }}>
                {impact.title}
              </h3>
              <p className="mb-4" style={{ color: "var(--charity-text-secondary)" }}>
                {impact.description}
              </p>
              <p className="text-sm" style={{ color: "var(--charity-plum)" }}>
                {impact.metric}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
