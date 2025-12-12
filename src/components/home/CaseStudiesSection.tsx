import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    id: "skinsense",
    title: "SkinSense",
    problem: "Users lacked accessible, personalised guidance to understand and manage skin conditions proactively.",
    role: "Owned end-to-end product discovery, defined MVP scope, and created PRD with prioritised requirements.",
    skills: ["User Research", "Journey Mapping", "RICE Prioritisation", "PRD Creation", "MVP Scoping"],
    impact: "19 User Stories • 6 P0 Features",
  },
  {
    id: "gartner-ben",
    title: "Gartner BEN Redesign",
    problem: "Black and ethnic minority associates had no dedicated platform for community connection and career growth.",
    role: "Led discovery research, defined personas, and delivered community engagement MVP through cross-functional collaboration.",
    skills: ["Discovery", "Persona Development", "Stakeholder Management", "MVP Delivery", "Metrics Definition"],
    impact: "75% Engagement Increase",
  },
  {
    id: "coming-soon",
    title: "Enterprise Analytics Dashboard",
    problem: "Sales teams wasted hours manually compiling pipeline data from fragmented sources.",
    role: "Shaped requirements and user flows for a unified dashboard consolidating key performance metrics.",
    skills: ["Requirements Gathering", "User Flows", "Data Visualisation", "Stakeholder Alignment"],
    impact: "Coming Soon",
  },
];

export function CaseStudiesSection() {
  return (
    <section className="section-padding bg-card/50">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Selected Work
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            My Product Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects where I used product thinking, discovery, and collaboration to create meaningful outcomes.
          </p>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mb-10">
          <Button variant="ghost" className="group" asChild>
            <Link to="/case-studies">
              View All Case Studies
              <ArrowUpRight size={18} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Case Study Cards */}
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
                  <h3 className="font-display text-xl md:text-2xl text-foreground mb-5 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  
                  {/* Problem */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">Problem</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {study.problem}
                    </p>
                  </div>
                  
                  {/* My Role */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">My Role</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {study.role}
                    </p>
                  </div>
                  
                  {/* Skills Used */}
                  <div className="mb-5 flex-1">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Skills Used</p>
                    <div className="flex flex-wrap gap-1.5">
                      {study.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 bg-primary/10 rounded-full text-xs text-foreground/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Impact */}
                  <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Impact</p>
                      <p className="text-foreground font-bold text-sm">
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
