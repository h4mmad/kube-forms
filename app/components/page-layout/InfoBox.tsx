import { MdInfoOutline } from "react-icons/md";

type props = {
  iconSize: number;
  text: string;
};

function InfoBox({ iconSize, text }: props) {
  return (
    <div className="bg-blue-100 p-3 rounded-xl text-pretty pointer-events-none flex flex-row justify-between space-x-6 items-center">
      <MdInfoOutline size={iconSize} className="text-gray-600" />
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
}

export default InfoBox;
