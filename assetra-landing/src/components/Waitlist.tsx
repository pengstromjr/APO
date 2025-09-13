"use client";

import { useState } from "react";
import { Mail, ArrowRight, Check, Gift, Zap, Crown } from "lucide-react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isLoading) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsLoading(false);
  };

  const perks = [
    {
      icon: Zap,
      title: "Early Access",
      description: "Get priority access to new drops before they go public"
    },
    {
      icon: Gift,
      title: "Exclusive Rewards", 
      description: "Unlock special bonuses and collectibles for waitlist members"
    },
    {
      icon: Crown,
      title: "VIP Status",
      description: "Skip the line and get instant access to premium features"
    }
  ];

  if (isSubmitted) {
    return (
      <section id="waitlist" className="section">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-6 animate-floaty">
              <Check size={40} className="text-white" />
            </div>
            
            <h2 className="section-title mb-4">You're on the list!</h2>
            <p className="text-text-muted text-lg mb-8">
              Welcome to Assetra! We'll notify you as soon as early access is available. 
              Check your email for next steps.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">#1,247</div>
                  <div className="text-sm text-text-muted">Your position</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-1">3 days</div>
                  <div className="text-sm text-text-muted">Est. wait time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">5</div>
                  <div className="text-sm text-text-muted">Invite slots</div>
                </div>
              </div>
            </div>

            <p className="text-sm text-text-muted mt-6">
              💡 <span className="text-white font-medium">Pro tip:</span> Invite friends to move up faster in the queue!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="section">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Join the waitlist</h2>
            <p className="section-sub mx-auto">
              Be among the first to own fractions of iconic culture. 
              Early access members get exclusive perks and priority on all drops.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Perks */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-6">
                What you'll get as an early member:
              </h3>
              
              {perks.map((perk, index) => {
                const Icon = perk.icon;
                
                return (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-brand-from/20 to-brand-to/20 border border-brand-from/30 rounded-lg flex items-center justify-center group-hover:from-brand-from/30 group-hover:to-brand-to/30 transition-all duration-300">
                      <Icon size={20} className="text-brand-from group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-brand-from group-hover:to-brand-to group-hover:bg-clip-text transition-all duration-300">
                        {perk.title}
                      </h4>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {perk.description}
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* Social Proof */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 mt-8">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 bg-gradient-to-r from-brand-from to-brand-to rounded-full border-2 border-bg"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      <span className="gradient-text">2,847 people</span> have joined
                    </div>
                    <div className="text-xs text-text-muted">
                      Including collectors from Christie's, Sotheby's, and more
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail size={20} className="text-text-muted" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-text-muted focus-ring focus:border-brand-from/50 transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading || !email}
                  className="btn btn-gradient w-full py-4 text-lg group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                      Joining...
                    </div>
                  ) : (
                    <>
                      Join the waitlist
                      <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <div className="text-center">
                  <p className="text-xs text-text-muted">
                    By joining, you agree to our Terms of Service and Privacy Policy.
                    No spam, unsubscribe anytime.
                  </p>
                </div>
              </form>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-xl font-bold gradient-text">3 days</div>
                  <div className="text-xs text-text-muted">Avg wait time</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-white">2,847</div>
                  <div className="text-xs text-text-muted">People ahead</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}