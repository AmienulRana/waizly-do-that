import Image from "next/image";
import { Inter, Open_Sans, Poppins } from "next/font/google";
import { Navbar } from "@/components/elements";
import { AddTodoBox } from "@/components/pages/home";

const inter = Poppins({ weight: "500", subsets: ["latin"] });

export default function Home() {


  return (
    <section
      className={`px-32 py-[2em] max-w-[1200px] mx-auto ${inter.className}`}
    >
      <Navbar />
      <main className="sticky bg-[#121212] flex flex-col gap-[1em] z-[2] left-0 top-0">
          <AddTodoBox />
      </main>
    </section>
  );
}
