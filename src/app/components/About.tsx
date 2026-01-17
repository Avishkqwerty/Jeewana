export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1618173887111-3ecfc91c41b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBtZW50b3JzaGlwJTIwd2FybXxlbnwxfHx8fDE3Njg2NTAzMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Community mentorship"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl" style={{ color: "var(--charity-dark-plum)" }}>
              About Jeewana Lanka Foundation
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "var(--charity-text-secondary)" }}>
              Founded with a vision to create lasting change, Jeewana Lanka Foundation has been serving communities
              across Sri Lanka for years. Our mission is to provide dignity, hope, and opportunity to those who need
              it most.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "var(--charity-text-secondary)" }}>
              We believe in the power of compassion and the importance of sustainable development. Through our various
              programs, we focus on education, healthcare, livelihood development, and community empowerment.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div
                  className="w-2 h-2 rounded-full mt-2"
                  style={{ backgroundColor: "var(--charity-plum)" }}
                />
                <p style={{ color: "var(--charity-text-primary)" }}>
                  Community-driven approach to sustainable development
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div
                  className="w-2 h-2 rounded-full mt-2"
                  style={{ backgroundColor: "var(--charity-plum)" }}
                />
                <p style={{ color: "var(--charity-text-primary)" }}>
                  Transparent and accountable use of resources
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div
                  className="w-2 h-2 rounded-full mt-2"
                  style={{ backgroundColor: "var(--charity-plum)" }}
                />
                <p style={{ color: "var(--charity-text-primary)" }}>
                  Long-term partnerships with local communities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
