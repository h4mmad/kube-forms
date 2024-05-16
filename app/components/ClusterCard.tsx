import useSWR from "swr";
import { fetcher } from "../lib";

const ClusterCard = () => {
  const { data, error } = useSWR("/api/server", fetcher);
  console.log(data);

  if (error)
    return <div className="p-3 rounded-lg border mt-6">Failed to load</div>;
  if (!data)
    return <div className="p-3 rounded-lg border mt-6">Loading...</div>;

  return (
    <div className="p-3 rounded-lg border mt-6">
      <p className="text-black font-semibold">{data?.clusterName}</p>
      <p className="text-nowrap text-sm text-gray-500">{data?.clusterServer}</p>
    </div>
  );
};

export default ClusterCard;
