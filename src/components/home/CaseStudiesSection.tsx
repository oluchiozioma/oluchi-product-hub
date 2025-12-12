import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    id: "skinsense",
    title: "SkinSense",
    problem: "Millions struggle to understand and manage their skin conditions without accessible, personalised guidance.",
    contribution: "Led end-to-end product discovery, user research, and MVP definition for an AI-powered smartwatch skin health companion.",
    impact: "19 User Stories • 6 P0 Features Defined",
  },
  {
    id: "gartner-ben",
    title: "Gartner BEN Redesign",
    problem: "Black and ethnic minority associates lacked a dedicated community platform for meaningful connection and professional growth.",
    contribution: "Drove product-led initiative to redesign community engagement through research, personas, and cross-functional delivery.",
    impact: "75% Engagement Increase",
  },
  {
    id: "coming-soon",
    title: "Enterprise Analytics Dashboard",
    problem: "Sales teams spent hours manually compiling data from multiple sources to track pipeline performance.",
    contribution: "Shaped product requirements and user flows for a unified analytics dashboard consolidating key metrics.",
    impact: "Coming Soon",
  },
];

export function CaseStudiesSection() {
  return (
    <section className="section-padding bg-card/50">
      <div className="container-narrow mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
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

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              to={study.id === "coming-soon" ? "#" : `/case-studies/${study.id}`}
              className={`group block ${study.id === "coming-soon" ? "pointer-events-none" : ""}`}
            >
              <article className="h-full bg-background rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/30 hover:shadow-elegant transition-all duration-300">
                <div className="flex flex-col h-full">
                  {/* Title */}
                  <h3 className="font-display text-xl md:text-2xl text-foreground mb-4 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  
                  {/* Problem */}
                  <div className="mb-4">
                    <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">Problem</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {study.problem}
                    </p>
                  </div>
                  
                  {/* Contribution */}
                  <div className="mb-6 flex-1">
                    <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">My Role</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {study.contribution}
                    </p>
                  </div>
                  
                  {/* Impact */}
                  <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Impact</p>
                      <p className="text-foreground font-semibold text-sm">
                        {study.impact}
                      </p>
                    </div>
                    {study.id !== "coming-soon" && (
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <ArrowUpRight className="text-primary group-hover:text-background transition-colors" size={18} />
                      </div>
                    )}
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
