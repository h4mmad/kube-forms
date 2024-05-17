"use server";
import { z } from "zod";
import { createDeploymentScehma } from "../schema";
import { Helper } from "../lib";
import { getAppsV1ApiClient } from "../KubernetesClient";

async function createDeployment(
  deploymentData: z.infer<typeof createDeploymentScehma>
) {
  const helper = new Helper();

  const {
    containerImage,
    containerName,
    deploymentName,
    namespace,
    podLabels,
    ports,
    replicas,
    selector,
  } = deploymentData;

  return (await getAppsV1ApiClient()).createNamespacedDeployment(
    deploymentData.namespace,
    {
      apiVersion: "apps/v1",
      kind: "Deployment",
      metadata: { name: deploymentName, namespace },
      spec: {
        selector: {
          matchLabels: helper.convertKeyValArrToStrStrObj(selector),
        },
        replicas: replicas,
        template: {
          metadata: {
            labels: helper.convertKeyValArrToStrStrObj(podLabels),
          },
          spec: {
            containers: [
              {
                name: containerName,
                image: containerImage,
                ports: ports,
              },
            ],
          },
        },
      },
    }
  );
}

export default createDeployment;
