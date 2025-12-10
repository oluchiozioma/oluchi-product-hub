import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, ExternalLink, CheckCircle2, Users, Target, Lightbulb, 
  TrendingUp, Rocket, Brain, FileText, BarChart3, Layers, 
  Zap, Heart, Shield, Calendar
} from "lucide-react";
import { SkinSenseLogo, SkinSenseWordmark } from "@/components/case-studies/SkinSenseLogo";
import { MockupPlaceholder } from "@/components/case-studies/MockupPlaceholder";

const personas = [
  {
    name: "Conscious Caroline",
    age: "28-42",
    type: "Professional",
    needs: "Preventative solutions for skin health",
    pain: "Wants to prevent issues before they happen",
  },
  {
    name: "Active Alex",
    age: "24-35", 
    type: "Athlete",
    needs: "24/7 wear without irritation",
    pain: "Can't track fitness due to skin discomfort",
  },
  {
    name: "Cautious Chris",
    age: "45-62",
    type: "Allergy-prone",
    needs: "Medically reliable guidance",
    pain: "Uncertain about safe wear duration",
  },
];

const keyInsights = [
  "Users react to irritation instead of preventing it",
  "Dark spots from post-inflammatory hyperpigmentation are a major concern",
  "Sweat + prolonged wear trigger most irritation cases",
  "Users want 24/7 device wear but can't due to discomfort",
];

const mvpFeatures = [
  { name: "Daily Skin Logging", desc: "Track skin condition daily" },
  { name: "Wear Schedule Generator", desc: "AI-optimized wearing times" },
  { name: "Basic Tracking", desc: "Monitor patterns over time" },
  { name: "AI Insights", desc: "Predictive irritation alerts" },
  { name: "Push Notifications", desc: "Timely reminders & tips" },
  { name: "Accessory Recommendations", desc: "Personalized band suggestions" },
];

const kpis = [
  { metric: "Acquisition", target: "50K downloads", period: "12 months" },
  { metric: "Activation", target: "85%", period: "Day 1 onboarding" },
  { metric: "DAU/MAU", target: "40%", period: "Engagement" },
  { metric: "D7 Retention", target: "60%", period: "Week 1" },
  { metric: "D30 Retention", target: "40%", period: "Month 1" },
  { metric: "Health Outcome", target: "40% reduction", period: "Irritation score" },
];

const gtmPhases = [
  { phase: "Private Beta", users: "500", goal: "Validate core logging + insights" },
  { phase: "Public Beta", users: "5K", goal: "Test AI prediction accuracy" },
  { phase: "Soft Launch", users: "50K", goal: "Optimize retention loops" },
  { phase: "Full Launch", users: "Scale", goal: "Apple/Samsung partnerships" },
];

const pmSkills = [
  { icon: Users, skill: "User Research & Personas", desc: "Synthesized 12+ pain points into actionable insights" },
  { icon: Target, skill: "Strategic Prioritization", desc: "RICE framework to prioritize 19 stories across 6 epics" },
  { icon: FileText, skill: "MVP & PRD Definition", desc: "Defined core value, technical requirements, and acceptance criteria" },
  { icon: BarChart3, skill: "Metrics & Analytics", desc: "North Star + KPI framework for acquisition, retention, engagement" },
  { icon: Layers, skill: "Technical Collaboration", desc: "API integrations, ML models, roadmap sequencing" },
  { icon: Rocket, skill: "Go-to-Market Planning", desc: "Phased launch strategy with iterative learning" },
];

const deliverables = [
  "19 user stories with acceptance criteria and dependencies",
  "Technical specifications for HealthKit/Google Fit & ML models",
  "Metrics dashboard for all KPIs",
  "18-month roadmap (MVP → AI insights → marketplace → B2B)",
  "Competitive analysis vs. Beeva AI & Dermie AI",
  "Figma prototype with full user flows",
];

