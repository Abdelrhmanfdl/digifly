"use client";
import BackgroundLightSpot from "@/app/components/BackgroundLightSpot";
import FormSection from "@/app/components/FormSection/FormSection";
import Navbar from "../components/Navbar";
import MapComponent from "../components/MapSection";

function Home({ params: { locale } }: any) {
  return (
    <main>
      <div className="relative z-10">
        <Navbar />
      </div>
      <div
        className={`relative flex min-h-screen flex-col items-center justify-between p-24 overflow-x-hidden`}
      >
        <BackgroundLightSpot className="w-[120vw] h-[100vh] left-[20%] top-[-50px] z-0" />
        <div className="w-full z-10">
          <FormSection />
        </div>
        <div className="w-full my-8">
          <MapComponent
            position={[30.0616113, 31.3368422]}
            tooltipContent={
              <span>
                <span className="text-digifly-green font-bold">Digi</span>{" "}
                <span className="font-bold">Fly</span>{" "}
                <span>Company welcomes you</span>
              </span>
            }
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
