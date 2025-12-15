import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    id: "skinsense",
    title: "SkinSense",
    descriptor: "AI-powered smartwatch companion for proactive skin health monitoring.",
    problem: "Millions of people struggle with skin health issues but lack accessible, personalised tools to track and understand their skin.",
    role: "Product Manager leading user research, MVP definition, prioritisation, and PRD delivery.",
    highlights: [
      "Conducted qualitative and quantitative user research to uncover unmet needs",
      "Defined MVP scope using 6 epics and 19 user stories",
      "Applied RICE prioritisation to focus on highest-impact features",
      "Delivered a structured PRD to guide cross-functional execution"
    ],
    impact: "Defined a validated MVP enabling personalised skin health insights and daily tracking.",
  },
  {
    id: "gartner-ben",
    title: "Gartner BEN Redesign",
    descriptor: "Internal community platform to support connection, career growth, and engagement for Black and ethnic minority associates at Gartner.",
    problem: "Black and ethnic minority associates had no dedicated platform for community connection and career growth.",
    role: "Product Manager leading discovery research, persona definition, and MVP delivery through cross-functional collaboration.",
    highlights: [
      "Conducted user interviews and stakeholder discovery research",
      "Defined personas and user journeys to guide solution design",
      "Delivered an MVP platform to support community engagement",
      "Partnered with engineering, design, and internal stakeholders to launch"
    ],
    impact: "75% engagement increase",
  },
  {
    id: "talent-development",
    title: "Talent Development & Productivity Optimisation",
    descriptor: "Operational system to improve onboarding, coaching effectiveness, and productivity for early-career sales associates at Gartner.",
    problem: "New sales associates lacked a consistent onboarding experience, performance visibility, and structured coaching—leading to slow ramp times and uneven productivity.",
    role: "Led discovery to identify performance gaps, defined success metrics, and designed scalable onboarding and coaching workflows in partnership with sales and enablement stakeholders.",
    highlights: [
      "Identified performance gaps through qualitative feedback and performance data",
      "Designed and iterated on onboarding and coaching workflows",
      "Aligned stakeholders across sales leadership and enablement",
      "Implemented improvements to increase productivity and engagement"
    ],
    impact: "20% productivity increase",
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
                  
                  {/* Key Highlights */}
                  <div className="mb-5 flex-1">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Key Highlights</p>
                    <ul className="space-y-1.5">
                      {study.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Impact */}
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
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
