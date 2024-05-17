import { getKubeConfig } from "../KubernetesClient";

async function getClusterEndpoint() {
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

export default getClusterEndpoint;
