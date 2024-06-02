"use server";
import { revalidatePath } from "next/cache";
import { getCoreV1Client } from "../../utils/KubernetesClient";

async function getNamespacedPod(namespace: string = "default") {
  try {
    const response = await (
      await getCoreV1Client()
    ).listNamespacedPod(namespace);

    return response?.body;
  } catch (error) {
    throw error;
  }
}

export async function getSelectedNamespaceAction(formData: FormData) {
  const namespace = formData.get("namespace") as string;
  revalidatePath("/dashboard/view-pods", "page");
  return namespace;
}

export default getNamespacedPod;
