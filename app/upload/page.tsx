"use client";
import { useState } from "react";
import { uploadFileAction } from "../utils/actions";
import Logo from "@/public/logo.svg";
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
  return (
    <div className="flex flex-row w-full h-screen">
      <div className="bg-black w-2/3 h-full flex flex-col justify-start items-start p-40 space-y-12">
        <div className="">
          <p className="text-8xl font-light text-gray-500">Step away from</p>
          <p className="text-9xl font-extrabold text-white mt-4">YAML</p>
        </div>
      </div>
      <div className=" w-1/3 flex flex-col p-10 items-center ">
        <Image src={Logo} alt="logo" width={150} height={150} />

        <p className="text-white text-3xl text-center">Upload kube config</p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 border rounded-xl mt-12 h-screen bg-slate-100"
        >
          <input type="file" onChange={handleFileChange} />
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
};

export default Page;
