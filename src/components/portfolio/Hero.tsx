import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Code2, Cloud, Database, Sparkles } from "lucide-react";
import headshotImage from "@/assets/headshot.jpg";

const floatingTech = [
  { icon: Code2, label: "Spring Boot", position: "top-8 -left-4", delay: "0s" },
  { icon: Cloud, label: "AWS", position: "top-1/4 -right-8", delay: "0.5s" },
  { icon: Database, label: "APIs", position: "bottom-1/4 -left-8", delay: "1s" },
  { icon: Sparkles, label: "AI", position: "bottom-8 -right-4", delay: "1.5s" },
];

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center section-padding pt-24 md:pt-32 overflow-hidden">
      {/* Enhanced background with gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/40" />
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      
      <div className="container-narrow relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Status Badge - Enhanced */}
            <div 
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/80 backdrop-blur-sm px-4 py-2 text-sm shadow-lg shadow-primary/5 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
              <span className="text-muted-foreground font-medium">Available for opportunities</span>
            </div>

            {/* Headline - Enhanced with gradient text */}
            <div className="space-y-5">
              <h1 
                className="heading-xl animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="text-foreground">Hi, I'm </span>
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease-in-out_infinite]">
                  Venkat Pasalapudi
                </span>
              </h1>
              <p 
                className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-xl animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                Software Developer specializing in{" "}
                <span className="text-foreground font-medium">API development</span>,{" "}
                <span className="text-foreground font-medium">full-stack applications</span>, and{" "}
                <span className="text-foreground font-medium">cloud deployment</span>. 
                Building production-ready systems with AI-enabled features.
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div 
              className="flex flex-wrap gap-2 animate-fade-in"
              style={{ animationDelay: "0.35s" }}
            >
              {["Spring Boot", "AWS", "React", "LLM APIs"].map((tech) => (
                <span 
                  key={tech}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs - Enhanced with better styling */}
            <div 
              className="flex flex-wrap gap-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="bg-primary text-primary-foreground hover:bg-navy-light gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="gap-2 border-border hover:bg-secondary/80 backdrop-blur-sm hover:-translate-y-0.5 transition-all"
              >
                <Mail size={18} />
                Get in Touch
              </Button>
            </div>

            {/* Quick Stats - Enhanced with better visuals */}
            <div 
              className="flex flex-wrap gap-8 pt-6 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              {[
                { value: "3+", label: "Years Coding" },
                { value: "10+", label: "Tech Stacks" },
                { value: "5+", label: "Deployed Projects" },
              ].map((stat, i) => (
                <div key={stat.label} className="relative">
                  <div className="text-3xl font-bold bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                  {i < 2 && (
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 h-8 w-px bg-border hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Headshot Area - Enhanced with floating elements */}
          <div 
            className="relative flex justify-center lg:justify-end animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              {/* Animated ring */}
              <div className="absolute inset-0 -m-4 rounded-2xl border border-primary/20 animate-pulse" />
              <div className="absolute inset-0 -m-8 rounded-3xl border border-accent/10" />
              
              {/* Decorative gradient background */}
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-2xl" />
              
              {/* Headshot container - Enhanced */}
              <div className="relative h-72 w-72 md:h-80 md:w-80 lg:h-[420px] lg:w-[420px] rounded-2xl bg-gradient-to-br from-card via-secondary/50 to-muted border border-border/50 overflow-hidden shadow-2xl shadow-primary/10">
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent z-10" />
                
                {/* Headshot Image */}
                <img 
                  src={headshotImage} 
                  alt="Venkat Pasalapudi" 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating tech badges */}
              {floatingTech.map((tech, index) => (
                <div
                  key={tech.label}
                  className={`absolute ${tech.position} hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl bg-card/90 backdrop-blur-sm border border-border shadow-lg animate-float`}
                  style={{ 
                    animationDelay: tech.delay,
                    animationDuration: "3s",
                  }}
                >
                  <tech.icon size={16} className="text-primary" />
                  <span className="text-xs font-medium text-foreground">{tech.label}</span>
                </div>
              ))}

              {/* Corner decorations */}
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-accent opacity-60" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-xl bg-gradient-to-br from-accent to-primary opacity-40" />
              <div className="absolute top-1/2 -right-6 w-3 h-12 rounded-full bg-primary/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
}
