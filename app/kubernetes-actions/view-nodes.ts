import { getCoreV1Client } from "../KubernetesClient";

async function getNodes() {
  try {
    const response = await (await getCoreV1Client()).listNode();

    return response?.body.items;
  } catch (error) {
    throw error;
  }
}

export default getNodes;
