"use server";
import { getAppsV1ApiClient } from "../utils/KubernetesClient";

export async function getDeployment(namespace: string = "default") {
  try {
    const res = await (
      await getAppsV1ApiClient()
    ).listNamespacedDeployment(namespace);
    return res?.body;
  } catch (err) {
    throw err;
  }
}
