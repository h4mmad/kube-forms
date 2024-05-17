import { getCoreV1Client } from "../KubernetesClient";

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

export default getNamespacedPod;
