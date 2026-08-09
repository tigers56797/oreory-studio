import { Collaboration } from "@/components/home/collaboration";
import { Films } from "@/components/home/films";
import { Footer } from "@/components/home/footer";
import { Hero } from "@/components/home/hero";
import { Products } from "@/components/home/products";
import { Studio } from "@/components/home/studio";
import { Navbar } from "@/components/navbar/navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Films />
        <Studio />
        <Collaboration />
      </main>
      <Footer />
    </>
  );
}
