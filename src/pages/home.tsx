import { SideBar } from "../components/home/side-bar";
import { MainContent } from "../components/home/main-content";
import { NavBar } from "../components/home/nav-bar";
import { useProfile } from "../hooks/use-profile";

export const Home = () => {
   // Get access token, decode it and get the user
   const {
      isLoading,
   } = useProfile();

   // If the user is loading, show a loading message
   if (isLoading) return <p className="text-white">Loading profile...</p>

   return (
      <section className="bg-black h-screen flex p-5 gap-x-5 overflow-hidden">
         <NavBar />
         <MainContent />
         <SideBar />
      </section>
   );
};
