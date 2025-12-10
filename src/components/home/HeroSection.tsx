import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-light/30 via-transparent to-transparent" />
      
      <div className="container-narrow mx-auto section-padding pt-32 md:pt-40 relative z-10">
        <div className="max-w-4xl">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Product Manager
          </p>
          
          <h1 
            className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-8 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Hi, I'm <span className="italic">Oluchi</span> — <br className="hidden md:block" />
            a Product Manager with a background in tech sales and senior account management.
          </h1>
          
          <p 
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            I specialise in uncovering user problems, translating insights into solutions, 
            and building products that make a real impact.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="hero" asChild>
              <Link to="/case-studies">View My Work</Link>
            </Button>
            <Button variant="hero-outline" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <span className="text-sm tracking-wide">Scroll</span>
          <ArrowDown size={20} className="animate-bounce" />
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-24 w-72 h-72 bg-sage/10 rounded-full blur-2xl" />
    </section>
  );
}
