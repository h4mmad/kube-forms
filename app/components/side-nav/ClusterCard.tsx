import getClusterEndpoint from "@/app/kubernetes-actions/get-cluster";
import { Suspense } from "react";

const Info = async () => {
  const data = await getClusterEndpoint();
  return (
    <div className="p-3 rounded-lg border mt-6">
      <p className="text-black font-semibold">{data?.name}</p>
      <p className="text-nowrap text-sm text-gray-500">{data?.server}</p>
    </div>
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
