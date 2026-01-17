export function Hero() {
  const scrollToDonate = () => {
    const element = document.getElementById("donate");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--charity-warm-white)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl leading-tight" style={{ color: "var(--charity-dark-plum)" }}>
              Transforming Lives Through Compassion and Action
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "var(--charity-text-secondary)" }}>
              Jeewana Lanka Foundation is dedicated to empowering communities across Sri Lanka through education,
              healthcare, and sustainable development programs.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToDonate}
                className="px-8 py-3 rounded-lg text-white transition-all"
                style={{
                  backgroundColor: "var(--charity-plum)",
                  boxShadow: "0 4px 12px rgba(155, 92, 119, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--charity-dark-plum)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--charity-plum)";
                }}
              >
                Donate Now
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("about");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3 rounded-lg transition-all"
                style={{
                  backgroundColor: "var(--charity-warm-white)",
                  border: "2px solid var(--charity-plum)",
                  color: "var(--charity-plum)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--charity-blush-plum)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--charity-warm-white)";
                }}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1758599668429-121d54188b9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIweW91dGglMjB2b2x1bnRlZXJzfGVufDF8fHx8MTc2ODY1MDMwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Volunteers making a difference"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
