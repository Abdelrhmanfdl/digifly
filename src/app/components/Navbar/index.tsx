"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import LanguageToggle from "../LanguageToggle";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import "./styles.css";
import { LANGUAGE } from "../../types/Language";

const Navbar = () => {
  const t = useTranslations("nav");
  const locale = useLocale();

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const linkClasses = (path: string) => {
    let styles =
      pathname.replace(`/${locale}`, "") === path
        ? "text-digifly-green font-[600]"
        : "font-[400]";
    styles += " text-[16px] p-1 hover:text-digifly-green cursor-default";
    return styles;
  };

  return (
    <nav className="bg-trasparent absolute w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-12">
            <div className="md:mr-20">
              <Link
                href="/"
                className="flex items-center py-5 px-1.5 text-gray-700"
              >
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={50}
                  height={50}
                />
              </Link>
            </div>
            <div className="hidden md:flex flex-row items-center justify-between space-x-1 gap-16">
              <Link href="/" className={`${linkClasses("")}`}>
                {t("home")}
              </Link>
              <Link href="/#" className={`${linkClasses("categories")}`}>
                {t("categories")}
              </Link>
              <Link href="/#" className={`${linkClasses("contact-us")}`}>
                {t("contact-us")}
              </Link>
              <Link href="/#" className={`${linkClasses("about")}`}>
                {t("about")}
              </Link>
            </div>
          </div>
          <div className="self-center">
            <LanguageToggle />
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center z-1000">
            <button onClick={toggleMenu} className="mobile-menu-button">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {/* Mobile Menu */}
            <div
              className={`my-2 mx-1 ${isOpen ? "block" : "hidden"} ${
                locale == LANGUAGE.AR ? "left-2" : "right-2"
              } md:hidden absolute top-12 bg-white rounded-sm text-center text-lg `}
            >
              <div className={`drop-down-item`}>
                <Link href="/">{t("home")}</Link>
              </div>
              <div className={`drop-down-item`}>
                <Link href="/#">{t("categories")}</Link>
              </div>
              <div className={`drop-down-item`}>
                <Link href="/#">{t("contact-us")}</Link>
              </div>
              <div className={`drop-down-item`}>
                <Link href="/#">{t("about")}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
