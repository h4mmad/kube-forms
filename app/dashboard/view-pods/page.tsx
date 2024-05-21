export const dynamic = "force-dynamic";

import InfoBox from "@/app/components/page-layout/InfoBox";
import { PageHeading } from "@/app/components/page-layout/PageHeading";
import getNamespacedPod from "@/app/kubernetes-actions/view-pods";
import { V1Pod } from "@kubernetes/client-node";
import { Suspense } from "react";

async function Pods() {
  const pods = await getNamespacedPod();

  return (
    <div className="flex flex-col space-y-8 mt-8">
      {pods.items.map((item: V1Pod, index: any) => {
        return (
          <div
            key={item?.metadata?.uid}
            className="p-4 rounded-xl border shadow-md space-y-6 w-full bg-white"
          >
            <div>
              <p className="font-semibold text-lg">{item?.metadata?.name}</p>
            </div>
            <div>
              <label className="text-gray-500 text-sm">NAMESPACE</label>
              <p className="">{item.metadata?.namespace}</p>
            </div>

            <div>
              <label className="text-gray-500 text-sm">NODE NAME</label>

              <p className="">{item.spec?.nodeName}</p>
              <p className="">{item.status?.podIP}</p>
              <p className="">{item.status?.hostIP}</p>
              <p className="">{item.status?.reason}</p>
              <p className="">{item.status?.qosClass}</p>
              <p className="">{item.status?.resize}</p>
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
      <PageHeading text="Pods" />

      <InfoBox
        iconSize={56}
        text="Pods are the smallest deployable units of computing that you can create
        and manage in Kubernetes. A Pod is a group of one or more containers,
        with shared storage and network resources, and a specification for how
        to run the containers."
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Pods />
      </Suspense>
    </div>
  );
}

export default Page;
