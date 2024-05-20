"use client";
import uploadAction from "@/app/kubernetes-actions/upload-action";
import { useState } from "react";

function FileUpload() {
  const [file, setFile] = useState<string | Blob>("");
  const [message, setMessage] = useState("");

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
    console.log("handle file change:", e.target.files[0]);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    console.log("handle submit: ", file);

    const message = await uploadAction(formData);

    if (file instanceof File) {
      const text = await file.text();

      localStorage.setItem("config", text);
      const res = await fetch("/api/namespaces", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ config: text }),
      });
      console.log(res.json());
      console.log(text);
    }

    setMessage(message);
  };
  return (
    <>
      <h1>Upload kubeconfig</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" id="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
}

export default FileUpload;
