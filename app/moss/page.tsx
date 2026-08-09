import type { Metadata } from "next";
import { Footer } from "@/components/home/footer";
import { MossAnnouncement } from "@/components/moss/moss-announcement";
import { MossCta } from "@/components/moss/moss-cta";
import { MossFeatures } from "@/components/moss/moss-features";
import { MossHero } from "@/components/moss/moss-hero";
import { MossShowcase } from "@/components/moss/moss-showcase";
import { MossUpdates } from "@/components/moss/moss-updates";
import { Navbar } from "@/components/navbar/navbar";
import { dictionaries, defaultLocale } from "@/lib/i18n";

const copy = dictionaries[defaultLocale].mossPage;

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
};

export default function MossPage() {
  return (
    <div className="moss-page min-h-full">
      <Navbar />
      <main>
        <MossHero />
        <MossAnnouncement />
        <MossFeatures />
        <MossShowcase />
        <MossUpdates />
        <MossCta />
      </main>
      <Footer />
    </div>
  );
}
