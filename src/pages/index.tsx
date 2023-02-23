import { Inter } from "@next/font/google";
import Link from "next/link";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isBlackHovered, setIsBlackHovered] = useState(false);
  const [isWhiteHovered, setIsWhiteHovered] = useState(false);

  return (
    <>
      <div className="h-screen w-screen flex text-2xl md:text-6xl hover:cursor-pointer text-center ">
        <Link
          href="/cadastro"
          className={`${
            isBlackHovered ? "bg-[#2ECC40] text-white" : "bg-[#B7E3FF]"
          } h-screen w-[50vw] flex items-center border-r-2 border-black `}
          onMouseEnter={() => setIsBlackHovered(true)}
          onMouseLeave={() => setIsBlackHovered(false)}
        >
          Registre sua Felicidade
        </Link>
        <Link href={"/allGratitude"}>
          <div
            className={`${
              isBlackHovered ? " bg-[#B7E3FF]" : "bg-[#2ECC40] text-white"
            } h-screen w-[50vw] flex items-center  border-r-2 border-black `}
            onMouseEnter={() => setIsWhiteHovered(true)}
          >
            Felicidades Compartilhadas
          </div>
        </Link>
      </div>
    </>
  );
}
