import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    id: "skinsense",
    title: "SkinSense",
    descriptor: "AI-powered smartwatch companion for proactive skin health monitoring",
    problem: "Users lacked accessible, personalised tools to understand and track skin health.",
    role: "Product Manager leading end-to-end discovery, MVP definition, and PRD delivery.",
    highlights: [
      "User research through focus groups and surveys",
      "6 epics and 19 user stories defining MVP scope",
      "RICE prioritisation to identify highest-impact features"
    ],
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
    id: "talent-development",
    title: "Talent Development & Productivity Optimisation",
    problem: "New sales associates lacked a consistent onboarding experience, performance visibility, and structured coaching—leading to slow ramp times and uneven productivity.",
    role: "Built a data-informed enablement and coaching program for 10+ early-career associates, including defining problem areas through discovery, aligning with stakeholders, creating workflows, and implementing improvements that increased productivity and engagement.",
    skills: ["User Research", "Workflow Design", "Process Optimisation", "Metrics Definition", "Stakeholder Alignment", "Experimentation"],
    impact: "20% Productivity Increase",
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
              to={`/case-studies/${study.id}`}
              className="group block"
            >
              <article className="h-full bg-background rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/30 hover:shadow-elegant transition-all duration-300">
                <div className="flex flex-col h-full">
                  {/* Title */}
                  <h3 className="font-display text-xl md:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  
                  {/* Descriptor (if available) */}
                  {'descriptor' in study && (
                    <p className="text-muted-foreground text-sm mb-4 italic">
                      {study.descriptor}
                    </p>
                  )}
                  
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
                  
                  {/* Key Highlights or Skills Used */}
                  <div className="mb-5 flex-1">
                    {'highlights' in study ? (
                      <>
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Key Highlights</p>
                        <ul className="space-y-1.5">
                          {study.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <>
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
                      </>
                    )}
                  </div>
                  
                  {/* Impact (only for cards with impact) */}
                  {'impact' in study && (
                    <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Impact</p>
                        <p className="text-foreground font-bold text-sm">
                          {study.impact}
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <ArrowUpRight className="text-primary group-hover:text-background transition-colors" size={18} />
                      </div>
                    </div>
                  )}
                  
                  {/* Arrow for highlight-based cards */}
                  {'highlights' in study && (
                    <div className="pt-4 border-t border-border/50 flex justify-end">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <ArrowUpRight className="text-primary group-hover:text-background transition-colors" size={18} />
                      </div>
                    </div>
                  )}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
