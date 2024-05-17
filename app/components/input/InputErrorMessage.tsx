type InputErrorMessageProps = {
  message: string | undefined;
};
const InputErrorMessage = ({ message }: InputErrorMessageProps) => {
  return message && <p className="text-red-500 mt-2 text-sm">{message}</p>;
};

export default InputErrorMessage;
