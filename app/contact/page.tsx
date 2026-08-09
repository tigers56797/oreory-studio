import type { Metadata } from "next";
import { ContactPageClient } from "@/components/contact/contact-page-client";
import { Footer } from "@/components/home/footer";
import { Navbar } from "@/components/navbar/navbar";
import { dictionaries, defaultLocale } from "@/lib/i18n";

const copy = dictionaries[defaultLocale].contactPage;

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactPageClient />
      </main>
      <Footer />
    </>
  );
}
