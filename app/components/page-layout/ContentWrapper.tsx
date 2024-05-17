const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col space-y-9 mt-20">{children}</div>;
};

export default ContentWrapper;
