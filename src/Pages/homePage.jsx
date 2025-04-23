import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CategorySection from '../components/CategorySection';
import ValueBanner from '../components/ValueBanner';
import MoreFeaturesSection from '../components/MoreFeaturesSection';
import Footer from '../components/Footer';


export default function Home() {
    return (
      <div className="font-sans">
        <Navbar />
        <HeroSection />
        <CategorySection/>
        <ValueBanner/>
        <MoreFeaturesSection/>
        < Footer />
        
      </div>
    );
  }