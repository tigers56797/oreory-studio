"use client";

import { HeroBanner } from "@/components/home/hero-banner";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-10 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-16">
      <Container>
        <HeroBanner />
      </Container>
    </section>
  );
}
