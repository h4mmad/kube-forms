"use client";
import { PageHeading } from "@/app/components/page-layout/PageHeading";
import CreateDeploymentForm from "./CreateDeploymentForm";
import CreateDeploymentContextWrapper from "@/app/context/createDeploymentContextWrapper";
import InfoBox from "@/app/components/page-layout/InfoBox";

function CreateDeploymentPage() {
  return (
    <CreateDeploymentContextWrapper>
      <CreateDeploymentForm />
    </CreateDeploymentContextWrapper>
  );
}

export default CreateDeploymentPage;
