import getClusterEndpoint from "@/app/kubernetes-actions/get/get-current-cluster";

export async function GET(request: Request) {
  const data = await getClusterEndpoint();

  return Response.json({
    clusterName: data?.name,
    clusterServer: data?.server,
  });
}
