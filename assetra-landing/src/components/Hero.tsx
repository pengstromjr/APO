"use client";

import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 overflow-hidden">
      <div className="container text-center">
        {/* Social Proof Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-6 h-6 bg-gradient-to-r from-brand-from to-brand-to rounded-full border-2 border-bg"
              />
            ))}
          </div>
          <span className="text-sm text-text-muted">
            <span className="text-white font-semibold">2,847</span> people joined this week
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-[clamp(2.5rem,4vw,4.5rem)] font-extrabold leading-tight mb-6">
          Own iconic culture,{" "}
          <span className="gradient-text">one share at a time</span>
        </h1>

        {/* Subheadline */}
        <p className="text-[clamp(1rem,2vw,1.25rem)] text-text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
          Join Assetra to own fractions of cultural collectibles. Get early access to curated drops. 
          Invite friends to move up the waitlist and unlock exclusive rewards.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="btn btn-gradient px-8 py-4 text-lg group">
            Join the waitlist
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="btn btn-light px-8 py-4 text-lg group">
            <Play size={20} className="mr-2" />
            Watch demo
          </button>
        </div>

        {/* Hero Visual */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-xl2 border border-white/20 p-8 shadow-soft">
            {/* Mock Interface */}
            <div className="bg-bg-soft rounded-xl border border-white/10 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Featured Drop</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm text-text-muted">Live</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="w-full h-48 bg-gradient-to-br from-brand-from/20 to-brand-to/20 rounded-lg border border-white/10 flex items-center justify-center">
                    <span className="text-text-muted text-sm">Collectible Preview</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-muted">Progress</span>
                    <span className="text-sm text-white font-semibold">67% funded</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-brand-from to-brand-to h-2 rounded-full animate-floaty" style={{ width: "67%" }} />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-muted">Price per share</span>
                    <div className="bg-brand-from/20 px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-white">$1.00</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-muted">Time remaining</span>
                    <span className="text-sm text-white font-mono">2d 14h 32m</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-muted">Backers</span>
                    <span className="text-sm text-white font-semibold">1,247</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-brand-to to-brand-from rounded-full opacity-60 animate-floaty" />
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-brand-from to-brand-to rounded-full opacity-40 animate-floaty" style={{ animationDelay: "1s" }} />
        </div>
      </div>
    </section>
  );
}