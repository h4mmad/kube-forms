import { V1DeploymentCondition, V1PodCondition } from "@kubernetes/client-node";
import { FaCheck, FaXmark } from "react-icons/fa6";

type props = {
  title: string;
  statusArray: V1PodCondition[] | V1DeploymentCondition[] | undefined;
};

const StatusDisplay = ({ statusArray, title }: props) => {
  return (
    <div>
      <label className="text-gray-500 text-sm">{title}</label>
      <div className="p-4 rounded-lg border space-y-4  shadow-sm">
        {statusArray &&
          statusArray.map((condition, idx) => {
            return (
              <div key={idx} className="flex flex-row space-x-3 items-center">
                <p>{condition.type}</p>
                {condition.status === "True" ? (
                  <FaCheck className="text-green-500 text-xl" />
                ) : (
                  <FaXmark className="text-red-500 text-xl" />
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default StatusDisplay;
