import { MdInfoOutline } from "react-icons/md";

type InfoBoxProps = {
  text: string;
};

function InfoBox({ text }: InfoBoxProps) {
  return (
    <div className="bg-blue-100 p-3 w-full rounded-xl text-pretty pointer-events-none flex flex-row justify-between space-x-6 items-center mt-6">
      <div className="w-fit">
        <MdInfoOutline size={28} className="text-gray-600" />
      </div>
      <p className="text-gray-600 text-sm ">{text}</p>
    </div>
  );
}

export default InfoBox;
