type props = {
  title: string;
  objectArray:
    | {
        [key: string]: string;
      }
    | undefined;
};
const KeyValueDisplay = ({ title, objectArray }: props) => {
  return (
    <div>
      <label className="text-gray-500 text-sm">{title}</label>
      <div className="flex flex-row flex-wrap">
        {objectArray &&
          Object.keys(objectArray).map((key, index) => {
            if (objectArray) {
              const keys = Object.keys(objectArray);
              const values = Object.values(objectArray);
              return (
                <p
                  key={index}
                  className=" text-sm px-4 py-2 border w-fit rounded-full font-medium mr-2 mt-2"
                >
                  {keys[index]} : {values[index]}
                </p>
              );
            }
          })}
      </div>
    </div>
  );
};

export default KeyValueDisplay;
