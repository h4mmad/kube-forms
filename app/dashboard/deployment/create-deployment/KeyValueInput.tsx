import CardWrapper from "@/app/components/input/CardWrapper";
import InputBox from "@/app/components/input/InputBox";
import InputErrorMessage from "@/app/components/input/InputErrorMessage";
import NoData from "@/app/components/input/NoData";
import { CreateDeploymentContext } from "@/app/context/contexts";
import { Context, useContext } from "react";
import { useFieldArray } from "react-hook-form";
import { MdDelete } from "react-icons/md";

type KeyValueInputProps = {
  fieldArrayName: "podLabels" | "selector";
  heading: string;
  description: string;
  Context: Context<any>;
};

const KeyValueInput = ({
  fieldArrayName,
  heading,
  description,
  Context,
}: KeyValueInputProps) => {
  const {
    control,
    formState: { errors },
    register,
  } = useContext(Context);

  const { fields, append, remove } = useFieldArray({
    control,
    name: fieldArrayName,
  });

  return (
    <CardWrapper
      actionButton={
        <button
          type="button"
          className="rounded-lg px-4 text-sm py-1 border hover:bg-gray-100 "
          onClick={() => {
            append({ key: "", value: "" });
          }}
        >
          Add +
        </button>
      }
      heading={heading}
      description={description}
    >
      <div className="mt-4">
        {fields.length !== 0 ? (
          fields.map((item, index) => {
            return (
              <div
                className="flex flex-row  items-center space-x-4 mt-2"
                key={item.id}
              >
                <InputBox
                  placeholder="key"
                  type="text"
                  errorMessage=""
                  register={register(`${fieldArrayName}.${index}.key` as const)}
                />

                <p className="font-bold">:</p>

                <InputBox
                  type="text"
                  errorMessage=""
                  placeholder="value"
                  register={register(
                    `${fieldArrayName}.${index}.value` as const
                  )}
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
          })
        ) : (
          <NoData />
        )}
      </div>

      <InputErrorMessage message={errors[fieldArrayName]?.message} />
    </CardWrapper>
  );
};

export default KeyValueInput;