export default function SkinSense() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* SkinSense branded background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5F3] via-[#F0F9F7] to-[#D4EDE9]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#4AA8A0]/10 to-transparent" />
        
        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#4AA8A0]/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-[#7BC5BD]/10 blur-2xl" />
        
        <div className="relative section-padding pt-32 md:pt-40">
          <div className="container-narrow mx-auto">
            <Button variant="ghost" size="sm" className="mb-8 text-[#2D7A73] hover:bg-[#4AA8A0]/10" asChild>
              <Link to="/case-studies">
                <ArrowLeft size={16} className="mr-2" />
                Back to Case Studies
              </Link>
            </Button>
            
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3">
                {/* Logo & Branding */}
                <div className="mb-8">
                  <SkinSenseWordmark variant="color" className="mb-4" />
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-[#4AA8A0]/20 text-[#2D7A73] text-xs font-medium rounded-full">
                      Product Manager
                    </span>
                    <span className="px-3 py-1 bg-[#2D7A73] text-white text-xs font-medium rounded-full">
                      MVP-Ready
                    </span>
                    <span className="px-3 py-1 bg-[#4AA8A0]/20 text-[#2D7A73] text-xs font-medium rounded-full">
                      18-Month Roadmap
                    </span>
                  </div>
                </div>
                
                {/* Tagline */}
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] leading-tight mb-6">
                  AI-Powered Smartwatch Skin Health Companion
                </h1>
                <p className="text-xl md:text-2xl text-[#4AA8A0] font-medium mb-6">
                  Predict and Prevent Irritation 24-48 Hours in Advance
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl">
                  I led SkinSense end-to-end, transforming a real user pain point into a validated, 
                  data-driven product ready for market launch.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    className="bg-[#2D7A73] hover:bg-[#256861] text-white"
                    size="lg"
                    asChild
                  >
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={18} className="mr-2" />
                      View Prototype
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-[#4AA8A0] text-[#2D7A73] hover:bg-[#4AA8A0]/10"
                    asChild
                  >
                    <a href="#deliverables">
                      <FileText size={18} className="mr-2" />
                      View Deliverables
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Key Stats Card */}
              <div className="lg:col-span-2">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[#4AA8A0]/20">
                  <h3 className="font-display text-lg mb-6 text-[#2D7A73] flex items-center gap-2">
                    <BarChart3 size={20} />
                    Project Snapshot
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-[#E8F5F3] to-[#D4EDE9] rounded-xl">
                      <p className="font-display text-3xl text-[#2D7A73]">225M</p>
                      <p className="text-xs text-[#4AA8A0]">Global Smartwatch Users</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-[#E8F5F3] to-[#D4EDE9] rounded-xl">
                      <p className="font-display text-3xl text-[#2D7A73]">28%</p>
                      <p className="text-xs text-[#4AA8A0]">Weekly Irritation</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-[#E8F5F3] to-[#D4EDE9] rounded-xl">
                      <p className="font-display text-3xl text-[#2D7A73]">$2.3B</p>
                      <p className="text-xs text-[#4AA8A0]">Accessories Market</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-[#E8F5F3] to-[#D4EDE9] rounded-xl">
                      <p className="font-display text-3xl text-[#2D7A73]">0</p>
                      <p className="text-xs text-[#4AA8A0]">Direct Competitors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="py-12 bg-white border-y border-[#4AA8A0]/10">
        <div className="container-narrow mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2D7A73] shadow-md" />
              <div>
                <p className="text-xs text-muted-foreground">Primary</p>
                <p className="text-sm font-mono text-foreground">#2D7A73</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#4AA8A0] shadow-md" />
              <div>
                <p className="text-xs text-muted-foreground">Secondary</p>
                <p className="text-sm font-mono text-foreground">#4AA8A0</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#7BC5BD] shadow-md" />
              <div>
                <p className="text-xs text-muted-foreground">Accent</p>
                <p className="text-sm font-mono text-foreground">#7BC5BD</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#E8F5F3] shadow-md border border-[#4AA8A0]/20" />
              <div>
                <p className="text-xs text-muted-foreground">Background</p>
                <p className="text-sm font-mono text-foreground">#E8F5F3</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <SkinSenseLogo variant="mono" size="sm" className="text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Mono Logo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Opportunity */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#4AA8A0]/20 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-[#2D7A73]" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground">
                Problem & Opportunity
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#FEF2F2] rounded-2xl p-8 border border-red-100">
                <h3 className="font-display text-xl text-red-700 mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  The Problem
                </h3>
                <p className="text-red-900/80 leading-relaxed">
                  Millions of smartwatch users experience skin irritation and discoloration 
                  with <span className="font-semibold">no preventive solutions available</span>. 
                  Users are forced to react to problems after they occur, leading to discomfort 
                  and reduced device usage.
                </p>
              </div>
              
              <div className="bg-[#E8F5F3] rounded-2xl p-8 border border-[#4AA8A0]/20">
                <h3 className="font-display text-xl text-[#2D7A73] mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  The Opportunity
                </h3>
                <p className="text-[#2D7A73]/80 leading-relaxed">
                  A <span className="font-semibold">$2.3B market</span> with 225M users globally 
                  and <span className="font-semibold">zero direct competitors</span> solving 
                  device-specific skin irritation. First-mover advantage in predictive skin health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Insights */}
      <section className="section-padding bg-gradient-to-b from-white to-[#F8FAFA]">
        <div className="container-narrow mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-xl bg-[#4AA8A0]/20 flex items-center justify-center">
              <Brain className="w-6 h-6 text-[#2D7A73]" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Research & Insights
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-border/50">
              <div className="w-10 h-10 rounded-lg bg-[#4AA8A0]/20 flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-[#2D7A73]" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">Focus Groups</h3>
              <p className="text-3xl font-display text-[#2D7A73] mb-2">2 groups</p>
              <p className="text-muted-foreground text-sm">
                15 participants across diverse demographics, exploring wear habits and pain points
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-border/50">
              <div className="w-10 h-10 rounded-lg bg-[#4AA8A0]/20 flex items-center justify-center mb-4">
                <BarChart3 className="w-5 h-5 text-[#2D7A73]" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">Survey Research</h3>
              <p className="text-3xl font-display text-[#2D7A73] mb-2">12 responses</p>
              <p className="text-muted-foreground text-sm">
                Instagram-based survey validating hypotheses and identifying priority features
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-border/50">
              <div className="w-10 h-10 rounded-lg bg-[#4AA8A0]/20 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-[#2D7A73]" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">Secondary Research</h3>
              <p className="text-3xl font-display text-[#2D7A73] mb-2">NIH + Reddit</p>
              <p className="text-muted-foreground text-sm">
                Dermatology studies and community analysis for clinical validation
              </p>
            </div>
          </div>
          
          {/* Key Insights */}
          <div className="bg-[#2D7A73] rounded-3xl p-8 md:p-12">
            <h3 className="font-display text-2xl text-white mb-8">Key Insights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {keyInsights.map((insight, i) => (
                <div key={i} className="flex items-start gap-4 bg-white/10 rounded-xl p-4">
                  <span className="w-8 h-8 rounded-full bg-[#7BC5BD] text-[#2D7A73] flex items-center justify-center font-display text-sm flex-shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-white/90">{insight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personas */}
      <section className="section-padding bg-[#F8FAFA]">
        <div className="container-narrow mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-xl bg-[#4AA8A0]/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-[#2D7A73]" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              User Personas
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {personas.map((persona) => (
              <div key={persona.name} className="bg-white rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4AA8A0] to-[#2D7A73] mb-4 flex items-center justify-center">
                  <span className="text-white font-display text-xl">{persona.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="font-display text-xl text-foreground mb-1">{persona.name}</h3>
                <p className="text-sm text-[#4AA8A0] mb-4">{persona.age} • {persona.type}</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Needs</p>
                    <p className="text-sm text-foreground">{persona.needs}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Pain Point</p>
                    <p className="text-sm text-foreground">{persona.pain}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Development & MVP */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-xl bg-[#4AA8A0]/20 flex items-center justify-center">
              <Layers className="w-6 h-6 text-[#2D7A73]" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Product Development & MVP
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="font-display text-2xl text-foreground mb-6">Scope & Framework</h3>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-[#E8F5F3] rounded-xl p-6 text-center">
                  <p className="font-display text-4xl text-[#2D7A73]">6</p>
                  <p className="text-sm text-[#4AA8A0]">Epics</p>
                </div>
                <div className="bg-[#E8F5F3] rounded-xl p-6 text-center">
                  <p className="font-display text-4xl text-[#2D7A73]">19</p>
                  <p className="text-sm text-[#4AA8A0]">User Stories</p>
                </div>
                <div className="bg-[#E8F5F3] rounded-xl p-6 text-center">
                  <p className="font-display text-4xl text-[#2D7A73]">RICE</p>
                  <p className="text-sm text-[#4AA8A0]">Framework</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                All features were prioritized using the <span className="text-[#2D7A73] font-medium">RICE framework</span> (Reach, Impact, Confidence, Effort) to ensure data-driven decisions 
                and maximum value delivery with limited resources.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#E8F5F3] to-[#D4EDE9] rounded-2xl p-8 border border-[#4AA8A0]/20">
              <h3 className="font-display text-xl text-[#2D7A73] mb-6">MVP Features (P0)</h3>
              <div className="grid grid-cols-2 gap-4">
                {mvpFeatures.map((feature) => (
                  <div key={feature.name} className="bg-white rounded-xl p-4">
                    <p className="font-medium text-foreground text-sm mb-1">{feature.name}</p>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Interactive Mockups */}
          <div>
            <h3 className="font-display text-2xl text-foreground mb-8 text-center">App Screens</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <MockupPlaceholder title="Daily Log" description="Track skin condition" icon="calendar" />
              <MockupPlaceholder title="AI Insights" description="Predictive alerts" icon="chart" />
              <MockupPlaceholder title="Wear Schedule" description="Optimized timing" icon="watch" />
              <MockupPlaceholder title="Notifications" description="Smart reminders" icon="notification" />
              <MockupPlaceholder title="Accessories" description="Band recommendations" icon="shop" />
              <MockupPlaceholder title="Dashboard" description="Progress overview" icon="phone" />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics & Success */}
      <section className="section-padding bg-[#2D7A73]">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Metrics & Success
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Defined a comprehensive metrics framework with a clear North Star and supporting KPIs
            </p>
          </div>
          
          {/* North Star */}
          <div className="bg-white rounded-2xl p-8 mb-8 text-center max-w-2xl mx-auto">
            <p className="text-sm text-[#4AA8A0] uppercase tracking-wide mb-2">North Star Metric</p>
            <p className="font-display text-2xl md:text-3xl text-[#2D7A73]">
              Irritation-Free Days Per User/Month
            </p>
            <p className="text-4xl font-display text-[#2D7A73] mt-4">Target: 25+ days</p>
          </div>
          
          {/* KPIs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {kpis.map((kpi) => (
              <div key={kpi.metric} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <p className="text-white/60 text-sm mb-2">{kpi.metric}</p>
                <p className="font-display text-2xl text-white mb-1">{kpi.target}</p>
                <p className="text-xs text-[#7BC5BD]">{kpi.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Go-to-Market Strategy */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-xl bg-[#4AA8A0]/20 flex items-center justify-center">
              <Rocket className="w-6 h-6 text-[#2D7A73]" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Go-to-Market Strategy
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {gtmPhases.map((phase, i) => (
              <div key={phase.phase} className="relative">
                {i < gtmPhases.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-full h-0.5 bg-[#4AA8A0]/30" />
                )}
                <div className="bg-[#E8F5F3] rounded-2xl p-6 relative">
                  <div className="w-16 h-16 rounded-full bg-[#2D7A73] text-white flex items-center justify-center font-display text-xl mb-4 mx-auto">
                    {i + 1}
                  </div>
                  <h3 className="font-display text-lg text-[#2D7A73] text-center mb-2">{phase.phase}</h3>
                  <p className="text-2xl font-display text-[#4AA8A0] text-center mb-2">{phase.users}</p>
                  <p className="text-sm text-muted-foreground text-center">{phase.goal}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-[#F8FAFA] rounded-2xl p-8">
            <h3 className="font-display text-xl text-foreground mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#2D7A73]" />
              Technical Requirements
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4AA8A0] flex-shrink-0 mt-0.5" />
                <p className="text-foreground/80">HealthKit & Google Fit integration for health data sync</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4AA8A0] flex-shrink-0 mt-0.5" />
                <p className="text-foreground/80">ML prediction models for 24-48hr irritation forecasting</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#4AA8A0] flex-shrink-0 mt-0.5" />
                <p className="text-foreground/80">HIPAA-compliant data storage for user privacy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PM Skills Demonstrated */}
      <section className="section-padding bg-gradient-to-b from-[#F8FAFA] to-white">
        <div className="container-narrow mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-xl bg-[#4AA8A0]/20 flex items-center justify-center">
              <Target className="w-6 h-6 text-[#2D7A73]" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              PM Skills Demonstrated
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pmSkills.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.skill} className="bg-white rounded-2xl p-6 shadow-sm border border-border/50 hover:border-[#4AA8A0]/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4AA8A0] to-[#2D7A73] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">{item.skill}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section id="deliverables" className="section-padding bg-white">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#4AA8A0]/20 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#2D7A73]" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-foreground">
                  Deliverables
                </h2>
              </div>
              <ul className="space-y-4">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#4AA8A0] flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-[#E8F5F3] to-[#D4EDE9] rounded-3xl p-8 md:p-12 text-center border border-[#4AA8A0]/20">
              <SkinSenseLogo variant="color" size="lg" className="mx-auto mb-6" />
              <h3 className="font-display text-2xl text-[#2D7A73] mb-4">View the Full Prototype</h3>
              <p className="text-[#4AA8A0]/80 mb-8">
                Explore the complete user flows and interactions in the Figma prototype
              </p>
              <Button 
                className="bg-[#2D7A73] hover:bg-[#256861] text-white"
                size="lg"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={18} className="mr-2" />
                  View Prototype
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="section-padding bg-[#2D7A73]">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-8">Summary</h2>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
            I led SkinSense end-to-end, transforming a real user pain point into a validated, 
            data-driven product. This project highlights my ability to apply user-centric research, 
            prioritize effectively, think strategically, and deliver measurable business outcomes.
          </p>
          <p className="text-[#7BC5BD] font-display text-lg">
            SkinSense reflects my commitment to solving meaningful problems and driving tangible 
            impact through thoughtful product management.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="section-padding bg-white border-t border-border">
        <div className="container-narrow mx-auto flex justify-between">
          <Button variant="ghost" className="text-[#2D7A73]" asChild>
            <Link to="/case-studies">
              <ArrowLeft size={16} className="mr-2" />
              All Case Studies
            </Link>
          </Button>
          <Button variant="outline" className="border-[#4AA8A0] text-[#2D7A73]" asChild>
            <Link to="/case-studies/gartner-ben">
              Next: Gartner BEN
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
