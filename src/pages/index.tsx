import Image from "next/image";
import { Inter, Open_Sans, Poppins } from "next/font/google";
import { Navbar } from "@/components/elements";

const inter = Poppins({ weight: "500", subsets: ["latin"] });

export default function Home() {
  return (
    <section
      className={`px-32 py-[2em] max-w-[1200px] mx-auto ${inter.className}`}
    >
      <Navbar />
    </section>
  );
}
