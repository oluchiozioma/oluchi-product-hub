import {
  Target,
  Search,
  GitBranch,
  FileText,
  BarChart3,
  Rocket,
  Users,
  MessageSquare,
  Presentation,
  Handshake,
  Heart,
  LineChart,
  FlaskConical,
  Settings,
  Calendar,
  Code,
  Pencil,
  Sparkles,
  Cpu,
  Activity,
} from "lucide-react";

const skillCategories = [
  {
    title: "Core Product Skills",
    skills: [
      { name: "Product Strategy", icon: Target },
      { name: "User Research", icon: Search },
      { name: "Journey Mapping", icon: GitBranch },
      { name: "Product Requirements", icon: FileText },
      { name: "Prioritisation (RICE, MoSCoW)", icon: BarChart3 },
      { name: "GTM Planning", icon: Rocket },
      { name: "Customer Adoption & Onboarding", icon: Users },
    ],
  },
  {
    title: "Communication & Influence",
    skills: [
      { name: "Communication & Storytelling", icon: MessageSquare },
      { name: "Stakeholder Management", icon: Users },
      { name: "Workshop Facilitation", icon: Presentation },
      { name: "Cross-functional Collaboration", icon: Handshake },
      { name: "Community Design & Engagement", icon: Heart },
    ],
  },
  {
    title: "Analytical & Insight Capabilities",
    skills: [
      { name: "Data Insights", icon: LineChart },
      { name: "KPI Definition & OKRs", icon: Target },
      { name: "Experimentation / Hypothesis Validation", icon: FlaskConical },
      { name: "Process Optimisation", icon: Settings },
    ],
  },
  {
    title: "Execution & Delivery",
    skills: [
      { name: "Program Delivery", icon: Rocket },
      { name: "Sprint Planning & Backlog Management", icon: Calendar },
      { name: "Technical Collaboration", icon: Code },
      { name: "Content Design & Enablement", icon: Pencil },
    ],
  },
  {
    title: "Technical Fluency",
    skills: [
      { name: "AI and ML Concepts", icon: Sparkles },
      { name: "API and System Understanding", icon: Cpu },
      { name: "Health Integrations", icon: Activity },
    ],
  },
];

const tools = [
  {
    category: "Project Management",
    items: ["Jira", "Notion", "Miro"],
  },
  {
    category: "Design & Prototyping",
    items: ["Figma", "Canva"],
  },
  {
    category: "Collaboration",
    items: ["Slack", "Microsoft Teams", "Zoom"],
  },
  {
    category: "AI Tools",
    items: ["ChatGPT", "Claude", "Lovable", "Reflex AI"],
  },
];

export function SkillsSection() {
  return (
    <section className="section-padding bg-sage text-primary-foreground">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary-foreground/70 font-medium tracking-wider uppercase text-sm mb-4">
            Expertise
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">
            Skills & Capabilities
          </h2>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12 mb-16">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="font-display text-xl md:text-2xl mb-6 text-primary-foreground/90">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 hover:bg-primary-foreground/20 transition-colors group"
                    >
                      <IconComponent size={16} className="text-primary-foreground/80 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-primary-foreground">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="border-t border-primary-foreground/20 pt-12 space-y-12">
          <h3 className="font-display text-xl md:text-2xl text-primary-foreground/90">
            ⭐ Tools
          </h3>
          {tools.map((toolGroup) => (
            <div key={toolGroup.category}>
              <h3 className="font-display text-xl md:text-2xl mb-6 text-primary-foreground/90">
                {toolGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {toolGroup.items.map((tool) => (
                  <span
                    key={tool}
                    className="bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
