"use server";
import { z } from "zod";
import { createServiceSchema } from "../schema";
import { Helper } from "../lib";
import { CoreV1ApiClient } from "../KubernetesClient";

async function createService(data: z.infer<typeof createServiceSchema>) {
  const helper = new Helper();
  const { namespace, ports, selector, serviceName, type } = data;

  return CoreV1ApiClient.createNamespacedService(namespace, {
    apiVersion: "v1",
    kind: "Service",
    metadata: {
      name: serviceName,
    },
    spec: {
      selector: helper.convertKeyValArrToStrStrObj(selector),
      ports: ports,
      type: type,
    },
  });
}

export default createService;
