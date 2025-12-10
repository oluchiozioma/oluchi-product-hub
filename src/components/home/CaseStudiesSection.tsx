import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    id: "skinsense",
    title: "SkinSense",
    subtitle: "AI-Powered Smartwatch Skin Health Companion",
    role: "Product Manager",
    status: "19 User Stories • 6 Epics • 6 P0 Features",
    description: "Designed an AI-driven skin health companion app that helps users monitor, understand, and improve their skin health through personalised insights, environmental tracking, and smartwatch integrations. Defined the product strategy, led user research, created all requirements, and collaborated with engineers to shape the MVP.",
    tags: ["User Research", "PRD", "RICE Prioritisation", "AI/ML", "Health Integrations", "Journey Mapping"],
    color: "from-sage/20 to-sage-light/40",
  },
  {
    id: "gartner-ben",
    title: "Gartner BEN Redesign",
    subtitle: "Community Engagement Platform",
    role: "Product Programme Lead",
    status: "75% Engagement Improvement • 80+ Active Members",
    description: "Led a product-led initiative to redesign the Gartner BEN community platform, driving meaningful improvements in inclusion, engagement, and operational efficiency for Black and ethnic minority associates in London. Defined user needs through research, delivered high-impact campaigns, and partnered cross-functionally to launch a successful MVP that grew rapidly.",
    tags: ["Discovery", "Journey Mapping", "MVP Delivery", "Stakeholder Management", "Personas", "Community Engagement"],
    color: "from-primary/10 to-sage-light/30",
  },
];

export function CaseStudiesSection() {
  return (
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
              Selected Work
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
              Case Studies
            </h2>
          </div>
          <Button variant="ghost" className="mt-6 md:mt-0 group" asChild>
            <Link to="/case-studies">
              View All Work
              <ArrowUpRight size={18} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-8">
          {caseStudies.map((study, index) => (
            <Link
              key={study.id}
              to={`/case-studies/${study.id}`}
              className="group block"
            >
              <article className={`bg-gradient-to-br ${study.color} rounded-2xl p-8 md:p-12 hover-lift`}>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-muted-foreground text-sm">
                        {study.role}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground font-medium mb-4">
                      {study.subtitle}
                    </p>
                    <p className="text-muted-foreground text-sm max-w-xl leading-relaxed">
                      {study.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
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
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-primary font-medium">
                      {study.status}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center group-hover:bg-primary transition-colors">
                      <ArrowUpRight className="text-background" size={20} />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
