import { Code2, Cloud, Monitor, MessageSquare, Cpu, Settings } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "API Development",
    subtitle: "Spring Boot / MuleSoft",
    description:
      "Production-ready REST APIs with authentication, validation, rate limiting, and comprehensive documentation.",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    subtitle: "AWS",
    description:
      "End-to-end deployment and configuration of backend/frontend applications with CI/CD, IAM, and logging.",
  },
  {
    icon: Monitor,
    title: "UI Development",
    subtitle: "React",
    description:
      "Responsive dashboards and web applications with modern React patterns and clean component architecture.",
  },
  {
    icon: MessageSquare,
    title: "AI Integration",
    subtitle: "LLM APIs",
    description:
      "Add chat interfaces, summarization, semantic search, or AI-driven features to existing applications.",
  },
  {
    icon: Cpu,
    title: "AI-Enabled Backend",
    subtitle: "Spring Boot + LLM",
    description:
      "LLM-powered microservices integrated into Spring Boot backends for intelligent data processing.",
  },
  {
    icon: Settings,
    title: "Infrastructure as Code",
    subtitle: "Terraform",
    description:
      "Scalable, repeatable cloud provisioning with version-controlled infrastructure definitions.",
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">
            Services
          </p>
          <h2 className="heading-lg text-foreground mb-4">
            What I can build for you
          </h2>
          <p className="body-md max-w-2xl mx-auto">
            From backend APIs to cloud infrastructure, I deliver production-ready 
            solutions focused on reliability and maintainability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                <service.icon size={24} />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {service.title}
                </h3>
                <p className="text-sm font-medium text-accent mb-3">
                  {service.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
