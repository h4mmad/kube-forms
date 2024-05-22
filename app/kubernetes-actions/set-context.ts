"use server";
import fs from "fs";
import { getKubeConfig } from "../utils/KubernetesClient";
import { revalidatePath, revalidateTag } from "next/cache";

async function setContext(formData: FormData) {
  try {
    const kc = await getKubeConfig();
    const context = formData.get("context") as string;

    const cluster = kc.getCurrentCluster();
    console.log("Cluster Name:", cluster?.name);

    kc.setCurrentContext(context);
    console.log(context);
    console.log("context switched successfully");

    fs.writeFile("public/uploads/kubeconfig", kc.exportConfig(), (error) => {
      console.log(error);
    });

    const cluster2 = kc.getCurrentCluster();
    console.log("Cluster Name:", cluster2?.name);

    revalidatePath("/dashboard/view-pods", "page");
    revalidatePath("/dashboard/view-nodes", "page");
    revalidatePath("/dashboard", "layout");

    return { message: `Context switched to ${context} successfully` };
  } catch (err) {
    console.error("Error setting context:", err);
  }
}

export default setContext;
