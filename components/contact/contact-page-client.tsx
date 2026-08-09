"use client";

import { FilmContact } from "@/components/films/film-contact";
import { useLocale } from "@/components/providers/locale-provider";

export function ContactPageClient() {
  const { dictionary } = useLocale();

  return (
    <div className="pt-16 sm:pt-20">
      <FilmContact
        title={dictionary.contactPage.title}
        description={dictionary.contactPage.description}
      />
    </div>
  );
}
