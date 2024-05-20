"use server";
import { CoreV1Api, KubeConfig } from "@kubernetes/client-node";
import { redirect } from "next/dist/server/api-utils";
// import { setKubeConfig } from "../util/KubernetesClient";
const k8s = require("@kubernetes/client-node");

async function uploadAction(formData: FormData) {
  const file = formData.get("file");
  if (file instanceof File) {
    const text = await file.text();
    // setKubeConfig(text);

    return `File processed successfully`;
  }
  return "error";
}

export default uploadAction;
