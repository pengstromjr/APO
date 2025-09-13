"use client";

import { useEffect, useState } from "react";
import { Share2, Clock, Users, TrendingUp } from "lucide-react";

interface FeaturedDropProps {
  avgDays: number;
}

export default function FeaturedDrop({ avgDays }: FeaturedDropProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 18
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
              days--;
              if (days < 0) {
                // Reset for demo purposes
                return { days: 2, hours: 14, minutes: 32, seconds: 18 };
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check out this Assetra drop!',
          text: 'Own a piece of iconic culture with this featured collectible.',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <section id="featured" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Featured Drop</h2>
          <p className="section-sub mx-auto">
            Don't miss out on this week's exclusive collectible. Limited shares available.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Image and Details */}
              <div className="space-y-6">
                <div className="relative">
                  <div className="w-full h-80 bg-gradient-to-br from-brand-from/30 to-brand-to/30 rounded-xl border border-white/20 flex items-center justify-center overflow-hidden">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-brand-from to-brand-to rounded-full mx-auto mb-4 opacity-60" />
                      <span className="text-text-muted">Vintage Concert Poster</span>
                    </div>
                  </div>
                  {/* Live indicator */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2 bg-red-500/20 backdrop-blur px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                    <span className="text-xs text-white font-medium">LIVE</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    The Beatles - Abbey Road Sessions
                  </h3>
                  <p className="text-text-muted mb-4">
                    Original 1969 recording session poster from Abbey Road Studios. 
                    One of only 100 ever printed, authenticated and verified.
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-brand-from/20 text-brand-from px-3 py-1 rounded-full text-sm font-medium">
                      Music
                    </span>
                    <span className="bg-brand-to/20 text-brand-to px-3 py-1 rounded-full text-sm font-medium">
                      Vintage
                    </span>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Authenticated
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column - Stats and Actions */}
              <div className="space-y-6">
                {/* Progress Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted">Funding Progress</span>
                    <span className="text-white font-semibold">67% complete</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-brand-from to-brand-to h-3 rounded-full transition-all duration-1000 ease-out shadow-glowViolet" 
                      style={{ width: "67%" }}
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-white">$6,700</div>
                      <div className="text-sm text-text-muted">Raised</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">$10,000</div>
                      <div className="text-sm text-text-muted">Goal</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">1,247</div>
                      <div className="text-sm text-text-muted">Backers</div>
                    </div>
                  </div>
                </div>

                {/* Countdown Timer */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center justify-center space-x-1 mb-3">
                    <Clock size={16} className="text-brand-from" />
                    <span className="text-sm text-text-muted">Time remaining</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    {[
                      { value: timeLeft.days, label: "Days" },
                      { value: timeLeft.hours, label: "Hours" },
                      { value: timeLeft.minutes, label: "Min" },
                      { value: timeLeft.seconds, label: "Sec" }
                    ].map((item, index) => (
                      <div key={index} className="bg-white/5 rounded-lg p-2">
                        <div className="text-lg font-bold text-white font-mono">
                          {item.value.toString().padStart(2, '0')}
                        </div>
                        <div className="text-xs text-text-muted">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Share Price Chips */}
                <div className="space-y-3">
                  <span className="text-sm text-text-muted">Share Options</span>
                  <div className="flex flex-wrap gap-2">
                    {[1, 5, 10, 25].map((shares) => (
                      <button
                        key={shares}
                        className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-from/50 rounded-lg px-4 py-2 transition group"
                      >
                        <div className="text-sm font-semibold text-white">
                          {shares} share{shares > 1 ? 's' : ''}
                        </div>
                        <div className="text-xs text-text-muted group-hover:text-brand-from transition">
                          ${shares}.00
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="btn btn-gradient w-full py-3 text-lg">
                    Back this drop
                  </button>
                  <div className="flex gap-3">
                    <button 
                      onClick={handleShare}
                      className="btn btn-light flex-1 py-2 text-sm"
                    >
                      <Share2 size={16} className="mr-2" />
                      Share
                    </button>
                    <div className="flex items-center space-x-1 text-xs text-text-muted">
                      <TrendingUp size={14} />
                      <span>Avg return: {avgDays}x</span>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div className="flex items-center space-x-2">
                    <Users size={16} className="text-brand-from" />
                    <div>
                      <div className="text-sm font-semibold text-white">1,247</div>
                      <div className="text-xs text-text-muted">Total backers</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} className="text-brand-to" />
                    <div>
                      <div className="text-sm font-semibold text-white">{avgDays} days</div>
                      <div className="text-xs text-text-muted">Avg. hold time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}