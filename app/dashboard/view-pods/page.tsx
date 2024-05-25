export const dynamic = "force-dynamic";
import InfoBox from "@/app/components/page-layout/InfoBox";
import { PageHeading } from "@/app/components/page-layout/PageHeading";
import { Suspense } from "react";
import Pods from "./Pods";
import NamespaceTabs from "@/app/components/input/NamespaceTabs";

async function Page({ searchParams }: { searchParams: any }) {
  return (
    <div>
      <PageHeading text="Pods" />

      <InfoBox>
        <>
          <p>
            Pods are the smallest deployable units of computing that you can
            create and manage in Kubernetes.
          </p>
          <p>
            A Pod is a group of one or more containers, with shared storage and
            network resources, and a specification for how to run the
            containers.
          </p>
        </>
      </InfoBox>

      <Suspense fallback={<div>Loading...</div>}>
        <NamespaceTabs baseURL="/dashboard/view-pods" />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Pods namespace={searchParams.namespace} />
      </Suspense>
    </div>
  );
}

export default Page;
