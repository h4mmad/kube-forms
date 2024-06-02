import { getKubeConfig } from "../../utils/KubernetesClient";

async function getCurrentCluster() {
  try {
    const cluster = (await getKubeConfig()).getCurrentCluster();
    if (cluster) {
      return { name: cluster.name, server: cluster.server };
    } else {
    }
  } catch (err) {
    console.error("Error fetching cluster endpoint:", err);
  }
}

export default getCurrentCluster;
