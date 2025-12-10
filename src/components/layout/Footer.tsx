import { Link } from "react-router-dom";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-narrow mx-auto section-padding">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Let's build something great together.
            </h2>
            <p className="text-background/70 max-w-md">
              I'm always interested in hearing about new opportunities, 
              collaborations, and product challenges.
            </p>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <a
                href="https://linkedin.com/in/oluchinwabuwa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors group"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="mailto:hello@oluchinwabuwa.com"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors group"
              >
                <Mail size={20} />
                <span>hello@oluchinwabuwa.com</span>
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} Oluchi Nwabuwa. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Home", "About", "Case Studies", "Contact"].map((link) => (
              <Link
                key={link}
                to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                className="text-background/50 hover:text-background text-sm transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
