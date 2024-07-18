import Image from "next/image";
import BackgroundLightSpot from "./components/BackgroundLightSpot";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-24 overflow-x-hidden">
      <BackgroundLightSpot className="w-[120vw] h-[100vh] left-[20%] top-[-50px] z-100" />
    </main>
  );
}
