import { Context } from "@kubernetes/client-node";
import { getKubeConfig } from "../../utils/KubernetesClient";

async function getContexts() {
  try {
    const contexts: Context[] = (await getKubeConfig()).getContexts();

    if (contexts) {
      return contexts;
    } else {
      throw Error;
    }
  } catch (err) {
    console.error("Error getting contexts:", err);
  }
}

export default getContexts;
