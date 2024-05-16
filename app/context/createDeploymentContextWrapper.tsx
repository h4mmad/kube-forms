import { useForm } from "react-hook-form";
import { CreateDeploymentContext } from "./contexts";
import { createDeploymentScehma } from "../schema";
import { ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type CreateDeploymentContextWrapperProps = {
  children: ReactNode;
};

const CreateDeploymentContextWrapper = ({
  children,
}: CreateDeploymentContextWrapperProps) => {
  const { register, control, watch, formState, handleSubmit } = useForm<
    z.infer<typeof createDeploymentScehma>
  >({
    resolver: zodResolver(createDeploymentScehma),
  });

  return (
    <CreateDeploymentContext.Provider
      value={{ register, control, watch, formState, handleSubmit }}
    >
      {children}
    </CreateDeploymentContext.Provider>
  );
};

export default CreateDeploymentContextWrapper;
