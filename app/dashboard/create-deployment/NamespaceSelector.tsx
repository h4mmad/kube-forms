import { Context, ContextType, useContext } from "react";
import {
  CreateDeploymentContext,
  CreateServiceContext,
} from "../../context/contexts";
import clsx from "clsx";
import InfoCardWrapper from "@/app/components/input/CardWrapper";
import InputErrorMessage from "@/app/components/input/InputErrorMessage";
import { z } from "zod";
import { createDeploymentScehma } from "@/app/schema";

type NamespaceSelectorProps = {
  register: any;
  errorMessage: string | undefined;
};

const NamespaceSelector = ({
  register,
  errorMessage,
}: NamespaceSelectorProps) => {
  return (
    <InfoCardWrapper
      heading="Namespace"
      description="A namespace provides a mechanism for isolating groups of resources within a single cluster."
    >
      <input
        {...register}
        type="text"
        placeholder="eg. default"
        className="p-2 mt-4 font-medium rounded-lg border  w-full"
      />
      <InputErrorMessage message={errorMessage} />
    </InfoCardWrapper>
  );
};

export default NamespaceSelector;
