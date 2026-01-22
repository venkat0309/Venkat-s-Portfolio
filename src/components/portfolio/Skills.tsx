import { Server, Monitor, Cloud, Cpu, Lightbulb } from "lucide-react";

const skillCategories = [
  {
    icon: Server,
    title: "Backend",
    skills: ["Spring Boot", "API Development", "MuleSoft", "REST APIs", "Java"],
  },
  {
    icon: Monitor,
    title: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
  },
  {
    icon: Cloud,
    title: "Cloud",
    skills: ["AWS IAM", "EC2", "S3", "Lambda", "Terraform", "CI/CD"],
  },
  {
    icon: Cpu,
    title: "AI/ML",
    skills: ["LLM APIs", "AI Integration", "Semantic Search", "Prompt Engineering"],
  },
  {
    icon: Lightbulb,
    title: "Core",
    skills: ["Data Structures", "Algorithms", "Problem Solving", "System Design"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-card">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">
            Skills
          </p>
          <h2 className="heading-lg text-foreground">
            Technologies I work with
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              {/* Category Header */}
              <div className="mb-4 flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <category.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
