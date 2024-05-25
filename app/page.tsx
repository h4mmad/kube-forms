"use client";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import SS from "@/public/SS.png";
import SS2 from "@/public/SS2.png";
import SS3 from "@/public/SS3.png";
import SS4 from "@/public/SS4.png";

import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
  const words = [SS, SS2, SS3, SS4];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animation, setAnimation] = useState("animate-slideInFromTop");

  useEffect(() => {
    const interval = setInterval(() => {
      // Set slideOutToBottom animation
      setAnimation("animate-slideOutToBottom");

      // Wait for the slideOutToBottom animation to complete before updating the word and resetting animation
      setTimeout(() => {
        // Update current word index
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);

        // Reset animation to slideInFromTop for the next word
        setAnimation("animate-slideInFromTop");
      }, 1000); // Wait for the slideOutToBottom animation to complete (1 second)
    }, 5000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, [words.length]);
  return (
    <div className="bg-white w-screen h-screen p-6 flex flex-col justify-between overflow-hidden">
      <div className="flex flex-row justify-between items-center">
        <Image src={Logo} alt="logo" width={140} height={140} />
        <Link
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-3 py-3 font-medium"
          href={"/upload"}
        >
          Get started
        </Link>
      </div>

      <div className="flex justify-between  items-center">
        <div className="w-2/3 flex flex-col items-start">
          <p className="text-blue-500 font-bold text-8xl ml-0 p-0">
            Kubernetes
          </p>
          <p className="text-black font-medium text-6xl  ">interaction</p>
          <p className="text-black font-medium text-4xl mt-4 ">made simpler</p>

          <p className="text-wrap mt-16 w-2/3  text-gray-500 p-4 rounded-xl border">
            A dashboard designed to simplify configuration and viewing of
            resources without the use of command line tools such as kubectl or
            YAML configuration files.
          </p>
        </div>
        <div
          className={`w-1/2 rounded-xl mt-auto shadow-2xl border overflow-hidden transition-all ${animation}`}
        >
          <Image
            src={words[currentWordIndex]}
            alt=""
            className={`rounded-xl `}
          />
        </div>
      </div>
      <p className="text-gray-400">Created by Hammad</p>
    </div>
  );
};

export default Page;
