import { useForm } from "react-hook-form";
import { CreateServiceContext } from "./contexts";
import { createServiceSchema } from "../utils/schema";
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
    z.infer<typeof createServiceSchema>
  >({
    resolver: zodResolver(createServiceSchema),
  });

  return (
    <CreateServiceContext.Provider
      value={{ register, control, watch, formState, handleSubmit }}
    >
      {children}
    </CreateServiceContext.Provider>
  );
};

export default CreateDeploymentContextWrapper;
