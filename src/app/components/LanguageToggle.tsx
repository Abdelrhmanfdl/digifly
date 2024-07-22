"use client";
import Image from "next/image";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { LANGUAGE } from "../types/Language";

export default function LanguageToggle() {
  const t = useTranslations("nav");
  const currentLocale = useLocale();
  const router = useRouter();
  const currentPathname = usePathname();

  const changeLanguage = (newLocale: string) => {
    const segments = currentPathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <div
      className="flex flex-row content-center flex-nowrap cursor-pointer"
      onClick={() =>
        changeLanguage(currentLocale == LANGUAGE.EN ? LANGUAGE.AR : LANGUAGE.EN)
      }
    >
      {currentLocale == LANGUAGE.EN ? (
        <>
          <span>عربى</span>
          <Image
            alt="egypt-flag"
            src={"/images/egypt-flag.png"}
            width={24}
            height={24}
            className="mx-2 rounded-full"
          />
        </>
      ) : (
        <>
          <span>En</span>
          <Image
            alt="uk-flag"
            src={"/images/uk-flag.png"}
            width={24}
            height={24}
            className="mx-2 rounded-full"
          />
        </>
      )}
    </div>
  );
}
