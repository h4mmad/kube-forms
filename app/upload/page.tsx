"use client";
import { useState } from "react";
import { uploadFileAction } from "../utils/actions";

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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default Page;
