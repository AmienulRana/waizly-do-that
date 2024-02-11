import Image from "next/image";
import { Inter, Open_Sans, Poppins } from "next/font/google";

const inter = Poppins({ weight: "500", subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Hello</h1>
    </main>
  );
}
