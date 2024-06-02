import { V1Namespace, V1ObjectMeta } from "@kubernetes/client-node";
import { getCoreV1Client } from "../../utils/KubernetesClient";

type ReturnType = {
  name: string | undefined;
  uid: string | undefined;
};

const getNamespaces = async (): Promise<ReturnType[] | undefined> => {
  try {
    const { body } = await (await getCoreV1Client()).listNamespace();

    const concernedItems = body.items.map((item: V1Namespace, idx) => {
      return {
        name: item?.metadata?.name,
        uid: item?.metadata?.uid,
      };
    });
    return concernedItems;
  } catch (error) {
    console.log(error);
  }
};

export default getNamespaces;
