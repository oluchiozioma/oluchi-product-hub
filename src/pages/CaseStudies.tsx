import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    id: "paystro",
    title: "Paystro",
    subtitle: "Cross-Border Payments & Transaction Platform",
    category: "Fintech Product Management",
    role: "Product Manager",
    summary: "Owned strategy for structuring product documentation and transaction flow visibility across onboarding, KYC, and payment experiences, supporting delivery of features linked to a 30% increase in user acquisition.",
    tags: ["Product Documentation", "Transaction Flows", "KYC", "Cross-Functional Collaboration", "Fintech"],
    metrics: ["30% User Acquisition Increase", "Product Wiki Built", "End-to-End Flow Documentation"],
    color: "from-cream to-sage-light/30",
  },
  {
    id: "skinsense",
    title: "SkinSense",
    subtitle: "AI-Powered Smartwatch Skin Health Companion",
    category: "End-to-End Product Development",
    role: "Product Manager",
    summary: "Designed an AI-driven smartwatch companion app to help users monitor and improve their skin health through personalized insights, environmental tracking, and health platform integrations.",
    tags: ["User Research", "Prioritisation", "PRD", "MVP Definition"],
    metrics: ["6 Epics defined", "19 User stories written"],
    color: "from-cream to-sage-light/30",
  },
  {
    id: "gartner-ben",
    title: "Gartner – Black Employee Network",
    subtitle: "UK Launch",
    category: "Employee Community Platform",
    role: "UK Programme Lead",
    timeline: "Oct 2024 – Dec 2025",
    summary: "Launching an employee community network to foster engagement, belonging, and professional growth for Black and ethnic minority associates and allies at Gartner.",
    tags: ["User Research", "Persona Development", "MVP Design", "Cross-Functional Collaboration"],
    metrics: ["80+ Active Members", "75% Engagement Lift", "15 mo Duration", "50+ Interviews"],
    color: "from-cream to-sage-light/30",
  },
  {
    id: "talent-development",
    title: "Scaling Sales Performance: Internal Platform for Associate Onboarding & Productivity",
    category: "Internal Operations Platform",
    role: "Product Owner",
    summary: "Led cross-functional discovery and delivered a scalable internal system for associate development, achieving 65% conversion improvement and $1M+ pipeline generated.",
    tags: ["Discovery", "Systems Design", "Cross-Functional Leadership", "Metrics"],
    metrics: ["65% Conversion Lift", "4-Week Ramp Reduction", "20% Productivity Increase"],
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
                      <h2 className="font-display text-3xl md:text-4xl text-foreground mb-1 group-hover:text-primary transition-colors">
                        {study.title}
                      </h2>
                      {'subtitle' in study && study.subtitle && (
                        <p className="font-display text-xl text-muted-foreground italic mb-2">
                          {study.subtitle}
                        </p>
                      )}
                      <p className="text-primary font-medium text-sm mb-1">
                        {study.category}
                      </p>
                      {'timeline' in study && study.timeline && (
                        <p className="text-xs text-muted-foreground mb-3">
                          {study.timeline}
                        </p>
                      )}
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
