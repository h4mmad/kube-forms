import { useContext } from "react";
import { CreateDeploymentContext } from "../../context/contexts";
import clsx from "clsx";
import InputBox from "@/app/components/input/InputBox";
import CardWrapper from "@/app/components/input/CardWrapper";

const DeploymentName = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useContext(CreateDeploymentContext);
  return (
    <CardWrapper
      descriptionTextColor="text-gray-500"
      headingTextColor="text-black"
      description="A deployment name should be unique within a namespace"
      heading="Deployment name"
    >
      <InputBox
        register={register("deploymentName")}
        errorMessage={errors.deploymentName?.message}
        placeholder="nginx-deployment"
        type="text"
      />
    </CardWrapper>
  );
};
export default DeploymentName;
