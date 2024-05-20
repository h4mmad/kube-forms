"use server";
import { z } from "zod";
import { createDeploymentScehma, createServiceSchema } from "./schema";
import createDeployment from "../kubernetes-actions/create-deployment";
import { Helper } from "./lib";
import createService from "../kubernetes-actions/create-service";
import fs from "node:fs/promises";
import { revalidatePath } from "next/cache";
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
  const file = formData.get("file") as File;
  const uploadDir = path.join(process.cwd(), "/public/uploads/");

  await fs.access(uploadDir).catch(async () => {
    await fs.mkdir(uploadDir, { recursive: true });
  });
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  const filePath = path.join(process.cwd(), "/public/uploads/", file.name);
  await fs.writeFile(filePath, buffer);

  revalidatePath("/");
}
