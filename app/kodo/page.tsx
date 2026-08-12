import type { Metadata } from "next";
import { Footer } from "@/components/home/footer";
import { KodoCta } from "@/components/kodo/kodo-cta";
import { KodoExperience } from "@/components/kodo/kodo-experience";
import { KodoFeatures } from "@/components/kodo/kodo-features";
import { KodoHero } from "@/components/kodo/kodo-hero";
import { KodoProblem } from "@/components/kodo/kodo-problem";
import { KodoTeams } from "@/components/kodo/kodo-teams";
import { KodoUpdates } from "@/components/kodo/kodo-updates";
import { Navbar } from "@/components/navbar/navbar";
import { dictionaries, defaultLocale } from "@/lib/i18n";

const copy = dictionaries[defaultLocale].kodoPage;

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
};

export default function KodoPage() {
  return (
    <div className="kodo-page min-h-full overflow-x-clip">
      <Navbar />
      <main>
        <KodoHero />
        <KodoProblem />
        <KodoFeatures />
        <KodoExperience />
        <KodoTeams />
        <KodoUpdates />
        <KodoCta />
      </main>
      <Footer />
    </div>
  );
}
