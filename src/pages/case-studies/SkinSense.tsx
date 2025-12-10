import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import skinsenseLanding from "@/assets/skinsense-landing.png";
import skinsenseLogo from "@/assets/skinsense-logo.png";
import skinsenseAppPreview from "@/assets/skinsense-app-preview.png";

const keyMetrics = [
  { label: "User Stories", value: "19" },
  { label: "Epics", value: "6" },
  { label: "P0 Features", value: "6" },
];

const deliverables = [
  "Product Requirements Document (PRD)",
  "Interactive Prototype",
  "Interactive Prototype",
  "RICE Prioritisation Model",
  "User Personas & Journey Maps",
  "Competitive Analysis",
];

const mvpFeatures = [
  "AI-powered skin analysis from photos",
  "Daily skin tracking & journaling",
  "Personalised skincare recommendations",
  "HealthKit/Google Fit integration",
  "Environmental factor monitoring",
  "Progress visualisation dashboard",
];

export default function SkinSense() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-32 md:pt-40 bg-gradient-to-br from-sage/10 to-sage-light/30">
        <div className="container-narrow mx-auto">
          <Button variant="ghost" size="sm" className="mb-8" asChild>
            <Link to="/case-studies">
              <ArrowLeft size={16} className="mr-2" />
              Back to Case Studies
            </Link>
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={skinsenseLogo} alt="SkinSense Logo" className="w-12 h-12 rounded-xl" />
                <p className="text-primary font-medium tracking-wider uppercase text-sm">
                  Product Manager
                </p>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
                SkinSense
              </h1>
              <p className="font-display text-xl md:text-2xl text-muted-foreground italic mb-8">
                AI-Powered Smartwatch Skin Health Companion
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Designed an AI-driven smartwatch companion app to help users 
                monitor and improve their skin health through personalised 
                insights, environmental tracking, and health platform integrations.
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
            
            <div className="relative">
              <div className="bg-gradient-to-br from-sage/30 via-primary/10 to-sage-light/40 rounded-3xl p-6 shadow-2xl border-2 border-primary/20 backdrop-blur-sm">
                <div className="bg-background/90 rounded-2xl p-4 shadow-inner border border-border/50">
                  <img 
                    src={skinsenseAppPreview} 
                    alt="SkinSense App Preview showing key features" 
                    className="rounded-xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Opportunity */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Problem & Opportunity
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Millions of people struggle with skin health issues but lack accessible, 
                personalised tools to track and understand their skin. Existing solutions 
                are either too generic, too expensive, or require dermatologist visits 
                that many can't access regularly.
              </p>
              <p>
                The opportunity: leverage AI and wearable technology to democratise 
                skin health monitoring, providing users with actionable insights based 
                on their unique skin type, lifestyle, and environmental factors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Discovery */}
      <section className="section-padding bg-card">
        <div className="container-narrow mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-12">
            Research & Discovery
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl p-6">
              <h3 className="font-display text-xl text-foreground mb-4">Focus Groups</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Conducted in-depth focus groups with diverse participants to understand 
                skin care routines, pain points, and unmet needs in existing solutions.
              </p>
            </div>
            <div className="bg-background rounded-xl p-6">
              <h3 className="font-display text-xl text-foreground mb-4">Surveys</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Quantitative surveys to validate hypotheses and identify priority 
                features based on user preferences and willingness to adopt new tools.
              </p>
            </div>
            <div className="bg-background rounded-xl p-6">
              <h3 className="font-display text-xl text-foreground mb-4">Secondary Research</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Market analysis, competitor benchmarking, and review of clinical 
                literature on skin health factors and AI diagnostic capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Development */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Product Development
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Developed a comprehensive product strategy including 6 epics and 19 
                user stories, prioritised using the RICE framework to ensure maximum 
                impact with available resources.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-sage-light/50 rounded-lg">
                  <span className="text-primary font-display text-2xl">6</span>
                  <span className="text-foreground">Epics defined</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-sage-light/50 rounded-lg">
                  <span className="text-primary font-display text-2xl">19</span>
                  <span className="text-foreground">User stories written</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-sage-light/50 rounded-lg">
                  <span className="text-primary font-display text-2xl">RICE</span>
                  <span className="text-foreground">Prioritisation framework applied</span>
                </div>
              </div>
            </div>

            <div className="bg-sage-light rounded-2xl p-8">
              <h3 className="font-display text-xl text-foreground mb-6">
                MVP Features (P0)
              </h3>
              <ul className="space-y-3">
                {mvpFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="section-padding bg-sage text-primary-foreground">
        <div className="container-narrow mx-auto">
          <h2 className="font-display text-3xl md:text-4xl mb-12 text-center">
            Success Metrics
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
              <p className="text-primary-foreground/70 text-sm uppercase tracking-wide mb-2">
                North Star Metric
              </p>
              <p className="font-display text-xl">
                Daily Active Users with Completed Skin Analysis
              </p>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
              <p className="text-primary-foreground/70 text-sm uppercase tracking-wide mb-2">
                Primary KPI
              </p>
              <p className="font-display text-xl">
                User Skin Health Score Improvement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Deliverables
              </h2>
              <ul className="space-y-3">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="bg-gradient-to-br from-sage/30 via-primary/10 to-sage-light/40 rounded-3xl p-6 shadow-2xl border-2 border-primary/20 backdrop-blur-sm max-w-xs">
                <div className="bg-background/80 rounded-2xl p-3 shadow-inner border border-border/50">
                  <img 
                    src={skinsenseLogo} 
                    alt="SkinSense Logo" 
                    className="rounded-xl w-full"
                  />
                </div>
              </div>
              <Button variant="hero" size="xl" asChild>
                <a href="https://skinsense-care.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={18} />
                  View Live Prototype
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section-padding bg-card">
        <div className="container-narrow mx-auto flex justify-between">
          <Button variant="ghost" asChild>
            <Link to="/case-studies">
              <ArrowLeft size={16} className="mr-2" />
              All Case Studies
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/case-studies/gartner-ben">
              Next: Gartner BEN
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
