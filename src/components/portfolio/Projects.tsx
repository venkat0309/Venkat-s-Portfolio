import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Newspaper, Cloud, MessageSquare } from "lucide-react";

const projects = [
  {
    icon: Newspaper,
    title: "Pulse Feed",
    subtitle: "Smart News Aggregator",
    role: "Full-stack Developer",
    description:
      "Real-time news aggregation platform that pulls and displays content from multiple sources via REST APIs. Features responsive UI and seamless user experience.",
    contributions: [
      "Built Spring Boot REST APIs with NewsAPI integration",
      "Developed responsive React frontend with Axios",
      "Implemented category filtering and search functionality",
    ],
    tech: ["Spring Boot", "React", "REST APIs", "Axios", "NewsAPI"],
    github: "#",
    demo: "#",
  },
  {
    icon: Cloud,
    title: "Cloud-Deployed Full-Stack App",
    subtitle: "AWS + Infrastructure as Code",
    role: "Full-stack + Cloud Engineer",
    description:
      "End-to-end demonstration of cloud deployment capabilities with automated infrastructure provisioning using Terraform.",
    contributions: [
      "Deployed application on AWS EC2 with S3 for static assets",
      "Configured IAM roles and security groups",
      "Automated infrastructure with Terraform modules",
    ],
    tech: ["AWS EC2", "S3", "IAM", "Terraform", "Spring Boot"],
    github: "#",
    demo: "#",
  },
  {
    icon: MessageSquare,
    title: "AI-Enabled API Integration",
    subtitle: "LLM-Powered Backend",
    role: "Backend + AI Developer",
    description:
      "REST API service enhanced with LLM capabilities for intelligent text processing, including chat interfaces and content summarization.",
    contributions: [
      "Designed prompt engineering workflows for consistent outputs",
      "Integrated LLM APIs via REST endpoints",
      "Built JSON-based response formatting for frontend consumption",
    ],
    tech: ["Spring Boot", "LLM APIs", "REST", "JSON", "Prompt Engineering"],
    github: "#",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-card">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">
            Projects
          </p>
          <h2 className="heading-lg text-foreground mb-4">
            Work I'm proud of
          </h2>
          <p className="body-md max-w-2xl">
            A selection of projects that showcase my ability to build, deploy, 
            and enhance production-grade systems across the full stack.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-xl border border-border bg-background transition-all hover:border-primary/30 hover:shadow-lg overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <project.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-accent mb-2">
                  {project.subtitle}
                </p>
                <p className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                  {project.role}
                </p>
              </div>

              {/* Content */}
              <div className="flex-1 px-6 pb-4">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Contributions */}
                <ul className="space-y-2 mb-4">
                  {project.contributions.map((contribution, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {contribution}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md border border-border bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="border-t border-border p-4 mt-auto">
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-2"
                    asChild
                  >
                    <a href={project.github}>
                      <Github size={16} />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 gap-2 bg-primary text-primary-foreground hover:bg-navy-light"
                    asChild
                  >
                    <a href={project.demo}>
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
