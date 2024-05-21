"use client";
import { useCallback, useEffect, useState } from "react";
import { uploadFileAction } from "../utils/actions";
import Image from "next/image";
import { MdOutlineUploadFile } from "react-icons/md";
import { useDropzone } from "react-dropzone";
import WhiteLogo from "@/public/white-logo.svg";

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
    <div className="flex flex-col bg-blue-500 p-10 items-center w-screen h-screen">
      <Image src={WhiteLogo} alt="logo" width={150} />
      <div className="mt-32 w-1/2">
        <UploadFileInput />
      </div>
    </div>
  );
};

const UploadFileInput = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>();

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        const file: File = acceptedFiles[0];
        setSelectedFile(file);
      }
    },
    [selectedFile]
  );

  const handleUpload = async () => {
    const formData = new FormData();
    if (selectedFile) formData.append("file", selectedFile);

    const { message } = await uploadFileAction(formData);
    console.log(message);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <div {...getRootProps()} className="w-full">
      <h1 className="text-2xl text-white  text-center mb-8">
        Upload config file
      </h1>
      <input {...getInputProps()} />

      <div className="p-4 rounded-xl border-dashed border border-white text-white flex flex-col justify-center items-center w-full">
        <MdOutlineUploadFile size={56} />

        {selectedFile ? (
          <div className="text-center text-white">
            <p>Selected file:</p>{" "}
            <p className="font-semibold text-2xl">{selectedFile.name}</p>
          </div>
        ) : (
          <p className="text-center mt-12 w-1/2">
            Drag 'n' drop or click to select file
          </p>
        )}
      </div>
      {selectedFile && (
        <div className="flex flex-col justify-center items-center mt-4">
          <button
            onClick={() => {
              setSelectedFile(null);
            }}
            className="border px-4 py-2 rounded-lg text-white w-fit"
          >
            Remove
          </button>
          <button
            onClick={async () => await handleUpload()}
            className="border w-full rounded-lg px-4 py-2 text-blue-500 bg-white font-semibold mt-12"
          >
            Upload
          </button>
        </div>
      )}
    </div>
  );
};

export default Page;

// const [file, setFile] = useState<Blob | string>("");
//   const handleFileChange = (e: any) => {
//     setFile(e.target.files[0]);
//   };
// const handleSubmit = async (e: any) => {
//   e.preventDefault();
//   const formData = new FormData();
//   formData.append("file", file);

//   uploadFileAction(formData);
// };

{
  /* <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-center items-center border p-4 rounded-xl border-dashed">
        <div className=" border-slate-300  flex flex-col items-center rounded-xl p-4">
          <input
            type="file"
            onChange={handleFileChange}
            className="border rounded-xl h-3/4 mt-4"
          />
          <MdOutlineUploadFile
            className="text-white mt-4 text-center"
            size={56}
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 w-full font-bold bg-white rounded-full text-blue-500 mt-4"
        >
          Upload
        </button>
      </div>
    </form> */
}
