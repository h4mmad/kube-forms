import clsx from "clsx";
import InputErrorMessage from "./InputErrorMessage";

type props = {
  placeholder: string;
  errorMessage: string | undefined;
  type: "text" | "number";
  register: any;
  label?: string;
};
function InputBox({ placeholder, errorMessage, type, register, label }: props) {
  return (
    <div className="w-full">
      <label className="text-gray-500 text-sm">{label}</label>
      <input
        {...register}
        type={type}
        placeholder={placeholder}
        className={clsx(
          "p-2 font-medium rounded-lg border  w-full bg-slate-50",
          {
            "border-red-500 bg-red-200": errorMessage,
          }
        )}
      />

      <InputErrorMessage message={errorMessage} />
    </div>
  );
}

export default InputBox;
