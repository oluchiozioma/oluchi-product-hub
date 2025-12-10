import {
  Search,
  FileText,
  BarChart3,
  Users,
  GitBranch,
  Target,
  Rocket,
  Code,
  Sparkles,
  Activity,
} from "lucide-react";

const skills = [
  { name: "User Research", icon: Search, category: "Discovery" },
  { name: "PRD & Acceptance Criteria", icon: FileText, category: "Documentation" },
  { name: "Data Insights", icon: BarChart3, category: "Analytics" },
  { name: "Journey Mapping", icon: GitBranch, category: "Discovery" },
  { name: "Stakeholder Management", icon: Users, category: "Leadership" },
  { name: "Prioritisation (RICE, MoSCoW)", icon: Target, category: "Strategy" },
  { name: "GTM Planning", icon: Rocket, category: "Strategy" },
  { name: "Technical Collaboration", icon: Code, category: "Execution" },
  { name: "AI/ML Concepts", icon: Sparkles, category: "Technical" },
  { name: "Health Integrations", icon: Activity, category: "Technical" },
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {skills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-primary-foreground/20 transition-colors group"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <IconComponent size={24} className="text-primary-foreground" />
                </div>
                <p className="text-sm font-medium text-primary-foreground">
                  {skill.name}
                </p>
                <p className="text-xs text-primary-foreground/60 mt-1">
                  {skill.category}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
