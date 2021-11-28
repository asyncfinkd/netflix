import React from "react";
import Footer from "../footer";
import HeroBanner from "./components/hero-banner";
import HeroEnjoy from "./components/hero-enjoy";
import HeroFaq from "./components/hero-faq";
import HeroKids from "./components/hero-kids";
import HeroOffline from "./components/hero-offline";
import HeroWatch from "./components/hero-watch";

export default function Hero() {
  return (
    <>
      <div className="our-story-cards">
        <HeroBanner />
        <HeroEnjoy />
        <HeroOffline />
        <HeroWatch />
        <HeroKids />
        <HeroFaq />
        <Footer />
      </div>
    </>
  );
}
