"use client";

import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/Data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
         <FloatingNav 
         navItems={navItems}  
         />
         
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />

      </div> 
   </main>
  );
}
