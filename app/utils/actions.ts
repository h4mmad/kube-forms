"use server";
import { z } from "zod";
import { createDeploymentScehma, createServiceSchema } from "./schema";
import createDeployment from "../kubernetes-actions/create/create-deployment";
import { Helper } from "./lib";
import createService from "../kubernetes-actions/create/create-service";
import fs from "node:fs/promises";
import path from "node:path";

export const formAction = async (
  formData: z.infer<typeof createDeploymentScehma>
) => {
  try {
    const helper = new Helper();
    console.log("from server: ", formData);

    const response = await createDeployment(formData);
    return {
      statusCode: response.response.statusCode,
      message: response.response.statusMessage,
    };
  } catch (e: any) {
    console.log(e.response.body.message);
    return {
      statusCode: e.response.statusCode,
      statusMessage: e.response.statusMessage,
      bodyMessage: e.response.body.message,
    };
  }
};

export const createServiceFormAction = async (
  formData: z.infer<typeof createServiceSchema>
) => {
  try {
    console.log("from server: ", formData);
    const response = await createService(formData);

    if (response?.body?.spec?.ports)
      console.log(
        "from server action: ",
        response?.body?.spec?.ports[0]?.nodePort
      );
    return {
      statusCode: response.response.statusCode,
      message: response.response.statusMessage,
    };
  } catch (e: any) {
    console.log(e.response.body.message);
    return {
      statusCode: e.response.statusCode,
      statusMessage: e.response.statusMessage,
      bodyMessage: e.response.body.message,
    };
  }
};

export async function uploadFileAction(formData: FormData) {
  try {
    const file = formData.get("file") as File;
    const uploadDir = path.join(process.cwd(), "/public/uploads/");
    const fileName = file.name;

    // Check if the uploaded file is a kubeconfig file
    const isKubeconfig = fileName.toLowerCase() === "kubeconfig";
    if (!isKubeconfig) {
      return { success: false, message: "Only kubeconfig files are allowed" };
    }

    // If it's a kubeconfig file, replace any existing kubeconfig file
    if (isKubeconfig) {
      // Check if kubeconfig file already exists
      const existingKubeconfigPath = path.join(uploadDir, fileName);
      const kubeconfigExists = await fs
        .access(existingKubeconfigPath)
        .then(() => true)
        .catch(() => false);

      // If kubeconfig file exists, delete it
      if (kubeconfigExists) {
        await fs.unlink(existingKubeconfigPath);
      }
    }

    // Ensure the upload directory exists
    await fs.mkdir(uploadDir, { recursive: true });

    // Read file contents
    const buffer = await file.arrayBuffer();

    // Write file to the uploads directory
    const filePath = path.join(uploadDir, fileName);
    await fs.writeFile(filePath, Buffer.from(buffer));

    return { success: true, message: "File uploaded successfully" };
  } catch (error) {
    console.error("Error uploading file:", error);
    return { success: false, message: "Error uploading file" };
  }
}
