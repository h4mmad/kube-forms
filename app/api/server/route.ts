import getClusterEndpoint from "@/app/kubernetes-actions/get-cluster";

export async function GET(request: Request) {
  const data = await getClusterEndpoint();

  return Response.json({
    clusterName: data?.clusterName,
    clusterServer: data?.clusterServer,
  });
}
