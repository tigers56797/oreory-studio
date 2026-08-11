"use client";

import { ContactYearBackdrop } from "@/components/contact/contact-year-backdrop";
import { ProfessionalProfile } from "@/components/contact/professional-profile";
import { FilmContact } from "@/components/films/film-contact";
import { useLocale } from "@/components/providers/locale-provider";

export function ContactPageClient() {
  const { dictionary } = useLocale();

  return (
    <div className="relative overflow-hidden pt-16 sm:pt-20">
      <ContactYearBackdrop />
      <div className="relative z-10">
        <FilmContact
          title={dictionary.contactPage.title}
          description={dictionary.contactPage.description}
          between={<ProfessionalProfile />}
        />
      </div>
    </div>
  );
}
