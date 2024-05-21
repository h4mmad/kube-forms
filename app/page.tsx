"use client";
import WhiteLogo from "../public/white-logo.svg";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import demo from "@/public/demo.gif";

const Page = () => {
  const words = ["YAML", "CLI", "kubectl", "Hassle"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animation, setAnimation] = useState("animate-slideInFromLeft");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation("animate-slideOutToRight");
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setAnimation("animate-slideInFromLeft");
      }, 500); // Match the duration of slideOut animation
    }, 5000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-row bg-blue-500 p-10 items-center  w-screen h-screen">
      <div className="flex flex-col items-start h-full w-full">
        <Image src={WhiteLogo} alt="logo" width={150} height={150} />

        <div className="mt-36 flex flex-row items-center">
          <div>
            <p className="text-6xl font-light text-white">Step away from</p>
            <p
              className={`text-9xl font-extrabold text-white mt-4 transition-all ${animation}`}
            >
              {words[currentWordIndex]}
            </p>
          </div>
        </div>

        <p className="text-white mt-auto">Made with ❤️ in Penang</p>
      </div>

      <Link href="/upload">
        <p className="border px-8 py-4 rounded-full text-white hover:bg-white hover:text-blue-500 no-wrap font-semibold text-xl">
          Get started
        </p>
      </Link>
    </div>
  );
};

export default Page;
