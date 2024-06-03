"use server";
import KeyValueDisplay from "@/app/components/resource-card/KeyValueDisplay";
import LabelValueDisplay from "@/app/components/resource-card/LabelValueDisplay";
import ResourceCardWrapper from "@/app/components/resource-card/ResourceCardWrapper";
import StatusDisplay from "@/app/components/resource-card/StatusDisplay";
import getNamespacedPod from "@/app/kubernetes-actions/get/get-pods";
import { V1Pod } from "@kubernetes/client-node";

async function Pods({ namespace }: { namespace: string }) {
  const pods = await getNamespacedPod(namespace);

  return (
    <>
      {namespace && (
        <div>
          <p className="text-gray-500 text-sm">
            To view pods using kubectl in the{" "}
            <code className="bg-gray-200 text-red-600 px-1 rounded">
              {namespace}
            </code>{" "}
            namespace, use the following command:
          </p>
          <pre className="overflow-x-auto  p-4 bg-gray-800 text-gray-400 rounded-xl mt-2 text-sm">
            <code>
              {`kubectl get pods -n ${namespace} -o custom-columns=POD_NAME:.metadata.name,NODE:.spec.nodeName,STATUS:.status.phase,POD_IP:.status.podIP,NAMESPACE:.metadata.namespace,HOST_IP:.status.hostIP,LABELS:.metadata.labels
`}
            </code>
          </pre>
        </div>
      )}
      {pods.items.map((item: V1Pod) => {
        return (
          <ResourceCardWrapper
            title={item?.metadata?.name}
            key={item?.metadata?.uid}
          >
            <div className="flex flex-row justify-between items-start">
              <div className="space-y-4">
                <LabelValueDisplay
                  title="NAMESPACE"
                  value={item.metadata?.namespace}
                />
                <LabelValueDisplay
                  title="NODE NAME"
                  value={item.spec?.nodeName}
                />
                <LabelValueDisplay title="POD IP" value={item.status?.podIP} />
                <LabelValueDisplay
                  title="HOST IP"
                  value={item.status?.hostIP}
                />
              </div>

              <StatusDisplay
                statusArray={item.status?.conditions}
                title="STATUS"
              />
            </div>
            <section className="mt-4">
              <KeyValueDisplay
                objectArray={item.metadata?.labels}
                title="LABELS"
              />
            </section>
          </ResourceCardWrapper>
        );
      })}
    </>
  );
}

export default Pods;
