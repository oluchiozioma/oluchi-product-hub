import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Target, 
  Lightbulb,
  Heart,
  Handshake,
  Calendar,
  MessageSquare,
  BarChart3,
  Briefcase,
  Brain,
  Layers,
  ClipboardCheck,
  LineChart
} from "lucide-react";
import { useState } from "react";

const keyMetrics = [
  { label: "Active Members", value: "80+", icon: Users },
  { label: "Engagement Lift", value: "+25%", icon: TrendingUp },
  { label: "Duration", value: "15 mo", icon: Calendar },
  { label: "Interviews", value: "20+", icon: MessageSquare },
];

const researchMethods = [
  {
    title: "Stakeholder Interviews",
    count: "20+",
    description: "In-depth conversations with associates, allies, and leadership to understand needs, barriers, and aspirations for an inclusive community."
  },
  {
    title: "Surveys",
    count: "50+",
    description: "Quantitative surveys distributed to London associates to validate hypotheses and prioritise community features."
  },
  {
    title: "US BEN Analysis",
    count: "3 years",
    description: "Studied trends, successes, and learnings from the established US BEN chapter to inform the UK launch strategy."
  }
];

const keyInsights = [
  "Strong desire for mentorship and sponsorship opportunities",
  "Low awareness of existing DEI resources and programs",
  "Career growth and visibility as primary motivators",
  "Need for safe spaces to discuss shared experiences",
  "Allies seeking clear ways to contribute meaningfully"
];

const personas = [
  {
    name: "Emeka",
    role: "Mid-Level Professional",
    image: "👨🏿‍💼",
    goals: ["Find a mentor in leadership", "Expand professional network", "Gain visibility for career growth"],
    painPoints: ["Limited access to senior leaders", "Feeling isolated in meetings", "Unclear promotion pathways"],
    engagement: "Wants structured mentorship programs and networking events"
  },
  {
    name: "Abiola",
    role: "Early-Career Associate",
    image: "👩🏾‍💻",
    goals: ["Navigate corporate culture", "Build confidence", "Find community and belonging"],
    painPoints: ["Imposter syndrome", "Lack of role models", "Unsure how to advocate for self"],
    engagement: "Needs guidance, workshops, and peer support groups"
  },
  {
    name: "Jeff",
    role: "Ally & Senior Manager",
    image: "👨🏻‍💼",
    goals: ["Support underrepresented colleagues", "Learn to be a better ally", "Champion inclusive practices"],
    painPoints: ["Unsure how to help effectively", "Fear of saying wrong thing", "Limited DEI training"],
    engagement: "Seeks allyship training, sponsorship opportunities, and clear action items"
  }
];

const timeline = [
  {
    phase: "Discovery",
    date: "Oct - Nov 2024",
    activities: ["Stakeholder interviews", "Survey deployment", "US BEN analysis", "Needs assessment"]
  },
  {
    phase: "Strategy",
    date: "Dec 2024",
    activities: ["Persona development", "Journey mapping", "MVP definition", "Funding proposal"]
  },
  {
    phase: "Launch",
    date: "Jan - Mar 2025",
    activities: ["Launch event", "Mentorship pilot", "Monthly programming", "Communications rollout"]
  },
  {
    phase: "Scale",
    date: "Apr - Dec 2025",
    activities: ["Member growth campaigns", "Leadership engagement", "Impact measurement", "Iteration"]
  }
];

const mvpOfferings = [
  "Monthly networking and professional development events",
  "Mentorship matching program with senior leaders",
  "Allyship education workshops and resources",
  "Internal communications channel (MS Teams)",
  "Quarterly town halls with leadership",
  "Cultural celebration programming"
];

const tools = [
  { name: "MS Teams", icon: "💬" },
  { name: "Google Forms", icon: "📝" },
  { name: "PowerPoint", icon: "📊" },
  { name: "Excel", icon: "📈" },
  { name: "Miro", icon: "🎨" },
  { name: "Outlook", icon: "📧" }
];

const skills = [
  { name: "User-Centered Design", icon: Heart, description: "Research-driven approach to understand and serve community needs" },
  { name: "Strategic Thinking", icon: Target, description: "Aligned DEI initiatives with business goals and employer brand" },
  { name: "Cross-Functional Collaboration", icon: Handshake, description: "Coordinated HR, Marketing, Leadership, and volunteers" },
  { name: "Program Management", icon: ClipboardCheck, description: "End-to-end ownership from ideation to execution" },
  { name: "Data-Informed Decisions", icon: BarChart3, description: "Used surveys and metrics to drive priorities" },
  { name: "Stakeholder Management", icon: Briefcase, description: "Secured buy-in and funding from senior leadership" }
];

