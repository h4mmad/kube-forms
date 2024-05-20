"use server";
const k8s = require("@kubernetes/client-node");
import fs from "fs";
import { redirect } from "next/navigation";

import { AppsV1Api, CoreV1Api, KubeConfig } from "@kubernetes/client-node";

export async function getKubeConfig() {
  try {
    const kc: KubeConfig = new k8s.KubeConfig();

    const filePath = "public/uploads/kubeconfig";

    if (!fs.existsSync(filePath)) throw Error;

    kc.loadFromFile("public/uploads/kubeconfig");

    console.log("Loaded from file");
    // pingKubernetesApiServer(kc);
    return kc;
  } catch (err) {
    redirect("/upload");
    console.error("Error loading kube config file:", err);
    throw err;
  }
}

export async function getApiServerAddress() {
  // const kc = await getKubeConfig();
  const kc = await getKubeConfig();
  const currentContext = kc.getCurrentContext();
  const context = kc.getContextObject(currentContext);

  if (context && context.cluster) {
    const cluster = kc.getCluster(context.cluster);
    if (cluster && cluster.server) {
      return cluster.server;
    } else {
      throw new Error("Cluster server not found in kubeconfig.");
    }
  } else {
    throw new Error("Current context or cluster not found in kubeconfig.");
  }
}

export async function getAppsV1ApiClient() {
  try {
    // const kc = await getKubeConfig();
    const kc = await getKubeConfig();
    const AppsV1ApiClient: AppsV1Api = kc.makeApiClient(k8s.AppsV1Api);
    return AppsV1ApiClient;
  } catch (err) {
    throw err;
  }
}

export async function getMetricsClient() {
  try {
    // const kc = await getKubeConfig();
    const kc = await getKubeConfig();
    const metricsClient = new k8s.Metrics(kc);
    return metricsClient;
  } catch (err) {
    throw err;
  }
}

export async function getCoreV1Client() {
  try {
    // const kc = await getKubeConfig();
    const kc = await getKubeConfig();
    const CoreV1ApiClient: CoreV1Api = kc.makeApiClient(k8s.CoreV1Api);
    return CoreV1ApiClient;
  } catch (err) {
    throw err;
  }
}

// k8s.topPods(CoreV1ApiClient, MetricsClient, "kube-system").then((pods: any) => {
//   const podsColumns = pods.map((pod: any) => {
//     return {
//       POD: pod.Pod.metadata.name,
//       "CPU(cores)": pod.CPU.CurrentUsage,
//       "MEMORY(bytes)": pod.Memory.CurrentUsage,
//     };
//   });
//   console.log("TOP PODS");
//   console.table(podsColumns);
// });
