import type { Metadata } from "next";
import { Footer } from "@/components/home/footer";
import { Navbar } from "@/components/navbar/navbar";
import { TsumuFeatures } from "@/components/tsumu/tsumu-features";
import { TsumuHero } from "@/components/tsumu/tsumu-hero";
import { TsumuProblem } from "@/components/tsumu/tsumu-problem";
import { TsumuShowcase } from "@/components/tsumu/tsumu-showcase";
import { TsumuStory } from "@/components/tsumu/tsumu-story";
import { TsumuSupport } from "@/components/tsumu/tsumu-support";
import { TsumuUpdates } from "@/components/tsumu/tsumu-updates";
import { TsumuVoices } from "@/components/tsumu/tsumu-voices";
import { dictionaries, defaultLocale } from "@/lib/i18n";

const copy = dictionaries[defaultLocale].tsumuPage;

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
};

export default function TsumuPage() {
  return (
    <div className="tsumu-page min-h-full overflow-x-clip bg-background">
      <Navbar />
      <main>
        <TsumuHero />
        <TsumuProblem />
        <TsumuFeatures />
        <TsumuShowcase />
        <TsumuStory />
        <TsumuUpdates />
        <TsumuVoices />
        <TsumuSupport />
      </main>
      <Footer />
    </div>
  );
}
