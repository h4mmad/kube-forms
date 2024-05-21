"use server";
import getContexts from "@/app/kubernetes-actions/get-contexts";
import getCurrentCluster from "@/app/kubernetes-actions/get-current-cluster";
import setContext from "@/app/kubernetes-actions/set-context";
import { Suspense } from "react";

const Info = async () => {
  const data = await getCurrentCluster();

  return (
    <div className="p-3 rounded-lg border mt-6">
      <p className="text-black font-semibold">{data?.name}</p>
      <p className="text-nowrap text-sm text-gray-500">{data?.server}</p>
    </div>
  );
};

export const ContextSelector = async () => {
  "use server";
  const contexts = await getContexts();

  return (
    <form action={setContext}>
      <div className="flex flex-row space-x-2">
        <select
          id="context"
          name="context"
          className="w-full p-3 rounded-lg border bg-transparent text-sm font-medium"
        >
          {contexts?.map((context, idx) => {
            return (
              <option key={idx} value={context.name}>
                {context.name}
              </option>
            );
          })}
        </select>
        <button className="p-3 rounded-lg  border text-sm ">Change</button>
      </div>
    </form>
  );
};

const ClusterCard = () => {
  return (
    <Suspense
      fallback={
        <div className="p-3 rounded-lg border mt-6 space-y-2 w-48">
          <div className="w-3/4 bg-slate-200 animate-pulse h-4" />
          <div className="w-full bg-slate-200 animate-pulse h-4" />
        </div>
      }
    >
      <Info />
    </Suspense>
  );
};

export default ClusterCard;
