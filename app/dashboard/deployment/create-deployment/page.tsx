"use client";
import CreateDeploymentForm from "./CreateDeploymentForm";
import CreateDeploymentContextWrapper from "@/app/context/createDeploymentContextWrapper";

function CreateDeploymentPage() {
  return (
    <CreateDeploymentContextWrapper>
      <CreateDeploymentForm />
    </CreateDeploymentContextWrapper>
  );
}

export default CreateDeploymentPage;
