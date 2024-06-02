import { FaNetworkWired } from "react-icons/fa";
import { IoCodeWorking } from "react-icons/io5";
import { LuContainer, LuServer } from "react-icons/lu";

export type navigationDataType = {
  title: string;
  path: string;
  isSubMenu: boolean;
  icon: any;
  subMenuItems?: { title: string; path: string }[];
};

export const navigationData: navigationDataType[] = [
  {
    path: "/dashboard/view-nodes",
    isSubMenu: false,
    icon: LuServer({ size: 22 }),
    title: "Nodes",
  },
  {
    path: "/dashboard/view-pods",
    isSubMenu: false,
    icon: LuContainer({ size: 22 }),
    title: "Pods",
  },
  {
    path: "/dashboard/deployment",
    isSubMenu: true,
    title: "Deployment",
    icon: IoCodeWorking({ size: 22 }),
    subMenuItems: [
      { title: "Create", path: "/dashboard/deployment/create-deployment" },
      { title: "View", path: "/dashboard/deployment/view-deployments" },
    ],
  },
  {
    path: "/dashboard/service",
    isSubMenu: true,
    title: "Service",
    icon: FaNetworkWired({ size: 22 }),
    subMenuItems: [
      { title: "Create", path: "/dashboard/service/create-service" },
      { title: "View", path: "/dashboard/service/view-services" },
    ],
  },
];
