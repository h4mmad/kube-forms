"use server";
import { z } from "zod";
import { createDeploymentScehma, createServiceSchema } from "./schema";
import createDeployment from "./kubernetes-actions/create-deployment";
import { Helper } from "./lib";
import createService from "./kubernetes-actions/create-service";

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

export const configFormAction = async (formData: FormData) => {
  console.log(formData);
};
