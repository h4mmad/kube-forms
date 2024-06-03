"use client";
import { PageHeading } from "@/app/components/page-layout/PageHeading";
import CreateDeploymentForm from "./CreateDeploymentForm";
import CreateDeploymentContextWrapper from "@/app/context/createDeploymentContextWrapper";
import InfoBox from "@/app/components/page-layout/InfoBox";

function CreateDeploymentPage() {
  return (
    <CreateDeploymentContextWrapper>
      <PageHeading text="Create deployment" />
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
      <CreateDeploymentForm />
    </CreateDeploymentContextWrapper>
  );
}

export default CreateDeploymentPage;
