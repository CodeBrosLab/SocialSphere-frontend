import Logo from "../../assets/logo-gradient.png";
import Profile from "../../assets/profile-picture.png";
import FeedIcon from "@mui/icons-material/Feed";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import { useNavContext } from "../../store/nav-context";
import { useEffect, useState } from "react";
import { useUserContext } from "../../store/user-context";
import { PostModal } from "./post-modal";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";

const navItems = [
   {
      icon: <FeedIcon />,
      label: "Feed",
      path: "/",
   },
   // {
   //    icon: <MessageIcon />,
   //    label: "Messages",
   //    path: "/messages",
   // },
   {
      icon: <GroupIcon />,
      label: "Discover",
      path: "/discover",
   },
   {
      icon: <PersonIcon />,
      label: "My Profile",
      path: "/myprofile",
   },
];

export const NavBar = () => {
   const context = useNavContext();
   const [active, setActive] = useState(context.currentPage);
   const [isPostModalOpen, setIsPostModalOpen] = useState(false);
   const { user, setUser } = useUserContext();
   const navigate = useNavigate();
   
   useEffect(() => {
      setActive(context.currentPage);
   }, [context]);

   return (
      <section className="relative flex flex-col h-full justify-between flex-1">
         <section className="space-y-10">
            <header className="flex flex-col gap-y-5 p-10">
               <section className="flex items-center justify-center">
                  <img src={Logo} alt="Logo" className="w-20" />
                  <img src={Profile} alt="Profile" className="w-20 ml-[-1em]" />
               </section>
               <section className="flex flex-col items-center text-center">
                  <h1 className="text-white text-3xl font-medium">
                     {user?.profileName}
                  </h1>
                  <p className="text-secondaryGray text-lg">@{user?.displayName}</p>
               </section>
            </header>
            <section className="flex flex-col gap-y-5 w-full">
               {navItems.map((item, index) => (
                  <section
                     onClick={() => {
                        setActive(item.label.replace(" ", "").toLowerCase());
                        context.setCurrentPage(item.label.replace(" ", "").toLowerCase());
                     }}
                     className={`${
                        active === item.label.replace(" ", "").toLowerCase()
                           ? "bg-white text-black rounded-2xl"
                           : "bg-black text-white"
                     } flex items-center gap-x-5 w-full p-5 hover:cursor-pointer`}
                     key={index}
                  >
                     {item.icon}
                     <p className="text-xl font-medium">{item.label}</p>
                  </section>
               ))}
               <section
                  onClick={() => setIsPostModalOpen(true)}
                  className="flex items-center gap-x-5 w-full p-5 hover:cursor-pointer bg-primary text-white rounded-2xl hover:bg-primary/90 transition-colors"
               >
                  <AddIcon />
                  <p className="text-xl font-medium">Post</p>
               </section>
            </section>
         </section>
         <section className="pl-10">
            <div className="w-[80%] blur-xl 2xl:blur-2xl aspect-square rounded-full horizontal-gradient-primary" />
         </section>
         <section className="flex flex-col gap-y-5 w-full">
            <section 
               onClick={() => {
                  localStorage.removeItem("accessToken");
                  localStorage.removeItem("refreshToken");
                  setUser(null);
                  navigate("/sign-in");
               }}
               className="text-white flex items-center gap-x-5 w-full p-5 hover:cursor-pointer 
               hover:bg-red-500/20 hover:text-red-400 transition-all duration-300 rounded-2xl"
            >
               <LogoutIcon />
               <p>Logout</p>
            </section>
         </section>
         <PostModal open={isPostModalOpen} onClose={() => setIsPostModalOpen(false)} />
      </section>
   );
};
