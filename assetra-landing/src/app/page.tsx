"use client";

import { useEffect, useMemo, useState } from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import FeaturedDrop from "@/components/FeaturedDrop";
import HowItWorks from "@/components/HowItWorks";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Page() {
  const [avgDays, setAvgDays] = useState(3);
  
  useEffect(() => {
    let n = 2; 
    let dir = 1;
    const id = setInterval(() => { 
      n += dir; 
      if (n >= 4) dir = -1; 
      if (n <= 2) dir = 1;
      setAvgDays(n);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero />
      <FeaturedDrop avgDays={avgDays} />
      <HowItWorks />
      <Waitlist />
      <Footer />
    </main>
  );
}