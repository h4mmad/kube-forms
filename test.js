const k8s = require("@kubernetes/client-node");

const getNamespaces = async () => {
  const kc = new k8s.KubeConfig();
  kc.loadFromDefault();

  const corev1 = kc.makeApiClient(k8s.CoreV1Api);
  const { body, response } = await corev1.listNamespace();
  console.log(body.items);
  const concernedItems = body.items.map((item, idx) => {
    return {
      name: item.metadata.name,
      uid: item.metadata.uid,
    };
  });
  console.log(concernedItems);
};

getNamespaces();
