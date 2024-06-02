type props = {
  title: string;
  value: string | number | undefined;
};
const LabelValueDisplay = ({ title, value }: props) => {
  return (
    <div>
      <label className="text-gray-500 text-sm">{title}</label>
      <p className="">{value}</p>
    </div>
  );
};

export default LabelValueDisplay;
