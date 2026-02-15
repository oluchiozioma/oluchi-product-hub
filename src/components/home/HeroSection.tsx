import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import profilePicture from "@/assets/profile-picture.jpg";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-light/30 via-transparent to-transparent" />
      
      <div className="container-narrow mx-auto section-padding pt-32 md:pt-40 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Product Manager — Fintech & Transaction Products
            </p>
            
            <h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Building seamless payment and transaction experiences.
            </h1>
            
            <p 
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              Hi, I'm <span className="text-foreground font-medium">Oluchi</span>, a Product Manager focused on fintech and transaction products. I support delivery of payment and transaction flows, translate business needs into product requirements, and collaborate with cross-functional teams to improve user journeys. I'm passionate about building scalable financial products for emerging markets.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button variant="hero" asChild>
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
              <Button variant="hero-outline" asChild>
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div 
            className="relative animate-fade-up order-first lg:order-last"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              <img 
                src={profilePicture} 
                alt="Oluchi Nwabuwa - Product Manager" 
                className="w-full max-w-md mx-auto lg:max-w-full rounded-2xl shadow-elegant"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-xl -z-10" />
            </div>
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
