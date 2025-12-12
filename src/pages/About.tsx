import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Briefcase, Lightbulb, Rocket, Heart } from "lucide-react";
import profilePicture from "@/assets/profile-picture.jpg";

const lookingFor = [
  "Solve real user problems in a structured, strategic way",
  "Collaborate closely with engineering, design, and research teams",
  "Build a strong foundation in product management while making tangible impact",
  "Work in an environment that values curiosity, ownership, excellence, and thoughtful decision-making",
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

const journeyMilestones = [
  {
    icon: Briefcase,
    title: "Tech Sales & Account Management",
    description: "Built a strong foundation in understanding users, identifying root problems, and collaborating with stakeholders to deliver solutions that achieve business results.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Lightbulb,
    title: "Discovery of Product Thinking",
    description: "Realised the moments that energised me most were breaking down user problems, asking purposeful questions, and shaping solutions that created real impact.",
    color: "bg-sage/20 text-sage-dark",
  },
  {
    icon: Rocket,
    title: "Building SkinSense",
    description: "Created an AI-powered smartwatch skin health companion—owning user research, persona definition, RICE prioritisation, MVP scoping, and PRD creation.",
    color: "bg-primary/15 text-primary",
  },
  {
    icon: Heart,
    title: "Committed to Product Excellence",
    description: "Focused on building products that elevate everyday experiences and solve problems that often go unnoticed but affect many people.",
    color: "bg-sage-light text-foreground",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero with Image */}
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-primary font-medium tracking-wider uppercase text-sm mb-6">
                About Me
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-8">
                Hi, I'm Oluchi.
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                I am a Tech Sales Leader transitioning into Product Management. I blend customer insight, problem framing, and cross-functional collaboration to build products that deliver measurable value.
              </p>
            </div>
            
            {/* Profile Image */}
            <div className="relative order-first lg:order-last">
              <img 
                src={profilePicture} 
                alt="Oluchi Nwabuwa - Product Manager" 
                className="w-full max-w-md mx-auto lg:max-w-full rounded-2xl shadow-elegant"
              />
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* My Journey */}
      <section className="section-padding pt-0">
        <div className="container-narrow mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-12">
            My Journey
          </h2>
          
          {/* Visual Timeline */}
          <div className="relative mb-12">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-sage/40 to-primary/20 hidden md:block" />
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-sage/40 to-primary/20 md:hidden" />
            
            <div className="space-y-8 md:space-y-12">
              {journeyMilestones.map((milestone, index) => (
                <div 
                  key={milestone.title}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Icon */}
                  <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full ${milestone.color} flex items-center justify-center shadow-md md:absolute md:left-1/2 md:-translate-x-1/2`}>
                    <milestone.icon size={20} />
                  </div>
                  
                  {/* Content Card */}
                  <div className={`flex-1 md:w-[calc(50%-3rem)] ${
                    index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                  }`}>
                    <div className="bg-card rounded-xl p-6 border border-border/50 hover-lift">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2 block">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-display text-lg text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                </div>
              ))}
            </div>
          </div>

          {/* Detailed narrative */}
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-sage-light/50 to-background rounded-2xl p-8 md:p-10 border border-border/30">
            <p className="text-muted-foreground leading-relaxed mb-4">
              My background in Tech Sales and Senior Account Management gave me a strong foundation in understanding users, identifying root problems, and collaborating with stakeholders to deliver solutions that achieve business results. These experiences naturally developed my product instincts including asking the right questions, mapping pain points, and shaping clear value propositions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Over time, I realised the moments that energised me most were the ones spent breaking down user problems, asking purposeful questions, and shaping solutions that created real impact. I discovered I was practicing product thinking long before I had the title.
            </p>
          </div>
        </div>
      </section>

      {/* Why Product Management */}
      <section className="section-padding bg-card">
        <div className="container-narrow mx-auto">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
              Why Product Management
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Product management sits at the intersection of what I do best: understanding people, solving problems, and creating meaningful outcomes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I have always been driven by three principles:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="text-foreground/80 text-lg">Understanding real user needs, not assumptions</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="text-foreground/80 text-lg">Solving meaningful problems, not building features for the sake of it</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="text-foreground/80 text-lg">Creating value, not noise</span>
              </li>
            </ul>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Product management allows me to combine my commercial experience, analytical mindset, and user-centred approach to discover problems worth solving and deliver solutions that matter. It is the space where I can learn, grow, and consistently drive impact for users and business alike.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-12 text-center">
            How I Work
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-xl p-6 hover-lift border border-border/50"
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

      {/* What I'm Looking For */}
      <section className="section-padding bg-sage-light">
        <div className="container-narrow mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8 text-center">
              What I'm Looking For
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center">
              I am seeking Associate Product Manager or Product Manager roles where I can:
            </p>
            <div className="bg-background rounded-2xl p-8 md:p-10">
              <ul className="space-y-4">
                {lookingFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mt-8 text-center">
              I am committed to contributing to products that improve people's lives, even in small but meaningful ways, while growing into a skilled, strategic, and user-focused product professional.
            </p>
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
