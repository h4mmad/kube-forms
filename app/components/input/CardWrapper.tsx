import clsx from "clsx";

type InfoCardWrapperProps = {
  children: React.ReactNode;
  heading: string;
  description: React.ReactNode;
  headingTextColor?: string;
  descriptionTextColor?: string;
  actionButton?: any;
};

const CardWrapper = ({
  children,
  heading,
  description,
  descriptionTextColor = "text-gray-500",
  headingTextColor = "text-black",
  actionButton,
}: InfoCardWrapperProps) => {
  return (
    <div className="p-4 rounded-xl border bg-white shadow-md w-full">
      <div className="flex flex-row justify-between items-center">
        <p className={clsx("block text-lg font-medium", headingTextColor)}>
          {heading}
        </p>
        {actionButton}
      </div>

      <div className={clsx("text-sm mt-4 mb-2", descriptionTextColor)}>
        {description}
      </div>
      {children}
    </div>
  );
};

export default CardWrapper;
