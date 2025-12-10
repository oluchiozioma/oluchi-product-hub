import { Button } from "@/components/ui/button";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  return (
    <section className="section-padding">
      <div className="container-narrow mx-auto text-center">
        <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
          Get in Touch
        </p>
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground mb-6">
          Let's connect.
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
          I'm always open to discussing product management opportunities, 
          interesting projects, or just having a chat about tech and design.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" asChild>
            <a href="mailto:oluchinwabuwa@gmail.com">
              <Mail size={18} />
              Email Me
            </a>
          </Button>
          <Button variant="hero-outline" asChild>
            <a
              href="https://linkedin.com/in/oluchinwabuwa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} />
              LinkedIn
              <ArrowUpRight size={16} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
