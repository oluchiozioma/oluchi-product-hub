import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Paystro() {
  return (
    <Layout>
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-narrow mx-auto">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Case Studies
          </Link>

          <div className="max-w-3xl">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
              Fintech Product Management
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-2">
              Paystro
            </h1>
            <p className="font-display text-xl text-muted-foreground italic mb-8">
              Cross-Border Payments & Transaction Platform
            </p>

            <div className="space-y-10">
              {/* Overview */}
              <div>
                <h2 className="font-display text-2xl text-foreground mb-3">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Owned the strategy and execution for structuring product documentation and transaction flow visibility across onboarding, KYC, and payment experiences within a fintech platform, enabling smoother cross-team collaboration and supporting delivery of features aimed at improving user acquisition.
                </p>
              </div>

              {/* Problem */}
              <div>
                <h2 className="font-display text-2xl text-foreground mb-3">Problem</h2>
                <p className="text-muted-foreground leading-relaxed">
                  As product complexity grew, teams lacked clear documentation and visibility into transaction flows, payment eligibility rules, and operational processes, creating inefficiencies in delivering and supporting new features aimed at increasing user acquisition.
                </p>
              </div>

              {/* My Role */}
              <div>
                <h2 className="font-display text-2xl text-foreground mb-3">My Role</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Product Manager owning product documentation and flow visibility strategy while supporting requirements definition and optimisation of onboarding and payment experiences across cross-functional teams.
                </p>
              </div>

              {/* Key Highlights */}
              <div>
                <h2 className="font-display text-2xl text-foreground mb-3">Key Highlights</h2>
                <ul className="space-y-3">
                  {[
                    "Owned strategy for documenting onboarding, KYC, money transfer, bill payment, and marketplace transaction flows",
                    "Defined payment method eligibility rules based on location and compliance requirements",
                    "Built internal product wiki improving product knowledge sharing across teams",
                    "Documented end-to-end transaction lifecycle flows supporting engineering and operations delivery",
                    "Identified improvement opportunities and edge cases across onboarding and payment journeys",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                      <span className="text-primary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <div>
                <h2 className="font-display text-2xl text-foreground mb-3">Impact</h2>
                <div className="bg-card rounded-xl p-6 border border-border/50">
                  <p className="text-foreground font-bold text-lg">
                    Improved internal product clarity and enabled delivery of product updates linked to a 30% increase in user acquisition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
