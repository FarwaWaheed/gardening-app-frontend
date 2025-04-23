import React from 'react';
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center px-8 bg-green-50">
      <HeroLeft />
      <HeroRight />
    </section>
  );
}
