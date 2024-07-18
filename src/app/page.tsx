import { Provider } from "react-redux";
import BackgroundLightSpot from "./components/BackgroundLightSpot";
import FormSection from "./components/FormSection/FormSection";
import StoreProvidor from "./providors/StoreProvidor";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-24 overflow-x-hidden">
      <StoreProvidor>
        <BackgroundLightSpot className="w-[120vw] h-[100vh] left-[20%] top-[-50px] z-0" />
        <div className="w-full z-10">
          <FormSection />
        </div>
      </StoreProvidor>
    </main>
  );
}
