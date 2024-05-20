"use client";
import { useEffect, useState } from "react";
import { uploadFileAction } from "../utils/actions";
import WhiteLogo from "@/public/white-logo.svg";
import Image from "next/image";
const Page = () => {
  const [file, setFile] = useState<Blob | string>("");
  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    uploadFileAction(formData);
  };
  const words = [
    "YAML",
    "CLI",
    "kubectl",
    "Hassle",
    "Debugging",
    "Frustration",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animation, setAnimation] = useState("animate-slideInFromLeft");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation("animate-slideOutToRight");
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setAnimation("animate-slideInFromLeft");
      }, 500); // Match the duration of slideOut animation
    }, 3000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-row w-full h-screen">
      <div className="bg-blue-500 w-2/3 flex flex-col justify-start items-start p-10 h-screen">
        <Image src={WhiteLogo} alt="logo" width={150} height={150} />

        <div className="mt-36">
          <p className="text-6xl font-light text-white">Step away from</p>
          <p
            className={`text-9xl font-extrabold text-white mt-4 transition-all ${animation}`}
          >
            {words[currentWordIndex]}
          </p>
        </div>

        <p className="text-white mt-auto">Made with ❤️ by Hammad</p>
      </div>
      <div className="bg-slate-100 w-1/3 flex flex-col">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col  h-screen">
            {/* <input
              type="file"
              onChange={handleFileChange}
              className="border rounded-xl h-3/4 mt-4"
            /> */}
            <div className="border border-slate-300  h-full bg-slate-200 flex flex-col justify-center items-center">
              <p className="text-slate-500 text-wrap text-center w-3/4">
                Drag 'n' drop Kubernetes configuration file, or click to select
              </p>
            </div>
            <button
              type="submit"
              className=" py-4 w-full bg-slate-300 text-slate-600 font-medium"
            >
              Upload config
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
