import Image from "next/image";
import Logo from "@/public/logo.svg";
import { LuContainer } from "react-icons/lu";
import { FaNetworkWired } from "react-icons/fa";
import { IoCodeWorking } from "react-icons/io5";
import { LuServer } from "react-icons/lu";
import ClusterCard, { ContextSelector } from "./ClusterCard";
import NavButton from "./NavButton";

export async function SideNav() {
  return (
    <nav className="flex flex-col p-4 border-r w-fit h-screen ">
      <Image alt="logo" src={Logo} width={150} height={150} />
      <ClusterCard />
      <ul className="space-y-16 mt-20">
        <li>
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
        </li>
      </ul>
      <div className="mt-auto">
        <ContextSelector />
      </div>
    </nav>
  );
}
