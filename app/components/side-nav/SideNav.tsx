"use server";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import ClusterCard, { ContextSelector } from "./ClusterCard";
import NavButton from "./NavButton";
import { navigationData } from "./navData";
import NestedNav from "../input/NestedNav";

export async function SideNav() {
  return (
    <nav className="flex flex-col p-4 border-r w-fit h-screen ">
      <Image alt="logo" src={Logo} width={150} height={150} />
      <ClusterCard />
      <ul className="space-y-12 mt-12">
        {navigationData.map((item, idx) => {
          return item.isSubMenu ? (
            <NestedNav {...item} key={idx} />
          ) : (
            <NavButton
              href={item.path}
              title={item.title}
              icon={item.icon}
              key={idx}
            />
          );
        })}
        {/* </li> */}
        {/* <li>
          <NavButton
            href="/dashboard/view-nodes"
            icon={<LuServer size={22} />}
            text="Node"
          />
        </li>
        <li>
          <NavButton
            href="/dashboard/view-pods/?namespace=default"
            icon={<LuContainer size={22} />}
            text="Pod"
          />
        </li>
        <li>
          <NavButton
            href="/dashboard/deployment/create-deployment"
            parentRoute="/dashboard/deployment/"
            icon={<IoCodeWorking size={22} />}
            text="Deployment"
          />
        </li>
        <li>
          <NavButton
            href="/dashboard/service/create-service"
            parentRoute="/dashboard/service/"
            icon={<FaNetworkWired size={22} />}
            text="Service"
          />
        </li> */}
      </ul>
      <div className="mt-auto">
        <ContextSelector />
      </div>
    </nav>
  );
}
