import ContentWrapper from "@/app/components/page-layout/ContentWrapper";
import { PageHeading } from "@/app/components/page-layout/PageHeading";
import viewServices from "@/app/kubernetes-actions/view-services";
import { Suspense } from "react";

const Service = async () => {
  const data = await viewServices();

  return (
    <div className="flex flex-col space-y-12">
      {data?.items.map((item, index) => {
        console.log(item.spec?.ports);
        if (item.spec?.selector) {
          const keys = Object.keys(item.spec?.selector);
          const values = Object.values(item.spec?.selector);

          return (
            <div>
              <div className="bg-blue-500 w-full h-3 rounded-t-xl" />
              <div
                key={item.metadata?.uid}
                className="p-5 rounded-b-xl border shadow-md space-y-4 w-full bg-white"
              >
                <div className="flex flex-row justify-between items-center">
                  <p className="font-medium text-2xl">{item.metadata?.name}</p>
                  <p className="px-4 mt-2 py-2 rounded-full border  w-fit">
                    {item.spec?.type}
                  </p>
                </div>
                <div>
                  {item.spec?.ports?.map((port, index) => {
                    return (
                      <div className="flex flex-row items-center space-x-20 border rounded-lg p-4">
                        {port.nodePort && (
                          <div>
                            <label className="text-gray-500 text-sm">
                              NODE PORT
                            </label>
                            <p className="text-lg">{port.nodePort}</p>
                          </div>
                        )}
                        <div>
                          <label className="text-gray-500 text-sm">
                            TARGET PORT
                          </label>
                          <p className="text-lg">{port.targetPort}</p>
                        </div>
                        <div>
                          <label className="text-gray-500 text-sm">
                            PROTOCOL
                          </label>
                          <p className="text-lg">{port.protocol}</p>
                        </div>

                        <div>
                          <label className="text-gray-500 text-sm">PORT</label>
                          <p className="text-lg">{port.port}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="rounded-lg p-4 border flex flex-row justify-between">
                  <div>
                    <label className="text-gray-500 text-sm">NAMESPACE</label>
                    <p className="mt-2">{item.metadata?.namespace}</p>
                  </div>

                  <div>
                    <label className="text-gray-500 text-sm">SELECTOR</label>
                    <div className="flex flex-row space-x-5 mt-2">
                      {item.spec?.selector &&
                        Object.keys(item.spec?.selector).map((key, index) => {
                          return (
                            <p className="px-4 py-2 border w-fit rounded-full">
                              {keys[index]} : {values[index]}
                            </p>
                          );
                        })}
                    </div>
                  </div>
                </div>

                {/* <p>{item.spec?.clusterIP}</p> */}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

const Page = () => {
  return (
    <>
      <PageHeading text="Services" />
      <ContentWrapper>
        <Suspense>
          <Service />
        </Suspense>
      </ContentWrapper>
    </>
  );
};

export default Page;
