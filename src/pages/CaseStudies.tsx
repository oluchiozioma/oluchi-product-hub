import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    id: "skinsense",
    title: "SkinSense",
    subtitle: "AI-Powered Smartwatch Skin Health Companion",
    role: "Product Manager",
    status: "MVP-ready with 18-month roadmap",
    description: "Designed an AI-driven smartwatch companion app to help users monitor and improve their skin health through personalised insights and HealthKit integrations.",
    tags: ["User Research", "PRD", "Roadmap", "AI/ML", "HealthKit"],
    color: "from-sage/20 to-sage-light/40",
    metrics: ["19 User Stories", "6 Epics", "6 P0 Features"],
  },
  {
    id: "gartner-ben",
    title: "Gartner BEN Redesign",
    subtitle: "Community Engagement Platform",
    role: "UK Programme Lead",
    status: "25% engagement improvement",
    description: "Led a product-led initiative to redesign the Gartner BEN community platform, conducting discovery across 5 teams and implementing a new workflow that significantly improved user engagement.",
    tags: ["Journey Mapping", "Discovery", "MVP", "Stakeholders", "Community"],
    color: "from-primary/10 to-sage-light/30",
    metrics: ["5 Teams", "3 Problem Themes", "25% Engagement Lift"],
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
                      <p className="text-muted-foreground font-medium text-lg mb-4">
                        {study.subtitle}
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {study.description}
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
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-primary font-medium">
                          {study.status}
                        </span>
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
