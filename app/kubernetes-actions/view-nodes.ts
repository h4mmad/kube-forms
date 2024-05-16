import { CoreV1ApiClient } from "../KubernetesClient";

async function getNodes() {
  try {
    const response = await CoreV1ApiClient.listNode();

    return response?.body.items;
  } catch (error) {
    throw error;
  }
}

export default getNodes;
