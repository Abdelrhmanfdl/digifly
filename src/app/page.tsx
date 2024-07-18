import { Provider } from "react-redux";
import BackgroundLightSpot from "./components/BackgroundLightSpot";
import FormSection from "./components/FormSection/FormSection";
import store from "./redux/usersStore";
import UserProvidor from "./providors/UserProvidor";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-24 overflow-x-hidden">
      <UserProvidor>
        <BackgroundLightSpot className="w-[120vw] h-[100vh] left-[20%] top-[-50px] z-0" />
        <div className="w-full z-10">
          <FormSection />
        </div>
      </UserProvidor>
    </main>
  );
}
