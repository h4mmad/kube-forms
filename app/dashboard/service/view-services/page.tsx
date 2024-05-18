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
            <div key={item.metadata?.uid}>
              <div className="bg-blue-500 w-full h-3 rounded-t-xl" />
              <div
                key={item.metadata?.uid}
                className="p-5 rounded-b-xl border shadow-md space-y-4 w-full bg-white"
              >
                <div className="flex flex-col justify-start items-baseline">
                  <p className="font-medium text-2xl">{item.metadata?.name}</p>
                  <p className="mt-2 ">{item.spec?.type}</p>
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

                <div className="rounded-xl p-4 border flex flex-row justify-between">
                  <div>
                    <label className="text-gray-500 text-sm">NAMESPACE</label>
                    <p className="mt-2 font-medium">
                      {item.metadata?.namespace}
                    </p>
                  </div>

                  <div>
                    <label className="text-gray-500 text-sm">SELECTOR</label>
                    <div className="flex flex-row space-x-5 mt-2">
                      {item.spec?.selector &&
                        Object.keys(item.spec?.selector).map((key, index) => {
                          return (
                            <p
                              key={index}
                              className="px-4 py-2 border w-fit rounded-full font-medium"
                            >
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
