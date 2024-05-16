import { CoreV1ApiClient } from "../KubernetesClient";

async function getNamespacedPod(namespace: string = "kube-system") {
  try {
    const response = await CoreV1ApiClient.listNamespacedPod(namespace);

    return response?.body;
  } catch (error) {
    throw error;
  }
}

export default getNamespacedPod;
