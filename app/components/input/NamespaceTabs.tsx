import getNamespaces from "@/app/kubernetes-actions/get/get-namespaces";
import TabButton from "./TabButton";

type NamespaceTabsProps = {
  baseURL: string;
};

async function NamespaceTabs({ baseURL }: NamespaceTabsProps) {
  const namespaces = await getNamespaces();
  console.log(baseURL);
  return (
    <div className="flex flex-row space-x-8 mt-6 items-center">
      <p className="text-gray-500 text-sm">Namespace:</p>
      {namespaces?.map((item) => {
        return (
          <TabButton namespace={item.name} key={item.uid} baseURL={baseURL} />
        );
      })}
    </div>
  );
}

export default NamespaceTabs;
