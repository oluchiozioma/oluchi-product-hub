import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const stats = [
  { number: "3+", label: "Years in Tech Sales" },
  { number: "5+", label: "Products Shipped" },
  { number: "25%", label: "Engagement Improvement" },
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
              From Tech Sales Leader to Product Builder
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over three years in tech sales leadership and senior account management, 
                I've developed a deep understanding of what drives user success. My journey 
                into product management has been shaped by a genuine passion for solving 
                real problems.
              </p>
              <p>
                I bring hands-on experience in user research, user story writing, journey mapping, 
                MVP definition, and prioritisation frameworks like RICE and MoSCoW. I thrive 
                in cross-functional teams and love working at the intersection of behaviour 
                and technology.
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
