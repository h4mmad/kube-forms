import {
  Control,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import { createContext } from "react";
import { createDeploymentScehma, createServiceSchema } from "../schema";
import { z } from "zod";

type ContextType = {
  register: UseFormRegister<z.infer<typeof createDeploymentScehma>>;
  control: Control<z.infer<typeof createDeploymentScehma>>;
  watch: UseFormWatch<z.infer<typeof createDeploymentScehma>>;
  formState: FormState<z.infer<typeof createDeploymentScehma>>;
  handleSubmit: UseFormHandleSubmit<z.infer<typeof createDeploymentScehma>>;
};

type DeploymentContextType = {};

type ServiceContextType = {
  register: UseFormRegister<z.infer<typeof createServiceSchema>>;
  control: Control<z.infer<typeof createServiceSchema>>;
  watch: UseFormWatch<z.infer<typeof createServiceSchema>>;
  formState: FormState<z.infer<typeof createServiceSchema>>;
  handleSubmit: UseFormHandleSubmit<z.infer<typeof createServiceSchema>>;
};

export const CreateDeploymentContext = createContext<ContextType>({
  control: null as any,
  formState: null as any,
  handleSubmit: null as any,
  register: null as any,
  watch: null as any,
});

export const CreateServiceContext = createContext<ServiceContextType>({
  control: null as any,
  formState: null as any,
  handleSubmit: null as any,
  register: null as any,
  watch: null as any,
});
