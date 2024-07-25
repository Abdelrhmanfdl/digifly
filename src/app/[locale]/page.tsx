"use client";
import BackgroundLightSpot from "@/app/components/BackgroundLightSpot";
import FormSection from "@/app/components/FormSection/FormSection";
import Navbar from "../components/Navbar";
import MapComponent from "../components/MapSection";
import TextEditor from "../components/TextEditorSection/TextEditor";
import { useTranslations } from "next-intl";
import { LANGUAGE } from "../types/Language";

function Home({ params: { locale } }: any) {
  const t = useTranslations("mapMessage");

  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div
        className={`relative flex min-h-screen flex-col items-center justify-between py-24 overflow-x-hidden z-0`}
      >
        <BackgroundLightSpot className="w-[120vw] h-[100vh] left-[20%] top-[-50px] z-0" />

        <div className="contained my-16 z-10">
          <FormSection />
        </div>
        <div className="w-full 2xl:w-10/12 my-24">
          <MapComponent
            position={[30.0616113, 31.3368422]}
            tooltipContent={
              <span>
                {locale === LANGUAGE.AR ? (
                  <span>
                    {t("company")}{" "}
                    <span className="text-digifly-green font-bold">
                      {t("digi")}
                    </span>
                    <span className="font-bold"> {t("fly")} </span>
                    {`${t("welcomes-you")}`}
                  </span>
                ) : (
                  <span>
                    <span className="text-digifly-green font-bold">
                      {t("digi")}
                    </span>
                    <span className="font-bold"> {t("fly")} </span>
                    {`${t("company")} ${t("welcomes-you")}`}
                  </span>
                )}
              </span>
            }
          />
        </div>
        <div className="contained w-full my-10 z-100">
          <TextEditor />
        </div>
      </div>
    </main>
  );
}

export default Home;
