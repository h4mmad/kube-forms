"use client";
import CardWrapper from "@/app/components/CardWrapper";
import InputBox from "@/app/components/InputBox";
import { CreateServiceContext } from "@/app/context/contexts";
import "react-toastify/dist/ReactToastify.css";

import { useContext, useState } from "react";
import KeyValueInput from "../create-deployment/KeyValueInput";
import { SubmitHandler, useFieldArray } from "react-hook-form";
import { createServiceSchema } from "@/app/schema";
import { z } from "zod";
import Image from "next/image";
import ClusterIP from "@/public/ClusterIP.drawio.svg";
import NodePort from "@/public/NodePort.drawio.svg";
import NamespaceSelector from "../create-deployment/NamespaceSelector";
import { createServiceFormAction } from "@/app/actions";
import { Helper } from "@/app/lib";
import { toast } from "react-toastify";

const submitHandler: SubmitHandler<
  z.infer<typeof createServiceSchema>
> = async (data: z.infer<typeof createServiceSchema>) => {
  console.log(data);
  const helper = new Helper();

  const { statusCode, bodyMessage, message, statusMessage } =
    await createServiceFormAction(data);

  console.log(statusCode, message, bodyMessage, statusMessage);

  if (statusCode >= 200 && statusCode <= 300) {
    toast(`${message}: ${statusCode}`);
  } else {
    toast(`${statusMessage} ${statusCode}: ${bodyMessage}`);
  }
};

const CreateServiceForm = () => {
  const options = [
    {
      label: "Cluster IP",
      value: "ClusterIP",
      src: ClusterIP,
      info: "Exposes the Service on a cluster-internal IP. Choosing this value makes the Service only reachable from within the cluster. This is the default that is used if you don't explicitly specify a type for a Service.",
    },
    {
      label: "Node Port",
      value: "NodePort",
      info: "Exposes the Service on each Node's IP at a static port (the NodePort). To make the node port available, Kubernetes sets up a cluster IP address, you can access the Pods from outside the cluster",
      src: NodePort,
    },
  ];
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState({
    label: "Cluster IP",
    value: "ClusterIP",
    src: ClusterIP,
    info: "Exposes the Service on a cluster-internal IP. Choosing this value makes the Service only reachable from within the cluster. This is the default that is used if you don't explicitly specify a type for a Service.",
  });

  const handleChange = (option: any) => {
    setSelectedOption(option);
    setIndex(options.findIndex((opt) => opt.value === option.value));
  };
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useContext(CreateServiceContext);

  const { append, fields, remove } = useFieldArray({ name: "ports", control });

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="space-y-10 mt-16 ml-8">
        <CardWrapper
          heading="Name"
          description="A service name should be unique within a namespace"
        >
          <InputBox
            errorMessage={errors.serviceName?.message}
            register={register("serviceName")}
            placeholder="eg. nginx-service"
            type="text"
          />
        </CardWrapper>
        <NamespaceSelector
          errorMessage={errors.namespace?.message}
          register={register("namespace")}
        />

        <KeyValueInput
          Context={CreateServiceContext}
          fieldArrayName="selector"
          heading="Selector"
          description="A selector in a service is used to define which pods the service should route traffic to. For example, if a service has a selector 'app: frontend', it will match all pods that have the label 'app' set to 'frontend'."
        />
        <CardWrapper
          heading="Type"
          description="For some parts of your application (for example, frontends) you may want to expose a Service onto an external IP address, one that's accessible from outside of your cluster. Kubernetes Service types allow you to specify what kind of Service you want."
        >
          {/* <Select
            value={selectedOption}
            defaultValue={options[0]}
            options={options}
            onChange={handleChange}
          /> */}

          <select
            {...register("type")}
            className="p-2 w-full rounded-lg bg-slate-50 border"
            defaultValue={options[0].value}
          >
            <option value={options[0].value}>{options[0].label}</option>
            <option value={options[1].value}>{options[1].label}</option>
          </select>

          <div className="flex space-x-4 flex-row border rounded-xl p-6 mt-6 bg-white">
            <Image
              alt="logo"
              src={selectedOption.src}
              width={350}
              height={350}
            />

            <div>
              <p className="text-lg font-semibold">{options[index].label}</p>
              <p className="mt-2">{options[index].info}</p>
            </div>
          </div>
        </CardWrapper>

        <CardWrapper
          heading="Ports"
          actionButton={
            <button
              type="button"
              className="rounded-lg px-4 text-sm py-1 border hover:bg-gray-100 "
              onClick={() =>
                append({ port: 80, protocol: "TCP", targetPort: 80 })
              }
            >
              Add port
            </button>
          }
        >
          {fields.map((port, index) => {
            return (
              <div key={port.id}>
                <InputBox
                  errorMessage=""
                  placeholder="port"
                  type="number"
                  label="Port"
                  register={register(`ports.${index}.port` as const, {
                    valueAsNumber: true,
                  })}
                />
                <InputBox
                  errorMessage=""
                  placeholder="port"
                  type="number"
                  label="Target port"
                  register={register(`ports.${index}.targetPort` as const, {
                    valueAsNumber: true,
                  })}
                />
                <InputBox
                  errorMessage=""
                  placeholder="protocol"
                  type="text"
                  label="Transport Layer 4 protocol"
                  register={register(`ports.${index}.protocol` as const)}
                />
              </div>
            );
          })}
        </CardWrapper>

        <button
          type="submit"
          className="px-4 py-2 mt-10 rounded-full hover:bg-[#413839] bg-black border border-black text-white font-semibold ml-auto w-fit"
        >
          Create service
        </button>
      </div>
    </form>
  );
};

export default CreateServiceForm;
