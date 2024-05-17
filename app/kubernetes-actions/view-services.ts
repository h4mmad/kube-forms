import { getCoreV1Client } from "../KubernetesClient";

async function viewServices() {
  try {
    const response = await (
      await getCoreV1Client()
    ).listServiceForAllNamespaces();

    const services = response.body;
    console.log("Services:", services.items[0].spec?.selector);
    return services;
  } catch (error) {
    console.error("Error fetching services:", error);
    return null;
  }
}

viewServices();

export default viewServices;
