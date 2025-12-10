import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";

const problemThemes = [
  "Fragmented communication across teams",
  "Low visibility into community activity",
  "Lack of structured engagement workflows",
];

const outcomes = [
  { metric: "25%", label: "Engagement Improvement" },
  { metric: "5", label: "Teams Aligned" },
  { metric: "New", label: "Community MVP Model" },
];

export default function GartnerBEN() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-32 md:pt-40 bg-gradient-to-br from-primary/10 to-sage-light/30">
        <div className="container-narrow mx-auto">
          <Button variant="ghost" size="sm" className="mb-8" asChild>
            <Link to="/case-studies">
              <ArrowLeft size={16} className="mr-2" />
              Back to Case Studies
            </Link>
          </Button>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
                Senior Account Manager | Product-Led Initiative
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
                Gartner BEN Redesign
              </h1>
              <p className="font-display text-xl md:text-2xl text-muted-foreground italic mb-8">
                Community Engagement Platform
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Led a product-led initiative to redesign the Gartner BEN community 
                platform, driving significant improvements in user engagement through 
                cross-functional discovery and user journey mapping.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-6">
              <h3 className="font-display text-lg mb-6 text-foreground">Impact</h3>
              <div className="space-y-4">
                {outcomes.map((outcome) => (
                  <div key={outcome.label} className="flex items-center gap-4 p-4 bg-sage-light/50 rounded-lg">
                    <span className="font-display text-2xl text-primary">{outcome.metric}</span>
                    <span className="text-sm text-foreground/80">{outcome.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Discovery Process
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Conducted extensive discovery across 5 different teams to understand 
              the current state of the BEN community platform, identifying pain 
              points, opportunities, and stakeholder needs.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-sage-light/50 rounded-xl p-6">
                <p className="font-display text-4xl text-primary mb-2">5</p>
                <p className="text-foreground font-medium">Teams Consulted</p>
                <p className="text-muted-foreground text-sm mt-2">
                  Cross-functional alignment across sales, customer success, 
                  product, engineering, and marketing.
                </p>
              </div>
              <div className="bg-sage-light/50 rounded-xl p-6">
                <p className="font-display text-4xl text-primary mb-2">12+</p>
                <p className="text-foreground font-medium">Stakeholder Interviews</p>
                <p className="text-muted-foreground text-sm mt-2">
                  In-depth conversations to understand workflows, challenges, 
                  and desired outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Themes */}
      <section className="section-padding bg-card">
        <div className="container-narrow mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-12">
            Problem Themes Identified
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {problemThemes.map((theme, index) => (
              <div key={theme} className="bg-background rounded-xl p-6 hover-lift">
                <span className="text-primary font-display text-2xl">0{index + 1}</span>
                <p className="text-foreground font-medium mt-4">{theme}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Journey Mapping */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                User Journey Mapping
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Created comprehensive user journey maps to visualise the current 
                and ideal states of community engagement. This helped identify 
                friction points and opportunities for improvement.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-0.5" size={18} />
                  <span className="text-foreground/80">Mapped 4 distinct user personas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-0.5" size={18} />
                  <span className="text-foreground/80">Identified 8 key touchpoints</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-0.5" size={18} />
                  <span className="text-foreground/80">Documented emotional journey states</span>
                </li>
              </ul>
            </div>
            <div className="bg-sage-light rounded-2xl p-8">
              <h3 className="font-display text-xl text-foreground mb-6">New Workflow Design</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Designed a streamlined engagement workflow that reduced friction 
                and provided clear pathways for community participation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-medium">1</div>
                  <span className="text-sm text-foreground/80">Simplified onboarding</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-medium">2</div>
                  <span className="text-sm text-foreground/80">Guided engagement paths</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-medium">3</div>
                  <span className="text-sm text-foreground/80">Recognition & rewards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-sage text-primary-foreground">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-6">
            Results
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <TrendingUp size={48} />
            <span className="font-display text-6xl md:text-7xl">25%</span>
          </div>
          <p className="font-display text-xl md:text-2xl mb-4">
            Engagement Improvement
          </p>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            The redesigned community platform and new MVP model delivered 
            measurable improvements in user engagement and satisfaction.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="section-padding">
        <div className="container-narrow mx-auto flex justify-between">
          <Button variant="ghost" asChild>
            <Link to="/case-studies/skinsense">
              <ArrowLeft size={16} className="mr-2" />
              Previous: SkinSense
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/case-studies/starling-bank">
              Next: Starling Bank
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
