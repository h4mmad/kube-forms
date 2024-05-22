import { getCoreV1Client } from "../utils/KubernetesClient";

const getNamespaces = async () => {
  try {
    const { body } = await (await getCoreV1Client()).listNamespace();

    const concernedItems = body.items.map((item, idx) => {
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
