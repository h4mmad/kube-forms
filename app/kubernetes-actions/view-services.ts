import { getCoreV1Client } from "../utils/KubernetesClient";

async function viewNamespacedService(namespace: string) {
  try {
    const response = await (
      await getCoreV1Client()
    ).listNamespacedService(namespace);

    const services = response.body;

    return services;
  } catch (error) {
    console.error("Error fetching services:", error);
    return null;
  }
}

export default viewNamespacedService;
