"use client";
import InfoBox from "@/app/components/page-layout/InfoBox";
import { PageHeading } from "@/app/components/page-layout/PageHeading";

import CreateServiceForm from "./CreateServiceForm";
import CreateServiceContextWrapper from "@/app/context/createServiceContextWrapper";

const Page = () => {
  return (
    <>
      <PageHeading text="Service" />

      <InfoBox
        text="In Kubernetes, a Service is a method for exposing an application that is running as one or more Pods in your cluster to the network."
        iconSize={56}
      />

      <CreateServiceContextWrapper>
        <CreateServiceForm />
      </CreateServiceContextWrapper>
    </>
  );
};

export default Page;
