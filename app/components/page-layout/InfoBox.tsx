import React from "react";
import { MdInfoOutline } from "react-icons/md";

type InfoBoxProps = {
  children: React.ReactNode;
};

function InfoBox({ children }: InfoBoxProps) {
  return (
    <div className="bg-blue-100 p-3 w-full rounded-xl flex flex-row justify-start space-x-6 items-center mt-6">
      <div className="w-fit ">
        <MdInfoOutline size={32} className="text-blue-500" />
      </div>
      {/* <p className="text-gray-600 text-sm ">{text}</p>
       */}
      <div className=" text-gray-500 text-sm">{children}</div>
    </div>
  );
}

export default InfoBox;
