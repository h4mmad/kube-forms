import InfoCardWrapper from "@/app/components/input/CardWrapper";
import InputBox from "@/app/components/input/InputBox";
import InputErrorMessage from "@/app/components/input/InputErrorMessage";

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
      description="Allows for isolating groups of resources within a cluster."
    >
      {/* <input
        {...register}
        type="text"
        placeholder="eg. default"
        className="p-2 mt-4 font-medium rounded-lg border  w-full"
      /> */}
      <InputBox register={register} type="text" placeholder="eg. default" />
      <InputErrorMessage message={errorMessage} />
    </InfoCardWrapper>
  );
};

export default NamespaceSelector;
