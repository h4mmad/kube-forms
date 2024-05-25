"use client";
import { PageHeading } from "@/app/components/page-layout/PageHeading";
import CreateServiceForm from "./CreateServiceForm";
import CreateServiceContextWrapper from "@/app/context/createServiceContextWrapper";

const Page = () => {
  return (
    <>
      <CreateServiceContextWrapper>
        <CreateServiceForm />
      </CreateServiceContextWrapper>
    </>
  );
};

export default Page;
