// import * as y from "yup";
import Zod, { ZodArray, ZodError, number, object, string, z } from "zod";

// A factory function to return schema, so that different references are ensured
const keyValueSchema = () =>
  z
    .array(
      object({
        key: string().min(1, { message: "Should contain atleast 1 element" }),
        value: string().min(1),
      })
    )
    .min(1)
    .refine(
      (array) => {
        const keys = array.map((item) => item.key);
        const uniqueKeys = new Set(keys);
        return keys.length === uniqueKeys.size;
      },
      { message: "Keys should be unique" }
    );

// Define the schema for the object

const keyValObjScehma = z.record(z.string());

export const createDeploymentScehma = z.object({
  deploymentName: string().min(1, { message: "Deployment name is required" }),
  namespace: string().min(1),
  replicas: number()
    .positive()
    .int()
    .min(1)
    .transform((value) => {
      const parsedValue = Number(value);
      if (isNaN(parsedValue)) {
        throw new Error("Replicas must be a valid number");
      }
      return parsedValue;
    }),
  selector: keyValueSchema(),
  podLabels: keyValueSchema(),
  containerName: string().min(1, { message: "Container name is required" }),
  containerImage: string().min(1, {
    message: "Valid image from Docker hub is required",
  }),
  ports: z
    .array(
      object({
        containerPort: number().positive().int().min(1).max(65535),
        protocol: z.union([z.literal("TCP"), z.literal("UDP")]),
      })
    )
    .min(1),
});

export const createServiceSchema = z.object({
  serviceName: string().min(1, { message: "Service name is required" }),
  namespace: string().min(1),
  type: z.union([z.literal("ClusterIP"), z.literal("NodePort")]),
  selector: keyValueSchema(),
  ports: z
    .array(
      object({
        protocol: z.union([z.literal("TCP"), z.literal("UDP")]),
        port: number().positive().int().min(1).max(65535),
        targetPort: number().positive().int(),
      })
    )
    .min(1),
});
