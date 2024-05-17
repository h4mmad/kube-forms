import clsx from "clsx";

type InfoCardWrapperProps = {
  children: React.ReactNode;
  heading: string;
  description?: string;
  headingTextColor?: string;
  descriptionTextColor?: string;
  actionButton?: any;
};

const CardWrapper = ({
  children,
  heading,
  description,
  descriptionTextColor = "text-gray-600",
  headingTextColor = "text-black",
  actionButton,
}: InfoCardWrapperProps) => {
  return (
    <div className="p-4 shadow-md rounded-xl border w-full bg-white">
      <div className="flex flex-row justify-between items-center">
        <p className={clsx("block text-lg font-medium", headingTextColor)}>
          {heading}
        </p>
        {actionButton}
      </div>

      <p className={clsx("text-sm mt-2 mb-2", descriptionTextColor)}>
        {description}
      </p>
      {children}
    </div>
  );
};

export default CardWrapper;
