import NamespaceTabs from "@/app/components/input/NamespaceTabs";
import { getDeployment } from "@/app/kubernetes-actions/get-deployments";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Page = async ({ searchParams }: { searchParams: any }) => {
  const deployments = await getDeployment(searchParams.namespace);

  return (
    <div>
      <NamespaceTabs baseURL="/dashboard/deployment/view-deployments" />
      <div className="flex flex-col space-y-14 mt-8">
        {deployments?.items.map((deployment) => {
          return (
            <div key={deployment.metadata?.uid}>
              <div className="bg-gradient-to-r from-blue-500 via-sky-500 to-emerald-500 w-full h-2 rounded-t-xl shadow-md" />
              <div className="p-4 rounded-b-xl border shadow-md w-full bg-white ">
                <p className="font-semibold text-xl">
                  {deployment.metadata?.name}
                </p>
                <div>
                  <div className="flex flex-row justify-between">
                    <div className="space-y-4">
                      <div>
                        <label className="text-gray-500 text-sm">
                          NAMESPACE
                        </label>
                        <p className="">{deployment.metadata?.namespace}</p>
                      </div>
                      <div>
                        <label className="text-gray-500 text-sm">
                          STRATEGY
                        </label>
                        <p className="">{deployment.spec?.strategy?.type} </p>
                      </div>

                      <label className="text-gray-500 text-sm">REPLICAS</label>
                      <div className="p-4 border rounded-lg ">
                        {deployment.status?.unavailableReplicas && (
                          <div>
                            <label className="text-gray-500 text-sm">
                              UNAVAILABLE REPLICAS
                            </label>
                            <p className="">
                              {deployment.status?.unavailableReplicas}
                            </p>
                          </div>
                        )}
                        <div>
                          <label className="text-gray-500 text-sm">
                            AVAILABLE REPLICAS
                          </label>
                          <p className="">
                            {deployment.status?.availableReplicas}
                          </p>
                        </div>
                        <div>
                          <label className="text-gray-500 text-sm">
                            READY REPLICAS
                          </label>
                          <p className="">{deployment.status?.readyReplicas}</p>
                        </div>
                      </div>

                      <label className="text-gray-500 text-sm">STATUS</label>
                      <div className="p-4 rounded-lg border space-y-4">
                        {deployment.status?.conditions &&
                          deployment.status?.conditions.map(
                            (condition, idx) => {
                              return (
                                <div
                                  key={idx}
                                  className="flex flex-row space-x-3 items-center"
                                >
                                  <p>{condition.type}</p>

                                  {condition.status === "True" ? (
                                    <FaCheck className="text-green-500 text-xl" />
                                  ) : (
                                    <FaXmark className="text-red-500 text-xl" />
                                  )}
                                </div>
                              );
                            }
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
