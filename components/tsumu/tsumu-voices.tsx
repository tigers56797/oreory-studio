import { TsumuFaq } from "@/components/tsumu/tsumu-faq";
import { TsumuTestimonials } from "@/components/tsumu/tsumu-testimonials";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function TsumuVoices() {
  return (
    <Section id="tsumu-voices" className="!pt-2 sm:!pt-4">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-8">
          <TsumuTestimonials />
          <TsumuFaq />
        </div>
      </Container>
    </Section>
  );
}
