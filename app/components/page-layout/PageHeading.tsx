type props = {
  text: string;
};
export const PageHeading = ({ text }: props) => {
  return <h1 className="text-4xl font-semibold pointer-events-none">{text}</h1>;
};
