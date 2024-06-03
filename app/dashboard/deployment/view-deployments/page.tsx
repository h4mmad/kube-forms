import NamespaceTabs from "@/app/components/input/NamespaceTabs";
import InfoBox from "@/app/components/page-layout/InfoBox";
import { PageHeading } from "@/app/components/page-layout/PageHeading";
import KeyValueDisplay from "@/app/components/resource-card/KeyValueDisplay";
import LabelValueDisplay from "@/app/components/resource-card/LabelValueDisplay";
import ResourceCardWrapper from "@/app/components/resource-card/ResourceCardWrapper";
import StatusDisplay from "@/app/components/resource-card/StatusDisplay";
import { getDeployment } from "@/app/kubernetes-actions/get/get-deployments";
import { V1DeploymentList } from "@kubernetes/client-node";

const Page = async ({ searchParams }: { searchParams: any }) => {
  const deployments: V1DeploymentList = await getDeployment(
    searchParams.namespace
  );

  return (
    <div>
      <PageHeading text="View deployment" />
      <InfoBox>
        <p>
          A Deployment allows you to update Pods easily. You describe a desired
          state in a Deployment, and the Deployment Controller changes the
          actual state to the desired state.
        </p>

        <span>
          Learn more about{" "}
          <a
            className="text-blue-500 inline "
            href={
              "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"
            }
          >
            Deployments
          </a>
        </span>
      </InfoBox>
      <NamespaceTabs baseURL="/dashboard/deployment/view-deployments" />
      <div className="flex flex-col space-y-14 mt-8">
        {deployments?.items.map((deployment) => {
          return (
            <ResourceCardWrapper
              title={deployment.metadata?.name}
              key={deployment.metadata?.uid}
            >
              <div className="flex flex-row justify-between mb-4">
                <div className="space-y-4">
                  <LabelValueDisplay
                    title="NAMESPACE"
                    value={deployment.metadata?.namespace}
                  />

                  <LabelValueDisplay
                    title="STRATEGY"
                    value={deployment.spec?.strategy?.type}
                  />
                </div>

                <section>
                  <label className="text-gray-500 text-sm">REPLICAS</label>
                  <div className="p-4 border rounded-lg ">
                    {deployment.status?.unavailableReplicas && (
                      <LabelValueDisplay
                        title=" UNAVAILABLE REPLICAS"
                        value={deployment.status?.unavailableReplicas}
                      />
                    )}

                    <LabelValueDisplay
                      title="AVAILABLE REPLICAS"
                      value={deployment.status?.availableReplicas}
                    />

                    <LabelValueDisplay
                      title="READY REPLICAS"
                      value={deployment.status?.readyReplicas}
                    />
                  </div>
                </section>

                <section>
                  <StatusDisplay
                    statusArray={deployment.status?.conditions}
                    title="STATUS"
                  />
                </section>
              </div>
              <KeyValueDisplay
                objectArray={deployment.spec?.selector.matchLabels}
                title="MATCH LABEL SELECTOR"
              />
            </ResourceCardWrapper>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
