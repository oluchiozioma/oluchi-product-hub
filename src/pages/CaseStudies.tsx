import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowUpRight, Users, TrendingUp, Layers, Target, Calendar, Lightbulb, UserCheck } from "lucide-react";

const caseStudies = [
  {
    id: "skinsense",
    title: "SkinSense",
    role: "Product Manager",
    icon: Target,
    description: "Designed an AI-driven smartwatch companion app to help users monitor and improve their skin health through personalised insights and HealthKit integrations.",
    color: "from-cream to-sage-light/30",
    metrics: [
      { value: "19", label: "User Stories" },
      { value: "6", label: "Epics" },
      { value: "6", label: "Features" },
    ],
  },
  {
    id: "gartner-ben",
    title: "Gartner BEN Redesign",
    role: "UK Programme Lead",
    icon: Users,
    description: "Led a product-led initiative to redesign the Gartner BEN community platform, conducting discovery across 5 teams and implementing a new workflow that significantly improved user engagement.",
    color: "from-cream to-sage-light/30",
    metrics: [
      { value: "5", label: "Teams" },
      { value: "75%", label: "Engagement Lift" },
      { value: "3", label: "Problem Themes" },
      { value: "100+", label: "Members" },
    ],
  },
  {
    id: "talent-development",
    title: "Talent Development & Productivity Optimisation",
    role: "Sales Development Manager",
    icon: UserCheck,
    description: "As a Sales Development Manager, I led a team of early-career associates and built a data-informed program to improve onboarding consistency, productivity, and skill development.",
    color: "from-cream to-sage-light/30",
    metrics: [
      { value: "10+", label: "Associates" },
      { value: "20%", label: "Productivity Lift" },
      { value: "5", label: "Key Initiatives" },
    ],
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
            {caseStudies.map((study) => {
              const IconComponent = study.icon;
              return (
                <Link
                  key={study.id}
                  to={`/case-studies/${study.id}`}
                  className="group block"
                >
                  <article className={`bg-gradient-to-br ${study.color} rounded-2xl p-8 md:p-12 hover-lift`}>
                    {/* Role Badge */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-sage/30 flex items-center justify-center">
                        <IconComponent className="text-foreground/70" size={20} />
                      </div>
                      <span className="text-primary font-medium tracking-wider uppercase text-sm">
                        {study.role}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 group-hover:text-primary transition-colors">
                      {study.title}
                    </h2>

                    {/* Description */}
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-3xl">
                      {study.description}
                    </p>

                    {/* Metrics Grid */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      {study.metrics.map((metric) => (
                        <div 
                          key={metric.label} 
                          className="bg-background/70 rounded-xl px-6 py-4 text-center min-w-[100px]"
                        >
                          <p className="font-display text-2xl md:text-3xl text-foreground mb-1">
                            {metric.value}
                          </p>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-end">
                      <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center group-hover:bg-primary transition-colors">
                        <ArrowUpRight className="text-background" size={20} />
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
