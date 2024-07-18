import BackgroundLightSpot from "./components/BackgroundLightSpot";
import FormSection from "./components/FormSection/FormSection";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-24 overflow-x-hidden">
      <BackgroundLightSpot className="w-[120vw] h-[100vh] left-[20%] top-[-50px] z-0" />
      <div className="w-full z-10">
        <FormSection />
      </div>
    </main>
  );
}
