import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, TrendingUp, Users, BarChart3, MessageSquare } from "lucide-react";

const processSteps = [
  {
    title: "Problem Definition",
    description: "Identified gaps in the existing sales development programme through stakeholder feedback and performance data analysis.",
    icon: MessageSquare,
  },
  {
    title: "User Interviews",
    description: "Conducted interviews with learners and facilitators to understand pain points and success factors.",
    icon: Users,
  },
  {
    title: "Readiness Framework",
    description: "Developed a new competency-based readiness framework to track and measure learner progress.",
    icon: CheckCircle2,
  },
  {
    title: "Data Dashboards",
    description: "Built live dashboards to provide real-time visibility into learner progression and programme health.",
    icon: BarChart3,
  },
];

const outcomes = [
  "10% improvement in learner progression",
  "New readiness framework adopted company-wide",
  "Live dashboards for real-time tracking",
  "Continuous feedback loop established",
];

export default function StarlingBank() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-32 md:pt-40 bg-gradient-to-br from-sage-light/40 to-primary/10">
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
                Senior Account Management Specialist
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
                Starling Bank SDP
              </h1>
              <p className="font-display text-xl md:text-2xl text-muted-foreground italic mb-8">
                Sales Development Programme Redesign
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Redesigned the sales development programme journey through user 
                interviews and a new readiness framework, implementing data 
                dashboards and feedback loops for continuous improvement.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-6 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <TrendingUp size={32} className="text-primary" />
                <div>
                  <p className="font-display text-3xl text-primary">10%</p>
                  <p className="text-sm text-muted-foreground">Learner Progression Improvement</p>
                </div>
              </div>
              <div className="mt-4">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  Implemented & Live
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              The Challenge
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The existing sales development programme lacked visibility into 
              learner progress and had inconsistent outcomes. There was no 
              standardised way to measure readiness or identify learners who 
              needed additional support. Programme facilitators relied on 
              anecdotal feedback rather than data-driven insights.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-card">
        <div className="container-narrow mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-12">
            The Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.title} className="bg-background rounded-xl p-6 hover-lift">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-primary font-display text-xl">0{index + 1}</span>
                    <IconComponent className="text-primary" size={20} />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Redesign */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Journey Redesign
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Mapped the entire learner journey from onboarding to certification, 
                identifying key milestones and opportunities for intervention. 
                The new design introduced:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-0.5" size={18} />
                  <span className="text-foreground/80">Clear competency milestones</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-0.5" size={18} />
                  <span className="text-foreground/80">Regular check-in touchpoints</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-0.5" size={18} />
                  <span className="text-foreground/80">Automated progress tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-0.5" size={18} />
                  <span className="text-foreground/80">Peer support mechanisms</span>
                </li>
              </ul>
            </div>
            <div className="bg-sage-light rounded-2xl p-8">
              <h3 className="font-display text-xl text-foreground mb-6">
                Feedback Loop System
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Implemented a continuous feedback loop to capture learner 
                sentiment and identify programme improvements in real-time.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <span className="text-sm text-foreground/80">Weekly pulse surveys</span>
                  <span className="text-primary text-sm font-medium">Automated</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <span className="text-sm text-foreground/80">Manager feedback</span>
                  <span className="text-primary text-sm font-medium">Bi-weekly</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <span className="text-sm text-foreground/80">Programme retrospectives</span>
                  <span className="text-primary text-sm font-medium">Monthly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-sage text-primary-foreground">
        <div className="container-narrow mx-auto">
          <h2 className="font-display text-3xl md:text-4xl mb-12 text-center">
            Outcomes
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {outcomes.map((outcome) => (
              <div key={outcome} className="bg-primary-foreground/10 rounded-xl p-6 text-center">
                <CheckCircle2 className="mx-auto mb-3" size={24} />
                <p className="text-sm">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section-padding">
        <div className="container-narrow mx-auto flex justify-between">
          <Button variant="ghost" asChild>
            <Link to="/case-studies/gartner-ben">
              <ArrowLeft size={16} className="mr-2" />
              Previous: Gartner BEN
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/case-studies">
              All Case Studies
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
