type props = {
  children: React.ReactNode;
  title: string | undefined;
};
const ResourceCardWrapper = ({ children, title }: props) => {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-500 via-sky-500 to-emerald-500 w-full h-2 rounded-t-xl shadow-md" />
      <div className="p-4 rounded-b-xl border shadow-md w-full bg-white ">
        <p className="font-semibold text-lg">{title}</p>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
};

export default ResourceCardWrapper;
