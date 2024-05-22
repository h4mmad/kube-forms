"use client";
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
