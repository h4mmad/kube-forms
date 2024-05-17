"use client";
import { SubmitHandler } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { formAction } from "../../actions";
import NamespaceSelector from "./NamespaceSelector";
import DeploymentName from "./DeploymentName";
import Replicas from "./Replicas";
import { createDeploymentScehma } from "../../schema";
import { useContext } from "react";
import { CreateDeploymentContext } from "../../context/contexts";
import { z } from "zod";
import KeyValueInput from "./KeyValueInput";
import Container from "./Container";
import { Helper } from "@/app/lib";
import ContentWrapper from "@/app/components/page-layout/ContentWrapper";

const submitHandler: SubmitHandler<
  z.infer<typeof createDeploymentScehma>
> = async (data: z.infer<typeof createDeploymentScehma>) => {
  const helper = new Helper();

  const { message, statusCode, bodyMessage, statusMessage } = await formAction(
    data
  );

  if (statusCode >= 200 && statusCode <= 300) {
    toast(`${message}: ${statusCode}`);
  } else {
    toast(`${statusMessage} ${statusCode}: ${bodyMessage}`);
  }

  console.log(statusCode, message, bodyMessage, statusMessage);
};

const CreateDeploymentForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useContext(CreateDeploymentContext);

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <ContentWrapper>
          <DeploymentName />

          <div className="flex flex-row justify-between space-x-12">
            <NamespaceSelector
              register={register("namespace")}
              errorMessage={errors.namespace?.message}
            />
            <Replicas />
          </div>

          <KeyValueInput
            Context={CreateDeploymentContext}
            heading="Selector"
            fieldArrayName="selector"
            description="Via a label selector, when a deployment's selector matches the labels of a Pod, the Pod becomes selected by the deployment."
          />

          <br />

          <p className="text-3xl font-semibold text-black">Pod specification</p>
          <div className="flex flex-col space-y-12">
            <KeyValueInput
              Context={CreateDeploymentContext}
              fieldArrayName="podLabels"
              heading="Pod labels"
              description="Labels are key/value pairs that are attached to objects such as Pods. Labels are intended to be used to specify identifying attributes of objects that are meaningful and relevant to users, but do not directly imply semantics to the core system."
            />
            <Container />
          </div>
        </ContentWrapper>
        <button
          type="submit"
          className="px-4 py-2 mt-24 rounded-full hover:bg-[#413839] bg-black border border-black text-white font-semibold ml-auto w-fit"
        >
          Create deployment
        </button>
      </form>
    </div>
  );
};

export default CreateDeploymentForm;
