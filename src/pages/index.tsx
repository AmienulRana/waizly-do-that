import Image from "next/image";
import { Inter, Open_Sans, Poppins } from "next/font/google";

const inter = Poppins({ weight: "500", subsets: ["latin"] });

export default function Home() {
  return (
    <section
      className={`px-32 py-[2em] max-w-[1200px] mx-auto ${inter.className}`}
    >
      <h1>Hello</h1>
    </section>
  );
}
