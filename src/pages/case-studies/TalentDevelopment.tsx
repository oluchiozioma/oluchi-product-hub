import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Target, Users, BarChart3, Lightbulb, Settings, Brain } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const keyMetrics = [
  { value: "10+", label: "Associates" },
  { value: "20%", label: "Productivity Lift" },
  { value: "1", label: "Quarter" },
  { value: "5", label: "Key Initiatives" },
];

const discoveryMethods = [
  {
    title: "Interviews",
    description: "Conducted one-on-one interviews with associates and sales leaders to understand pain points and challenges.",
    icon: Users,
  },
  {
    title: "Journey Mapping",
    description: "Mapped the associate onboarding and ramp journey to identify friction points and drop-off moments.",
    icon: Target,
  },
  {
    title: "Workflow Audits",
    description: "Audited existing workflows and processes to uncover inefficiencies and gaps in the enablement program.",
    icon: Settings,
  },
  {
    title: "Metrics Analysis",
    description: "Analysed performance data to establish baselines and identify patterns in productivity and ramp time.",
    icon: BarChart3,
  },
];

const insights = [
  "Associates struggled to prioritise outreach tasks effectively",
  "Coaching was reactive rather than structured and proactive",
  "Performance data was fragmented across multiple systems",
  "No standardised productivity framework existed for measurement",
];

const solutions = [
  "Standardised onboarding workflow with clear milestones",
  "Weekly coaching framework with structured feedback loops",
  "Personalised performance dashboards for visibility",
  "Outreach strategy experiments to optimise approaches",
  "Feedback loops with sales leaders for continuous improvement",
];

const skills = [
  "User research",
  "Workflow design",
  "Data analysis",
  "Experimentation",
  "Stakeholder alignment",
  "Coaching and enablement",
];

const focusTags = [
  "User research",
  "Problem definition",
  "Workflow design",
  "Experimentation",
  "Metrics driven decision making",
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
                Sales Development Manager
              </p>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Talent Development & Productivity Optimisation
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-3xl">
              As a Sales Development Manager, I led a team of early-career associates and built a 
              data-informed program to improve onboarding consistency, productivity, and skill development.
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
              Onboarding was inconsistent, performance visibility was fragmented, and coaching lacked 
              structure—resulting in slow ramp times and uneven productivity across the team.
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
            I conducted interviews, journey mapping, workflow audits, and metrics analysis to identify 
            bottlenecks and pain points in the existing enablement process.
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
              I owned discovery, alignment, workflow design, experimentation, and delivery—acting 
              as the product owner for the improvement program.
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
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Reduced ramp time and improved team productivity by <span className="text-primary font-semibold">20%</span> within 
            one quarter, while strengthening alignment with sales leaders.
          </p>
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
            This project demonstrates my ability to apply product thinking to complex operational 
            problems by identifying root causes, validating assumptions, and delivering structured 
            solutions. By treating associate onboarding, productivity, and coaching as a problem 
            space, I used discovery, metrics, and iteration to design and implement a scalable 
            enablement program. The result was improved performance visibility, faster ramp times, 
            and stronger alignment between associates and frontline sales leadership.
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
