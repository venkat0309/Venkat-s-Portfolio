import { GraduationCap, Code2, Cloud, Cpu } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "B.Tech in Computer Science",
    description: "K L University, 2025",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Spring Boot + React",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "AWS + Terraform",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "LLM APIs + Semantic Search",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">
            About Me
          </p>
          <h2 className="heading-lg text-foreground">
            Building systems that work
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="space-y-6">
            <p className="body-lg">
              I'm a software developer with a focus on execution over theory. 
              My experience spans backend development with Spring Boot, cloud 
              infrastructure on AWS, and responsive frontends with React.
            </p>
            <p className="body-md">
              Currently working as a Systems Engineer at Infosys, I specialize in 
              API development and integration. Previously, I completed a year-long 
              internship at Hexagon, building backend services with Spring Boot.
            </p>
            <p className="body-md">
              What sets me apart is my ability to work across the entire stack — 
              from designing REST APIs to deploying infrastructure as code with 
              Terraform. I'm particularly interested in enhancing systems with 
              AI capabilities through LLM API integrations.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-md"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
