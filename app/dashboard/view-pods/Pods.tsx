"use server";
import getNamespacedPod from "@/app/kubernetes-actions/view-pods";
import { V1Pod } from "@kubernetes/client-node";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
async function Pods({ namespace }: { namespace: string }) {
  const pods = await getNamespacedPod(namespace);

  return (
    <div className="flex flex-col space-y-8 mt-8">
      {pods.items.map((item: V1Pod, index) => {
        return (
          <div
            key={item?.metadata?.uid}
            className="p-4 rounded-xl border shadow-md w-full bg-white "
          >
            <p className="font-semibold text-lg">{item?.metadata?.name}</p>
            <div className="flex flex-row justify-between items-start mt-4">
              <div className="space-y-4">
                <div>
                  <label className="text-gray-500 text-sm">NAMESPACE</label>
                  <p className="">{item.metadata?.namespace}</p>
                </div>

                <div>
                  <label className="text-gray-500 text-sm">NODE NAME</label>

                  <p className="">{item.spec?.nodeName}</p>
                </div>

                <div>
                  <label className="text-gray-500 text-sm">POD IP</label>
                  <p className="">{item.status?.podIP}</p>
                </div>

                <div>
                  <label className="text-gray-500 text-sm">HOST IP</label>
                  <p className="">{item.status?.hostIP}</p>
                </div>
              </div>
              <div>
                <label className="text-gray-500 text-sm">STATUS</label>
                <div className="p-4 rounded-lg border space-y-4">
                  {item.status?.conditions &&
                    item.status?.conditions.map((condition, idx) => {
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

export default Pods;
