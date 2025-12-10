import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const experiences = [
  "3+ years in tech sales leadership and senior account management",
  "Deep expertise in user-focused product thinking",
  "Cross-functional team collaboration and stakeholder management",
  "Hands-on product experience: user research, story writing, journey mapping",
  "MVP definition and prioritisation using RICE & MoSCoW frameworks",
  "KPI setting and data-driven decision making",
];

const values = [
  {
    title: "User-Centric",
    description: "Every decision starts with understanding the user's needs, pain points, and goals.",
  },
  {
    title: "Data-Informed",
    description: "I balance intuition with data, using insights to validate hypotheses and measure success.",
  },
  {
    title: "Outcome-Focused",
    description: "I care about impact over output—building the right things, not just building things right.",
  },
  {
    title: "Collaborative",
    description: "Great products come from great teams. I thrive in cross-functional environments.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-narrow mx-auto">
          <div className="max-w-3xl">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-6">
              About Me
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-8">
              Turning user insights into products that matter.
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              I'm a product manager who believes that the best products are built 
              at the intersection of deep user empathy, business viability, and 
              technical possibility.
            </p>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="section-padding pt-0">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                My Journey
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My path to product management began in tech sales, where I spent 
                  over three years leading teams and managing senior accounts. This 
                  experience gave me a unique perspective on what customers truly 
                  need—and the gap between what they ask for and what actually solves 
                  their problems.
                </p>
                <p>
                  Working closely with product teams, I found myself increasingly 
                  drawn to the challenge of shaping solutions rather than just 
                  selling them. I started contributing to discovery sessions, 
                  advocating for user needs, and eventually leading product 
                  initiatives within my role.
                </p>
                <p>
                  Today, I bring this blend of commercial awareness and product 
                  thinking to everything I do. I'm particularly passionate about 
                  products at the intersection of behaviour and technology—tools 
                  that don't just function, but genuinely improve people's lives.
                </p>
              </div>
            </div>

            <div className="bg-sage-light rounded-2xl p-8 md:p-10 h-fit">
              <h3 className="font-display text-2xl text-foreground mb-6">
                What I Bring
              </h3>
              <ul className="space-y-4">
                {experiences.map((exp) => (
                  <li key={exp} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-foreground/80">{exp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card">
        <div className="container-narrow mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-12 text-center">
            How I Work
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-background rounded-xl p-6 hover-lift"
              >
                <h3 className="font-display text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            See My Work in Action
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Explore my case studies to see how I've applied product thinking 
            to real challenges.
          </p>
          <Button variant="hero" asChild>
            <Link to="/case-studies">
              View Case Studies
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
