export const dynamic = "force-dynamic";

import InfoBox from "@/app/components/InfoBox";
import { PageHeading } from "@/app/components/PageHeading";
import getNodes from "@/app/kubernetes-actions/view-nodes";
import { Suspense } from "react";

async function Nodes() {
  const data = await getNodes();
  data.forEach((item, idx) => {
    item.metadata?.uid;
  });

  return (
    <div className="mt-4 flex flex-row space-x-10">
      {data?.map((item: any, index: any) => {
        return (
          <div
            key={item.metadata?.uid}
            className="p-4 rounded-xl border shadow-md space-y-6 w-fit bg-white"
          >
            <p className="text-xl font-semibold">{item?.metadata?.name}</p>

            <div className="flex flex-row space-x-6">
              <div>
                <p className="text-gray-500 text-sm">OS</p>
                <p className="font-medium">
                  {item?.status?.nodeInfo?.operatingSystem}
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">OS IMAGE</p>
                <p className="font-medium">{item?.status?.nodeInfo?.osImage}</p>
              </div>
            </div>

            <div>
              <p className="text-gray-500 text-sm">CPU CAPACITY</p>
              <p className="font-medium">{item?.status?.capacity?.cpu}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">MAX MEMORY</p>
              <p className="font-medium">{item?.status?.capacity?.memory}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">PODS CAPACITY</p>
              <p className="font-medium">{item?.status?.capacity?.pods}</p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">KUBELET VERSION</p>
              <p className="font-medium">
                {item?.status?.nodeInfo?.kubeletVersion}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

async function Page() {
  return (
    <div>
      <PageHeading text="Nodes" />
      <InfoBox
        iconSize={56}
        text="Kubernetes runs your workload by placing containers into Pods to run on
        Nodes. A node may be a virtual or physical machine, depending on the
        cluster. Each node is managed by the control plane and contains the
        services necessary to run Pods."
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Nodes />
      </Suspense>
    </div>
  );
}

export default Page;
