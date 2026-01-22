import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Infosys",
    role: "Systems Engineer — API Developer",
    period: "June 2025 — Present",
    type: "Full-time",
    bullets: [
      "Developing and maintaining enterprise-grade REST APIs for client integrations",
      "Building scalable backend services with focus on performance and reliability",
      "Collaborating with cross-functional teams on API specification and documentation",
    ],
  },
  {
    company: "Hexagon",
    role: "Spring Boot Developer Intern",
    period: "June 2024 — June 2025",
    type: "Internship",
    bullets: [
      "Built backend microservices using Spring Boot for geospatial applications",
      "Implemented data processing pipelines and RESTful endpoints",
      "Gained hands-on experience with enterprise development workflows and best practices",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">
            Experience
          </p>
          <h2 className="heading-lg text-foreground">
            Where I've worked
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative pl-8 md:pl-0 ${
                  index % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%]"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary md:left-1/2">
                  <Briefcase size={12} className="text-primary-foreground" />
                </div>

                {/* Card */}
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {exp.type}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {exp.company}
                    </p>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
