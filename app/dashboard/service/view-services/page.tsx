export const dynamic = "force-dynamic";
import NamespaceTabs from "@/app/components/input/NamespaceTabs";
import { PageHeading } from "@/app/components/page-layout/PageHeading";
import { Suspense } from "react";
import Services from "./Services";

async function Page({ searchParams }: { searchParams: any }) {
  return (
    <div>
      <PageHeading text="View services" />

      <div className="flex flex-col space-y-14 mt-8">
        <Suspense fallback={<div>Loading...</div>}>
          <NamespaceTabs baseURL="/dashboard/service/view-services" />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Services namespace={searchParams.namespace} />
        </Suspense>
      </div>
    </div>
  );
}

export default Page;
