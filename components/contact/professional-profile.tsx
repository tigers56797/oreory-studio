"use client";

import Image from "next/image";
import { useState } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import { profileMedia, profileSkillKeys } from "@/lib/content/profile";

export function ProfessionalProfile() {
  const { dictionary } = useLocale();
  const copy = dictionary.contactPage.profile;
  const [photoFailed, setPhotoFailed] = useState(!profileMedia.hasPhoto);
  const showPhoto = profileMedia.hasPhoto && !photoFailed;

  return (
    <div className="mx-auto w-full max-w-[960px]">
      <article className="profile-card group relative overflow-hidden rounded-[2rem] border border-border bg-[#fbfaf7] px-6 py-10 shadow-soft transition-[box-shadow,transform] duration-500 ease-[var(--ease-out)] hover:shadow-card sm:rounded-[2.25rem] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
        <div aria-hidden className="profile-aurora pointer-events-none absolute inset-0" />

        <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="profile-in profile-avatar relative h-[104px] w-[104px] overflow-hidden rounded-full border border-transparent bg-transparent shadow-none transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.02] sm:h-[112px] sm:w-[112px]">
            {showPhoto ? (
              <Image
                src={profileMedia.photo}
                alt={copy.photoAlt}
                fill
                className="object-contain"
                sizes="112px"
                onError={() => setPhotoFailed(true)}
              />
            ) : (
              <div
                aria-hidden
                className="flex h-full w-full items-center justify-center bg-[linear-gradient(160deg,#f4f0ea_0%,#ebe4d8_100%)] text-[2rem] font-semibold tracking-tight text-foreground/55 sm:text-[2.15rem]"
              >
                {profileMedia.monogram}
              </div>
            )}
          </div>

          <h3 className="profile-in profile-in--2 mt-6 text-[1.35rem] font-semibold tracking-[-0.02em] text-foreground sm:text-[1.5rem]">
            {copy.name}
          </h3>
          <p className="profile-in profile-in--3 mt-1.5 text-sm text-foreground-muted sm:text-[0.95rem]">
            {copy.role}
          </p>

          <p className="profile-in profile-in--4 mt-8 max-w-xl whitespace-pre-line text-[1.05rem] leading-8 font-medium tracking-[-0.015em] text-foreground sm:mt-9 sm:text-[1.2rem] sm:leading-9">
            {copy.statement}
          </p>

          <ul className="profile-skills mt-9 flex max-w-xl flex-wrap items-center justify-center gap-2.5 sm:mt-10 sm:gap-3">
            {profileSkillKeys.map((key, index) => (
              <li key={key} className={`profile-in profile-in--${index + 5}`}>
                <span
                  className={`profile-pill profile-pill--${index + 1} inline-flex rounded-full border border-border bg-white/85 px-3.5 py-2 text-[12px] font-medium tracking-wide text-foreground-muted shadow-soft sm:px-4 sm:text-[13px]`}
                >
                  {copy.skills[key]}
                </span>
              </li>
            ))}
          </ul>

          <p className="profile-in profile-in--11 mt-9 max-w-xl whitespace-pre-line text-[0.95rem] leading-7 text-foreground-muted sm:mt-10 sm:text-base sm:leading-8">
            {copy.bio}
          </p>

          <p className="profile-in profile-in--12 profile-brand mt-10 max-w-md whitespace-pre-line text-[1.15rem] leading-8 font-semibold tracking-[-0.02em] text-foreground sm:mt-12 sm:text-[1.35rem] sm:leading-9">
            {copy.brandLine}
          </p>
        </div>
      </article>
    </div>
  );
}
