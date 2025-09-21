import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import CallToAction from "../components/CallToAction";

export default function Open() {

  return(
     <div>
       <Header />
       <Hero />
       <Features />
       <HowItWorks />
       <CallToAction />
     </div>
  );
}