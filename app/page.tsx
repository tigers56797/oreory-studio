import { Articles } from "@/components/home/articles";
import { Collaboration } from "@/components/home/collaboration";
import { Footer } from "@/components/home/footer";
import { Hero } from "@/components/home/hero";
import { Products } from "@/components/home/products";
import { Stats } from "@/components/home/stats";
import { Studio } from "@/components/home/studio";
import { Testimonials } from "@/components/home/testimonials";
import { Navbar } from "@/components/navbar/navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Studio />
        <Stats />
        <Testimonials />
        <Articles />
        <Collaboration />
      </main>
      <Footer variant="dark" />
    </>
  );
}
