import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    id: "skinsense",
    title: "SkinSense",
    category: "AI-Powered Consumer Health Product",
    role: "Product Manager",
    summary: "Led discovery, MVP definition, and PRD delivery for an AI smartwatch companion enabling personalised skin health insights.",
    tags: ["User Research", "Prioritisation", "PRD", "MVP Definition"],
    metrics: ["6 Epics", "19 User Stories"],
    color: "from-cream to-sage-light/30",
  },
  {
    id: "gartner-ben",
    title: "Gartner BEN Redesign",
    category: "Internal Community Platform",
    role: "Product Manager",
    summary: "Redesigned an internal community platform through cross-functional discovery, delivering an MVP that drove 75% engagement increase.",
    tags: ["Discovery", "Journey Mapping", "Stakeholder Alignment", "MVP"],
    metrics: ["5 Teams", "75% Engagement Lift"],
    color: "from-cream to-sage-light/30",
  },
  {
    id: "talent-development",
    title: "Talent Development & Productivity Optimisation",
    category: "Operational System Design",
    role: "Sales Development Manager",
    summary: "Applied product thinking to design onboarding and coaching workflows, achieving 20% productivity improvement for early-career associates.",
    tags: ["Systems Thinking", "Workflow Design", "Stakeholder Alignment", "Metrics"],
    metrics: ["10+ Associates", "20% Productivity Lift"],
    color: "from-cream to-sage-light/30",
  },
];

export default function CaseStudies() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-narrow mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-6">
              Selected Work
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-8">
              Case Studies
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              A collection of product work showcasing my approach to discovery, 
              problem-solving, and building impactful solutions.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid gap-8">
            {caseStudies.map((study, index) => (
              <Link
                key={study.id}
                to={`/case-studies/${study.id}`}
                className="group block"
              >
                <article className={`bg-gradient-to-br ${study.color} rounded-2xl p-8 md:p-12 hover-lift`}>
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-primary font-display text-2xl">
                          0{index + 1}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {study.role}
                        </span>
                      </div>
                      <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2 group-hover:text-primary transition-colors">
                        {study.title}
                      </h2>
                      <p className="text-primary font-medium text-sm mb-2">
                        {study.category}
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {study.summary}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-background/60 rounded-full text-xs text-foreground/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="lg:w-64 flex flex-col justify-between">
                      <div className="space-y-3 mb-6">
                        {study.metrics.map((metric) => (
                          <div key={metric} className="bg-background/40 rounded-lg px-4 py-2">
                            <p className="text-sm text-foreground/80 font-medium">{metric}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-end">
                        <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center group-hover:bg-primary transition-colors">
                          <ArrowUpRight className="text-background" size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
