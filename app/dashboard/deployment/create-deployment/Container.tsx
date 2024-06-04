import CardWrapper from "@/app/components/input/CardWrapper";
import ErrorMessage from "@/app/components/input/InputErrorMessage";
import InputBox from "@/app/components/input/InputBox";
import { CreateDeploymentContext } from "@/app/context/contexts";
import { useContext } from "react";
import { Controller, useFieldArray } from "react-hook-form";
import { MdDelete } from "react-icons/md";
import Select from "react-select";

const options = [
  { value: "TCP", label: "TCP" },
  { value: "UDP", label: "UDP" },
];

const Container = () => {
  const {
    control,
    formState: { errors },
    register,
  } = useContext(CreateDeploymentContext);

  const {
    append,
    fields: ports,
    remove,
  } = useFieldArray({ name: "ports", control });

  return (
    <div>
      <div className="flex flex-col space-y-12">
        <div className="flex flex-row space-x-8 w-full">
          <CardWrapper
            description="A container name uniquely identifies a container in a Pod"
            descriptionTextColor="text-gray-500"
            heading="Container name"
            headingTextColor="text-black"
          >
            <InputBox
              errorMessage={errors.containerName?.message}
              placeholder="nginx-container"
              type="text"
              register={register("containerName")}
            />
          </CardWrapper>

          <CardWrapper
            description="Image should be existing on Docker hub"
            heading="Image"
            descriptionTextColor="text-gray-600"
            headingTextColor="text-black"
          >
            <InputBox
              errorMessage={errors.containerImage?.message}
              placeholder="nginx"
              register={register("containerImage")}
              type="text"
            />
          </CardWrapper>
        </div>

        <CardWrapper
          description="A port is a number assigned to uniquely identify a connection endpoint and to direct data to a specific service."
          heading="Ports"
          descriptionTextColor="text-gray-500"
          headingTextColor="text-black"
          actionButton={
            <button
              type="button"
              className="rounded-lg px-4 text-sm py-1 border bg-black text-white"
              onClick={() => append({ containerPort: 80, protocol: "TCP" })}
            >
              Add +
            </button>
          }
        >
          {ports.map((port, index) => {
            return (
              <div
                key={port.id}
                className="flex flex-row space-x-4 justify-between items-center mt-2"
              >
                <InputBox
                  errorMessage=""
                  label="Container port"
                  placeholder="80"
                  register={register(`ports.${index}.containerPort` as const, {
                    valueAsNumber: true,
                  })}
                  type="number"
                />

                <InputBox
                  type="text"
                  errorMessage=""
                  label="Protocol"
                  placeholder="TCP"
                  register={register(`ports.${index}.protocol` as const)}
                />

                <button
                  onClick={() => remove(index)}
                  type="button"
                  className=" text-red-500 "
                >
                  <MdDelete size={28} />
                </button>
              </div>
            );
          })}

          <ErrorMessage message={errors.ports?.message} />
        </CardWrapper>
      </div>
    </div>
  );
};

export default Container;
