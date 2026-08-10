import type { Metadata } from "next";
import { FilmContact } from "@/components/films/film-contact";
import { FilmPricing } from "@/components/films/film-pricing";
import { FilmProcess } from "@/components/films/film-process";
import { FilmServices } from "@/components/films/film-services";
import { FilmTestimonials } from "@/components/films/film-testimonials";
import { FilmWorks } from "@/components/films/film-works";
import { FilmsHero } from "@/components/films/films-hero";
import { Footer } from "@/components/home/footer";
import { Navbar } from "@/components/navbar/navbar";
import { dictionaries, defaultLocale } from "@/lib/i18n";

const copy = dictionaries[defaultLocale].filmsPage;

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
};

export default function FilmsPage() {
  return (
    <>
      <Navbar />
      <main>
        <FilmsHero />
        <FilmServices />
        <FilmWorks />
        <FilmProcess />
        <FilmPricing />
        <FilmTestimonials />
        <FilmContact />
      </main>
      <Footer />
    </>
  );
}
