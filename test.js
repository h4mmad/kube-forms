const k8s = require("@kubernetes/client-node");

async function getClusterEndpoint() {
  try {
    // Load the default Kubernetes config (usually from ~/.kube/config)
    const kc = new k8s.KubeConfig();
    kc.loadFromDefault();

    // Get the cluster API server endpoint from the configuration
    const cluster = kc.getCurrentCluster();
    console.log("Cluster Name:", cluster.name);

    const changeCluster = kc.setCurrentContext("microk8s");
    const cluster2 = kc.getCurrentCluster();
    console.log("Cluster Name:", cluster2.name);
  } catch (err) {
    console.error("Error fetching cluster endpoint:", err);
  }
}

getClusterEndpoint();
