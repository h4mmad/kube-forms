import getNamespaces from "@/app/kubernetes-actions/get-namespaces";
import TabButton from "./TabButton";

type NamespaceTabsProps = {
  baseURL: string;
};

async function NamespaceTabs({ baseURL }: NamespaceTabsProps) {
  const namespaces = await getNamespaces();

  return (
    <div className="flex flex-row space-x-8 mt-6">
      {namespaces?.map((item) => {
        return <TabButton namespace={item.name} />;
      })}
    </div>
  );
}

export default NamespaceTabs;
