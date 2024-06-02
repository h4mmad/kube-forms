// parentRoute = '/dashboard/deployment/'
// childrenRoute = ['/dashboard/deployment/create-deployment', '/dashboard/deployment/view-deployments' ]
"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

type props = {
  parentRoute: string;
  childrenRoute: string[];
};
const ParentRoute = ({ parentRoute, childrenRoute }: props) => {
  const currentPath = usePathname();
  const path = useRouter();
  console.log(path.basePath);
};

export default ParentRoute;
