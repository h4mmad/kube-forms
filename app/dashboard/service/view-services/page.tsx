export const dynamic = "force-dynamic";
import NamespaceTabs from "@/app/components/input/NamespaceTabs";
import KeyValueDisplay from "@/app/components/resource-card/KeyValueDisplay";
import LabelValueDisplay from "@/app/components/resource-card/LabelValueDisplay";
import ResourceCardWrapper from "@/app/components/resource-card/ResourceCardWrapper";
import getCurrentCluster from "@/app/kubernetes-actions/get/get-current-cluster";

import viewNamespacedService from "@/app/kubernetes-actions/get/get-services";
import Link from "next/link";

import { Suspense } from "react";

const Service = async ({ namespace }: { namespace: string }) => {
  const data = await viewNamespacedService(namespace);
  const cluster = await getCurrentCluster();

  return (
    <div className="flex flex-col space-y-16">
      <NamespaceTabs baseURL="/dashboard/service/view-services" />
      {data?.items.map((item) => {
        if (item.spec?.selector) {
          const keys = Object.keys(item.spec?.selector);
          const values = Object.values(item.spec?.selector);

          return (
            <ResourceCardWrapper
              title={item.metadata?.name}
              key={item.metadata?.uid}
            >
              <p className="bg-slate-100 rounded-full px-4 py-2 text-sm mt-2 w-fit">
                {item.spec?.type}
              </p>
              <div className="flex flex-row justify-between">
                <div>
                  {item.spec?.ports?.map((port, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-start space-x-20 mt-4 border shadow-md rounded-xl p-4 w-fit"
                      >
                        {port.nodePort && cluster?.server && (
                          <div>
                            <label className="text-gray-500 text-sm">
                              NODE PORT
                            </label>
                            <p>{port.nodePort}</p>
                            <Link
                              className="text-blue-500 underline"
                              target="_blank"
                              href={`http://${
                                new URL(cluster?.server).hostname
                              }:${port.nodePort}`}
                            >
                              Visit
                            </Link>
                          </div>
                        )}

                        <LabelValueDisplay
                          title="TARGET PORT"
                          value={port.targetPort}
                        />

                        <LabelValueDisplay
                          title="PROTOCOL"
                          value={port.protocol}
                        />

                        <LabelValueDisplay title="PORT" value={port.port} />
                      </div>
                    );
                  })}
                </div>
                <LabelValueDisplay
                  title="NAMESPACE"
                  value={item.metadata?.namespace}
                />
              </div>

              <KeyValueDisplay
                objectArray={item.spec?.selector}
                title="SELECTOR"
              />
            </ResourceCardWrapper>
          );
        }
      })}
    </div>
  );
};

const Page = ({ searchParams }: { searchParams: any }) => {
  return (
    <>
      <Suspense>
        <Service namespace={searchParams.namespace} />
      </Suspense>
    </>
  );
};

export default Page;
