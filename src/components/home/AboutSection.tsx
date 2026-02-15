import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const stats = [
  { number: "30%", label: "User acquisition increase through product documentation and flow visibility" },
  { number: "75%", label: "Employee engagement lift from community platform launch" },
  { number: "65%", label: "Conversion improvement from scalable onboarding system" },
];

export function AboutSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
              About Me
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Hi, I'm Oluchi.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a Product Manager focused on fintech and transaction products, supporting delivery of payment and transaction flows within cross-functional teams. I translate business and operational needs into product requirements and help improve user journeys across onboarding and transaction experiences.
              </p>
              <p>
                My background in commercial delivery and stakeholder management strengthens how I collaborate with teams, document product processes, and support delivery of scalable products. I'm passionate about building financial products that improve access and everyday financial experiences across emerging markets.
              </p>
            </div>
            <Button variant="ghost" className="mt-8 group" asChild>
              <Link to="/about">
                Learn More About Me
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <div className="bg-sage/10 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-display text-3xl md:text-4xl text-primary font-semibold mb-2">
                      {stat.number}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-primary/20 rounded-xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/10 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
