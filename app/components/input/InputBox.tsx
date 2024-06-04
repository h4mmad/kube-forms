import clsx from "clsx";
import InputErrorMessage from "./InputErrorMessage";

type props = {
  placeholder?: string;
  errorMessage?: string | undefined;
  type: "text" | "number";
  register: any;
  label?: string;
};
function InputBox({ placeholder, errorMessage, type, register, label }: props) {
  return (
    <div>
      <label className="text-gray-500 text-sm block">{label}</label>
      <input
        {...register}
        type={type}
        placeholder={placeholder}
        className={clsx([
          "p-2 font-medium rounded-lg border w-full border-blue-200",
          {
            "border-red-500 bg-red-100": errorMessage,
          },
          {
            "bg-slate-50": !errorMessage,
          },
        ])}
      />

      <InputErrorMessage message={errorMessage} />
    </div>
  );
}

export default InputBox;
