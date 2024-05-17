"use client";
import CreateDeploymentForm from "./CreateDeploymentForm";
import { PageHeading } from "../../components/page-layout/PageHeading";
import CreateDeploymentContextWrapper from "../../context/createDeploymentContextWrapper";
import InfoBox from "@/app/components/page-layout/InfoBox";

function CreateDeploymentPage() {
  return (
    <CreateDeploymentContextWrapper>
      <PageHeading text="Deployment" />
      <InfoBox
        iconSize={56}
        text="A Deployment provides declarative updates for Pods. You describe a
          desired state in a Deployment, and the Deployment Controller changes
          the actual state to the desired state at a controlled rate."
      />
      <CreateDeploymentForm />
    </CreateDeploymentContextWrapper>
  );
}

export default CreateDeploymentPage;
