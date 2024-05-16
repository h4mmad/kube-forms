const k8s = require("@kubernetes/client-node");

async function getClusterEndpoint() {
  try {
    // Load the default Kubernetes config (usually from ~/.kube/config)
    const kc = new k8s.KubeConfig();
    kc.loadFromDefault();

    // Get the cluster API server endpoint from the configuration
    const cluster = await kc.getCurrentCluster();

    if (cluster) {
      console.log("Cluster Name:", cluster.name);
      console.log("Cluster API Server Endpoint:", cluster.server);
      return { clusterName: cluster.name, clusterServer: cluster.server };
    } else {
      console.log("No cluster configuration found.");
    }
  } catch (err) {
    console.error("Error fetching cluster endpoint:", err);
  }
}

export default getClusterEndpoint;
