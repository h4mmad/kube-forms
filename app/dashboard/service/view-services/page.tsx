export const dynamic = "force-dynamic";
import NamespaceTabs from "@/app/components/input/NamespaceTabs";

import viewNamespacedService from "@/app/kubernetes-actions/view-services";

import { Suspense } from "react";

const Service = async ({ namespace }: { namespace: string }) => {
  const data = await viewNamespacedService(namespace);

  return (
    <div className="flex flex-col space-y-16">
      <NamespaceTabs baseURL="/dashboard/service/view-services" />
      {data?.items.map((item) => {
        if (item.spec?.selector) {
          const keys = Object.keys(item.spec?.selector);
          const values = Object.values(item.spec?.selector);

          return (
            <div key={item.metadata?.uid} className="w-full">
              <div className="bg-gradient-to-r from-blue-500 via-sky-500 to-emerald-500 w-full h-2 rounded-t-xl shadow-md" />
              <div
                key={item.metadata?.uid}
                className="p-5 rounded-b-xl border shadow-md space-y-4 w-full bg-white"
              >
                <div className="flex flex-col justify-between items-start">
                  <p className="font-semibold text-lg">{item.metadata?.name}</p>
                  <p className="bg-gray-100 rounded-full px-4 py-2 text-sm mt-2">
                    {item.spec?.type}
                  </p>
                </div>

                <div>
                  {item.spec?.ports?.map((port, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-20 mt-4 border rounded-xl p-4"
                      >
                        {port.nodePort && (
                          <div>
                            <label className="text-gray-500 text-sm">
                              NODE PORT
                            </label>
                            <p>{port.nodePort}</p>
                          </div>
                        )}
                        <div>
                          <label className="text-gray-500 text-sm">
                            TARGET PORT
                          </label>
                          <p className="font-medium">{port.targetPort}</p>
                        </div>
                        <div>
                          <label className="text-gray-500 text-sm">
                            PROTOCOL
                          </label>
                          <p className="font-medium">{port.protocol}</p>
                        </div>

                        <div>
                          <label className="text-gray-500 text-sm">PORT</label>
                          <p className="font-medium">{port.port}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div>
                  <label className="text-gray-500 text-sm">NAMESPACE</label>
                  <p className="mt-2 font-medium">{item.metadata?.namespace}</p>
                </div>

                <div>
                  <label className="text-gray-500 text-sm">SELECTOR</label>
                  <div className="flex flex-row flex-wrap mt-2">
                    {item.spec?.selector &&
                      Object.keys(item.spec?.selector).map((key, index) => {
                        return (
                          <p
                            key={index}
                            className="px-4 py-2 border w-fit rounded-full font-medium mr-2 mt-2"
                          >
                            {keys[index]} : {values[index]}
                          </p>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
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
