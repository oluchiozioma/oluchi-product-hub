import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, ArrowUpRight, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <section className="section-padding pt-32 md:pt-40 min-h-[80vh] flex items-center">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-primary font-medium tracking-wider uppercase text-sm mb-6">
                Get in Touch
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-8">
                Let's connect.
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities, 
                collaborations, and product challenges. Whether you have a 
                question or just want to say hi, I'll do my best to get back to you.
              </p>
              
              <div className="flex items-center gap-3 text-muted-foreground mb-12">
                <MapPin size={20} />
                <span>London, United Kingdom</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
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

            <div className="bg-sage-light rounded-2xl p-8 md:p-12 h-fit">
              <h2 className="font-display text-2xl text-foreground mb-8">
                Quick Links
              </h2>
              <div className="space-y-6">
                <a
                  href="mailto:oluchinwabuwa@gmail.com"
                  className="flex items-center justify-between group py-4 border-b border-foreground/10"
                >
                  <div className="flex items-center gap-4">
                    <Mail size={24} className="text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">
                        oluchinwabuwa@gmail.com
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                </a>

                <a
                  href="https://linkedin.com/in/oluchinwabuwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group py-4 border-b border-foreground/10"
                >
                  <div className="flex items-center gap-4">
                    <Linkedin size={24} className="text-primary" />
                    <div>
                      <p className="font-medium text-foreground">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">
                        /in/oluchinwabuwa
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                </a>

                <a
                  href="/Oluchi_Nwabuwa_Resume.txt"
                  download
                  className="flex items-center justify-between group py-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <span className="text-primary font-medium text-sm">CV</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Download CV</p>
                      <p className="text-sm text-muted-foreground">
                        Text format
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
