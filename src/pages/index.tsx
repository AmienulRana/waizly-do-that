import Image from "next/image";
import { Inter, Open_Sans, Poppins } from "next/font/google";
import { Navbar } from "@/components/elements";
import { AddTodoBox } from "@/components/pages/home";
import Tabs from "@/components/elements/Tabs";
import { useState } from "react";
import { tabsTodo } from "@/constant";

const inter = Poppins({ weight: "500", subsets: ["latin"] });

export type tabs = "All" | "Pending" | "Completed";

export default function Home() {
  return (
    <section
      className={`px-32 py-[2em] max-w-[1200px] mx-auto ${inter.className}`}
    >
      <Navbar />
      <main className="sticky bg-[#121212] flex flex-col gap-[1em] z-[2] left-0 top-0">
        <AddTodoBox />
        <Tabs labels={tabsTodo} classNameWrapper="grid grid-cols-3" />
      </main>
    </section>
  );
}
