"use client";

import { UserPlus, Search, DollarSign } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Join the waitlist",
      description: "Sign up for early access and invite friends to move up faster. Get exclusive perks and priority access to new drops."
    },
    {
      number: "02", 
      icon: Search,
      title: "Browse curated drops",
      description: "Discover authenticated cultural collectibles curated by our experts. From vintage music memorabilia to iconic art pieces."
    },
    {
      number: "03",
      icon: DollarSign,
      title: "Own fractions for $1",
      description: "Purchase affordable shares starting at just $1. Build a diversified portfolio of cultural assets and track their performance."
    }
  ];

  return (
    <section id="how-it-works" className="section bg-white/[0.02]">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">How it works</h2>
          <p className="section-sub mx-auto">
            Get started in three simple steps and begin building your cultural portfolio today.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-brand-from/50 to-transparent transform translate-x-4 lg:translate-x-8" />
                  )}
                  
                  <div className="text-center group">
                    {/* Step Number */}
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-brand-from to-brand-to rounded-full mb-6 shadow-glowViolet">
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 border border-white/10 rounded-xl mb-6 group-hover:bg-white/10 group-hover:border-brand-from/30 transition-all duration-300">
                      <Icon size={28} className="text-brand-from group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-brand-from group-hover:to-brand-to group-hover:bg-clip-text transition-all duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-brand-from/10 to-brand-to/10 border border-brand-from/20 rounded-2xl px-8 py-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-gradient-to-r from-brand-from to-brand-to rounded-full border-2 border-bg flex items-center justify-center"
                  >
                    <span className="text-white text-xs font-bold">{i}</span>
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">
                  Join <span className="gradient-text">2,847+ people</span> already on the waitlist
                </div>
                <div className="text-text-muted text-sm">
                  Average wait time: <span className="text-brand-from font-medium">3 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}