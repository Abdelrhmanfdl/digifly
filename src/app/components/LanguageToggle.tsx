"use client";
import Image from "next/image";
import React from "react";

export default function LanguageToggle() {
  function handleToggleLang() {}

  return (
    <div
      className="flex flex-row content-center flex-nowrap cursor-pointer"
      onClick={handleToggleLang}
    >
      <span>العربية</span>
      <Image
        alt="egypt-flag"
        src={"/images/egypt-flag.png"}
        width={24}
        height={24}
        className="mx-2 rounded-full"
      />
    </div>
  );
}
