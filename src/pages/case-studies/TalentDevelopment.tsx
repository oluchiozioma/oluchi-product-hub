import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Target, Users, BarChart3, Lightbulb, Settings, Brain } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const keyMetrics = [
  { value: "65%", label: "Conversion Improvement" },
  { value: "4 Weeks", label: "Ramp Reduction" },
  { value: "$1M+", label: "Pipeline Generated" },
  { value: "3", label: "Regions" },
];

const discoveryMethods = [
  {
    title: "User Research",
    description: "Conducted 20+ 1:1 sessions with associates and front-line sellers across 3 regions to map the current-state journey and identify pain points.",
    icon: Users,
  },
  {
    title: "Performance Analysis",
    description: "Analyzed performance data across cohorts to identify pipeline bottlenecks and conversion drop-off points.",
    icon: BarChart3,
  },
  {
    title: "Persona Development",
    description: "Created user personas for different learning styles and experience levels to inform solution design.",
    icon: Target,
  },
  {
    title: "Cross-Functional Workshops",
    description: "Led alignment workshops with Business Development, Account Management, and Sales Enablement teams to prioritize initiatives.",
    icon: Settings,
  },
];

const insights = [
  "Lack of real-time feedback loops and unclear success criteria caused 60% of early-stage struggles",
  "Fragmented onboarding experiences led to 8-week ramp times and unpredictable pipeline contribution",
  "35% lower conversion rates compared to tenured reps due to inconsistent coaching frameworks",
  "No standardised performance visibility or accountability mechanisms existed",
];

const solutions = [
  "Scalable onboarding workflow with milestone-based progression",
  "Real-time performance visibility dashboard for transparency and accountability",
  "Structured coaching framework with feedback loops",
  "Data-driven incentive system tied to leading and lagging indicators",
  "Iterative feedback cycles: weekly retrospectives with users, bi-weekly stakeholder check-ins",
];

const skills = [
  "Discovery & User Research",
  "Systems Design",
  "Cross-Functional Leadership",
  "Prioritisation Frameworks",
  "Stakeholder Alignment",
  "Metrics & Experimentation",
];

const focusTags = [
  "Discovery",
  "Systems Thinking",
  "Cross-Functional Delivery",
  "Iteration & Experimentation",
  "Measurable Impact",
];

const TalentDevelopment = () => {
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
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Users className="text-primary" size={24} />
              </div>
              <p className="text-primary font-medium tracking-wider uppercase text-sm">
                Product Owner & Cross-Functional Lead
              </p>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Scaling Sales Performance: Internal Platform for Associate Onboarding & Productivity
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-3xl">
              Cross-functional product initiative to design and optimize an internal system for early-career 
              sales associate development, reducing ramp time and driving measurable productivity gains at Gartner.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {keyMetrics.map((metric) => (
                <div key={metric.label} className="text-center p-4 bg-card rounded-lg">
                  <p className="font-display text-2xl text-primary">{metric.value}</p>
                  <p className="text-xs text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Problem
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Early-career sales associates faced fragmented onboarding experiences, limited performance visibility, 
              and inconsistent coaching frameworks—resulting in 8-week ramp times, unpredictable pipeline contribution, 
              and 35% lower conversion rates compared to tenured reps. Leadership needed a scalable solution to 
              accelerate time-to-productivity while maintaining quality.
            </p>
          </div>
        </div>
      </section>

      {/* Discovery */}
      <section className="section-padding bg-card">
        <div className="container-narrow mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-12">
            Discovery
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-3xl">
            Led continuous user research through 20+ sessions with associates and front-line sellers to map 
            the current-state journey and identify systemic friction points across 3 regions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {discoveryMethods.map((method) => (
              <div key={method.title} className="bg-background rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <method.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{method.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Insights
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Through discovery, I uncovered several key themes that were contributing to 
                slow ramp times and inconsistent productivity across the team.
              </p>
            </div>
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="text-amber-600" size={16} />
                  </div>
                  <p className="text-foreground">{insight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section-padding bg-card">
        <div className="container-narrow mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            Solution
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-3xl">
            I designed and implemented a structured enablement program that addressed each of the 
            identified pain points through systematic improvements.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-background rounded-xl">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                <p className="text-foreground">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Role */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              My Role
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Led discovery across 3 regions with 10+ associates and sales stakeholders to identify systemic friction points. 
              Defined success metrics in partnership with sales leadership, designed scalable workflows and coaching protocols, 
              and acted as voice of the user to senior leadership, advocating for resource allocation and process improvements.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding bg-primary/5">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            Impact
          </h2>
          <div className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto space-y-4">
            <p><span className="text-primary font-semibold">65%</span> improvement in conversion rates through iterative strategy optimization</p>
            <p><span className="text-primary font-semibold">20%</span> productivity increase across team measured quarter-over-quarter</p>
            <p>Reduced ramp time by <span className="text-primary font-semibold">4 weeks</span> (from 8 weeks to 4 weeks)</p>
            <p><span className="text-primary font-semibold">$1M+</span> in pipeline generated from improved outreach effectiveness</p>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="section-padding">
        <div className="container-narrow mx-auto text-center">
          <Brain className="mx-auto text-primary mb-6" size={48} />
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            Summary
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            This case study demonstrates product management applied to operational systems: conducting discovery 
            to understand user needs, defining success metrics with stakeholders, prioritizing competing initiatives, 
            iterating based on data, and delivering measurable business impact—all core PM competencies applied 
            to an internal platform context.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {focusTags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-card text-muted-foreground rounded-full text-sm border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section-padding bg-card">
        <div className="container-narrow mx-auto">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Button variant="outline" asChild>
              <Link to="/case-studies">
                <ArrowLeft size={16} className="mr-2" />
                All Case Studies
              </Link>
            </Button>
            <Button asChild>
              <Link to="/case-studies/skinsense">
                Next: SkinSense
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TalentDevelopment;
