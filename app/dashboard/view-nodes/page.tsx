export const dynamic = "force-dynamic";

import InfoBox from "@/app/components/page-layout/InfoBox";
import { PageHeading } from "@/app/components/page-layout/PageHeading";
import getNodes from "@/app/kubernetes-actions/view-nodes";
import { Suspense } from "react";
import ContentWrapper from "@/app/components/page-layout/ContentWrapper";
import { V1Node } from "@kubernetes/client-node";

async function Nodes() {
  const data: V1Node[] = await getNodes();

  return (
    <div className="mt-4 flex flex-row space-x-10 items-start">
      {data?.map((item) => {
        return (
          <div
            key={item.metadata?.uid}
            className="p-4 rounded-xl border shadow-md space-y-6 w-full bg-white"
          >
            <div className="">
              <p className="text-xl font-semibold">{item?.metadata?.name}</p>
              {item.status?.addresses && (
                <p className="text-gray-500 text-sm">
                  {item.status?.addresses[0].address}
                </p>
              )}
            </div>
            <div className="flex flex-row justify-between">
              <div className="space-y-6">
                <div>
                  <p className="text-gray-500 text-sm">OS IMAGE</p>
                  <p className="font-medium">
                    {item?.status?.nodeInfo?.osImage}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">CPU</p>
                  <p className="font-medium">{item?.status?.capacity?.cpu}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">MAX MEMORY</p>
                  <p className="font-medium">
                    {item?.status?.capacity?.memory}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">PODS </p>
                  <p className="font-medium">{item?.status?.capacity?.pods}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">KUBELET VERSION</p>
                  <p className="font-medium">
                    {item?.status?.nodeInfo?.kubeletVersion}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-gray-500 text-sm">STATUS</p>
                <div className="p-4 border rounded-lg space-y-4 shadow-md">
                  {item.status?.conditions?.map((item, idx) => {
                    return (
                      <div key={idx}>
                        <p className="text-medium">{item.type}</p>
                        <p className="text-gray-500 text-sm">{item.status}</p>
                        <p className="text-gray-500 text-sm"> {item.message}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
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
        text="Kubernetes runs your workload by placing containers into Pods to run on
        Nodes. A node may be a virtual or physical machine, depending on the
        cluster. Each node is managed by the control plane and contains the
        services necessary to run Pods."
      />
      <ContentWrapper>
        <Suspense
          fallback={
            <div className="space-x-4">
              <NodeCardSkeleton count={3} />
            </div>
          }
        >
          <Nodes />
        </Suspense>
      </ContentWrapper>
    </div>
  );
}

const NodeCardSkeleton = ({ count }: { count: number }) => {
  const skeletons = Array.from({ length: count }, (_, index) => (
    <div
      key={index}
      className="w-full h-fit bg-slate-100 space-y-6 rounded-xl animate-pulse p-6"
    >
      <div className="w-2/3 h-4 bg-slate-200 animate-pulse " />
      <div className="w-1/4 h-4 bg-slate-300 animate-pulse " />
      <div className="w-1/3 h-4 bg-slate-200 animate-pulse " />
    </div>
  ));

  return <div className="h-screen">{skeletons}</div>;
};

export default Page;