const membershipData = [
  { month: "Jan", members: 15 },
  { month: "Feb", members: 28 },
  { month: "Mar", members: 42 },
  { month: "Apr", members: 55 },
  { month: "May", members: 68 },
  { month: "Jun", members: 80 },
];

export default function GartnerBEN() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [activeTimelinePhase, setActiveTimelinePhase] = useState(0);

  const maxMembers = Math.max(...membershipData.map(d => d.members));

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-32 md:pt-40 bg-gradient-to-br from-primary/10 via-sage-light/20 to-background">
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-sage-dark flex items-center justify-center">
                  <Users className="text-primary-foreground" size={24} />
                </div>
                <p className="text-primary font-medium tracking-wider uppercase text-sm">
                  UK Programme Lead
                </p>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-4">
                Gartner – Black Employee Network
              </h1>
              <p className="font-display text-xl md:text-2xl text-muted-foreground italic mb-6">
                UK Launch
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Launching an inclusive network to foster engagement, belonging, and 
                professional growth for Black and ethnic minority associates and allies 
                in London.
              </p>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                <Calendar size={16} />
                <span>Oct 2024 – Dec 2025</span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {keyMetrics.map((metric) => (
                  <div key={metric.label} className="text-center p-4 bg-card rounded-xl border border-border/50 hover-lift">
                    <metric.icon className="mx-auto mb-2 text-primary" size={20} />
                    <p className="font-display text-2xl text-primary">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 via-sage/30 to-sage-light/40 rounded-3xl p-8 shadow-2xl border-2 border-primary/20">
                <div className="bg-card rounded-2xl p-6 shadow-inner border border-border/50">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-sage-dark flex items-center justify-center">
                      <Users className="text-primary-foreground" size={36} />
                    </div>
                    <h3 className="font-display text-xl text-foreground">Black Employee Network</h3>
                    <p className="text-sm text-muted-foreground">London Chapter</p>
                    <div className="flex justify-center gap-2 pt-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Community</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">DEI</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Leadership</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Opportunity */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Problem & Opportunity
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Gartner's Black Employee Network (BEN) existed solely in the US, leaving 
                  London associates without a formal community to connect, grow, and advocate 
                  for one another. This gap meant missed opportunities for mentorship, 
                  networking, and career advancement for Black and ethnic minority employees.
                </p>
                <p>
                  The opportunity: establish a UK chapter of BEN to create a sense of belonging, 
                  drive engagement, and position Gartner as an employer of choice for diverse talent.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-display text-xl text-foreground mb-4">Business Outcomes</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-4 p-4 bg-sage-light/50 rounded-xl">
                  <Target className="text-primary mt-0.5 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Employer of Choice</p>
                    <p className="text-sm text-muted-foreground">Attract and retain diverse top talent</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-sage-light/50 rounded-xl">
                  <Heart className="text-primary mt-0.5 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Inclusive Culture</p>
                    <p className="text-sm text-muted-foreground">Foster supportive and equitable workplace</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-sage-light/50 rounded-xl">
                  <Users className="text-primary mt-0.5 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Sense of Belonging</p>
                    <p className="text-sm text-muted-foreground">Create community and connection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Discovery */}
      <section className="section-padding bg-card">
        <div className="container-narrow mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Research & Discovery
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Conducted comprehensive research to understand associate needs, identify barriers, 
            and learn from the established US BEN chapter.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {researchMethods.map((method) => (
              <div key={method.title} className="bg-background rounded-xl p-6 hover-lift">
                <p className="font-display text-4xl text-primary mb-2">{method.count}</p>
                <h3 className="font-display text-xl text-foreground mb-3">{method.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {method.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-background rounded-2xl p-8">
            <h3 className="font-display text-xl text-foreground mb-6 flex items-center gap-2">
              <Lightbulb className="text-primary" size={24} />
              Key Insights
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {keyInsights.map((insight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-foreground/80 text-sm">{insight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personas */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Personas
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Developed representative personas to guide community design and programming. 
            Click each card to learn more.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {personas.map((persona, index) => (
              <div
                key={persona.name}
                className="relative h-[420px] cursor-pointer perspective-1000"
                onClick={() => setFlippedCard(flippedCard === index ? null : index)}
              >
                <div 
                  className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                    flippedCard === index ? 'rotate-y-180' : ''
                  }`}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: flippedCard === index ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* Front */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-sage-light/30 rounded-2xl p-6 border-2 border-primary/20 backface-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="text-center h-full flex flex-col justify-center">
                      <div className="text-6xl mb-4">{persona.image}</div>
                      <h3 className="font-display text-2xl text-foreground mb-2">{persona.name}</h3>
                      <p className="text-primary font-medium mb-6">{persona.role}</p>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-foreground">Goals</p>
                        {persona.goals.map((goal, i) => (
                          <p key={i} className="text-xs text-muted-foreground">{goal}</p>
                        ))}
                      </div>
                      <p className="text-xs text-primary mt-6">Click to flip →</p>
                    </div>
                  </div>
                  
                  {/* Back */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-sage/20 to-primary/10 rounded-2xl p-6 border-2 border-primary/20"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <div className="h-full flex flex-col justify-center">
                      <h4 className="font-display text-lg text-foreground mb-4">Pain Points</h4>
                      <ul className="space-y-2 mb-6">
                        {persona.painPoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-destructive">•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                      <h4 className="font-display text-lg text-foreground mb-2">Engagement Needs</h4>
                      <p className="text-sm text-muted-foreground">{persona.engagement}</p>
                      <p className="text-xs text-primary mt-6">Click to flip back →</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-card">
        <div className="container-narrow mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Execution Timeline
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            From discovery to scale – a phased approach to launching and growing the UK BEN chapter.
          </p>
          
          {/* Timeline Navigation */}
          <div className="flex flex-wrap gap-2 mb-8">
            {timeline.map((phase, index) => (
              <button
                key={phase.phase}
                onClick={() => setActiveTimelinePhase(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeTimelinePhase === index
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background text-muted-foreground hover:bg-sage-light'
                }`}
              >
                {phase.phase}
              </button>
            ))}
          </div>
          
          {/* Timeline Content */}
          <div className="bg-background rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-display text-2xl text-foreground">
                  {timeline[activeTimelinePhase].phase}
                </h3>
                <p className="text-muted-foreground">{timeline[activeTimelinePhase].date}</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {timeline[activeTimelinePhase].activities.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-sage-light/30 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-medium">
                    {index + 1}
                  </div>
                  <span className="text-foreground/80">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MVP Offerings */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                MVP Community Offerings
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Designed and launched an initial set of programs and resources to establish 
                the community foundation and demonstrate value to members and leadership.
              </p>
              <ul className="space-y-3">
                {mvpOfferings.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-sage-light rounded-2xl p-8">
              <h3 className="font-display text-xl text-foreground mb-6">Tools Used</h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool) => (
                  <div key={tool.name} className="flex items-center gap-3 p-4 bg-background rounded-xl">
                    <span className="text-2xl">{tool.icon}</span>
                    <span className="text-foreground font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Metrics */}
      <section className="section-padding bg-gradient-to-br from-sage via-primary to-sage-dark text-primary-foreground">
        <div className="container-narrow mx-auto">
          <h2 className="font-display text-3xl md:text-4xl mb-12 text-center">
            Impact & Metrics
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Metrics Cards */}
            <div className="space-y-6">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Users size={40} />
                  <span className="font-display text-6xl">80+</span>
                </div>
                <p className="font-display text-xl mb-2">Active Members</p>
                <p className="text-primary-foreground/70 text-sm">
                  Grew community from 0 to 80+ active members in first 6 months
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <TrendingUp size={28} className="mx-auto mb-2" />
                  <p className="font-display text-3xl">+25%</p>
                  <p className="text-sm text-primary-foreground/70">Engagement</p>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Handshake size={28} className="mx-auto mb-2" />
                  <p className="font-display text-3xl">Secured</p>
                  <p className="text-sm text-primary-foreground/70">Funding & Support</p>
                </div>
              </div>
            </div>
            
            {/* Membership Growth Chart */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="font-display text-xl mb-6 flex items-center gap-2">
                <LineChart size={24} />
                Membership Growth
              </h3>
              <div className="flex items-end gap-3 h-48">
                {membershipData.map((data) => (
                  <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                    <span className="text-sm font-medium">{data.members}</span>
                    <div 
                      className="w-full bg-primary-foreground/30 rounded-t-lg transition-all duration-500 hover:bg-primary-foreground/50"
                      style={{ height: `${(data.members / maxMembers) * 100}%` }}
                    />
                    <span className="text-xs text-primary-foreground/70">{data.month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Demonstrated */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 text-center">
            Skills Demonstrated
          </h2>
          <p className="text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            This initiative showcased a range of product-minded leadership competencies.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-card rounded-xl p-6 hover-lift border border-border/50">
                <skill.icon className="text-primary mb-4" size={28} />
                <h3 className="font-display text-lg text-foreground mb-2">{skill.name}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="section-padding bg-card">
        <div className="container-narrow mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Brain className="mx-auto text-primary mb-6" size={48} />
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Summary
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              This project demonstrates my ability to lead high-impact, inclusive initiatives 
              from ideation to execution. By applying user-centered research, strategic thinking, 
              and cross-functional collaboration, I delivered measurable outcomes that aligned 
              with Gartner's business goals while creating real value for associates.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full">User Research</span>
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full">Strategic Planning</span>
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full">DEI Leadership</span>
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full">Program Launch</span>
              <span className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full">Measurable Impact</span>
            </div>
          </div>
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
