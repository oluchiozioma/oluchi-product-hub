import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    id: "skinsense",
    title: "SkinSense",
    subtitle: "AI-Powered Smartwatch Skin Health Companion",
    descriptor: "Designed an AI-driven smartwatch companion app to help users monitor and improve their skin health through personalized insights, environmental tracking, and health platform integrations.",
    problem: "Millions of people struggle with skin health issues but lack accessible, personalised tools to track and understand their skin.",
    role: "Product Manager leading end-to-end product development from 0 to MVP.",
    highlights: [
      "Conducted qualitative and quantitative user research to uncover unmet needs",
      "Defined MVP scope using 6 epics and 19 user stories",
      "Applied RICE prioritisation to focus on highest-impact features",
      "Delivered a structured PRD to guide cross-functional execution"
    ],
    impact: "6 Epics defined · 19 User stories written",
  },
  {
    id: "gartner-ben",
    title: "Gartner – Black Employee Network",
    subtitle: "UK Launch",
    descriptor: "Launching an employee community network to foster engagement, belonging, and professional growth for Black and ethnic minority associates and allies at Gartner.",
    problem: "London associates lacked a formal community to connect, grow, and advocate for one another—missing opportunities for mentorship, networking, and career advancement.",
    role: "UK Programme Lead applying product thinking to community platform development: discovery, persona definition, MVP delivery, and cross-functional collaboration.",
    highlights: [
      "Conducted 50+ stakeholder interviews and surveys to understand needs and barriers",
      "Developed representative personas to guide community design and programming",
      "Designed and launched MVP community offerings with quarterly events and mentorship",
      "Secured funding and leadership buy-in through data-informed proposals"
    ],
    impact: "80+ active members, 75% engagement lift",
  },
  {
    id: "talent-development",
    title: "Scaling Sales Performance: Internal Platform for Associate Onboarding & Productivity",
    descriptor: "Cross-functional product initiative to design and optimize an internal system for early-career sales associate development, reducing ramp time and driving measurable productivity gains at Gartner.",
    problem: "Early-career sales associates faced fragmented onboarding experiences, limited performance visibility, and inconsistent coaching frameworks—resulting in 8-week ramp times and 35% lower conversion rates compared to tenured reps.",
    role: "Product Owner & Cross-Functional Lead: Led discovery across 3 regions, defined success metrics, designed scalable workflows and coaching protocols, and acted as voice of the user to senior leadership.",
    highlights: [
      "Led discovery with 20+ user research sessions to map pain points and identify systemic friction",
      "Designed scalable onboarding workflow with milestone-based progression and real-time performance visibility",
      "Implemented data-driven incentive system and structured coaching framework with feedback loops",
      "Delivered 65% improvement in conversion rates and reduced ramp time from 8 weeks to 4 weeks"
    ],
    impact: "65% conversion improvement, 20% productivity increase, $1M+ pipeline generated",
  },
  {
    id: "paystro",
    title: "Paystro",
    subtitle: "Cross-Border Payments & Transaction Platform",
    descriptor: "Owned the strategy and execution for structuring product documentation and transaction flow visibility across onboarding, KYC, and payment experiences within a fintech platform, enabling smoother cross-team collaboration and supporting delivery of features aimed at improving user acquisition.",
    problem: "As product complexity grew, teams lacked clear documentation and visibility into transaction flows, payment eligibility rules, and operational processes, creating inefficiencies in delivering and supporting new features aimed at increasing user acquisition.",
    role: "Product Manager owning product documentation and flow visibility strategy while supporting requirements definition and optimisation of onboarding and payment experiences across cross-functional teams.",
    highlights: [
      "Owned strategy for documenting onboarding, KYC, money transfer, bill payment, and marketplace transaction flows",
      "Defined payment method eligibility rules based on location and compliance requirements",
      "Built internal product wiki improving product knowledge sharing across teams",
      "Documented end-to-end transaction lifecycle flows supporting engineering and operations delivery",
      "Identified improvement opportunities and edge cases across onboarding and payment journeys"
    ],
    impact: "Improved internal product clarity, 30% increase in user acquisition",
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
                  {/* Badge */}
                  {'badge' in study && study.badge && (
                    <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded mb-2">
                      {String(study.badge)}
                    </span>
                  )}
                  
                  {/* Title */}
                  <h3 className="font-display text-xl md:text-2xl text-foreground mb-1 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  
                  {/* Subtitle (if available) */}
                  {'subtitle' in study && (
                    <p className="font-display text-base text-muted-foreground italic mb-2">
                      {study.subtitle}
                    </p>
                  )}
                  
                  {/* Descriptor (if available) */}
                  {'descriptor' in study && (
                    <p className="text-muted-foreground text-sm mb-4">
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
