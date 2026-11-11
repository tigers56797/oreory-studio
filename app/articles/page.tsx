import type { Metadata } from "next";
import { ArticlesIndex } from "@/components/articles/articles-index";
import { Footer } from "@/components/home/footer";
import { Navbar } from "@/components/navbar/navbar";
import { dictionaries, defaultLocale } from "@/lib/i18n";

const copy = dictionaries[defaultLocale].home.articles;

export const metadata: Metadata = {
  title: copy.title,
  description: copy.description,
};

export default function ArticlesPage() {
  return (
    <div className="min-h-full overflow-x-clip bg-background">
      <Navbar />
      <main>
        <ArticlesIndex />
      </main>
      <Footer />
    </div>
  );
}
