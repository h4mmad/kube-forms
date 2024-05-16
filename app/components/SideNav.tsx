"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/logo.svg";
import { LuContainer } from "react-icons/lu";
import { FaNetworkWired } from "react-icons/fa";
import { IoCodeWorking } from "react-icons/io5";
import { LuServer } from "react-icons/lu";
import clsx from "clsx";
import useSWR from "swr";
import ClusterCard from "./ClusterCard";

export function SideNav() {
  const currentPath = usePathname();

  return (
    <nav className="flex flex-col p-4 border-r w-fit h-screen ">
      <Image alt="logo" src={Logo} width={150} height={100} />
      <ClusterCard />
      <ul className="space-y-16 mt-20">
        <li>
          <NavButton
            currentPath={currentPath}
            href="/dashboard/view-nodes"
            icon={<LuServer size={22} />}
            text="Cluster"
          />
        </li>
        <li>
          <NavButton
            currentPath={currentPath}
            href="/dashboard/view-pods"
            icon={<LuContainer size={22} />}
            text="Pods"
          />
        </li>
        <li>
          <NavButton
            currentPath={currentPath}
            href="/dashboard/create-deployment"
            icon={<IoCodeWorking size={22} />}
            text="Workloads"
          />
        </li>
        <li>
          <NavButton
            href="/dashboard/create-service"
            icon={<FaNetworkWired size={22} />}
            text="Networking"
            currentPath={currentPath}
          />
        </li>
      </ul>
    </nav>
  );
}

type NavButtonProps = {
  icon: any;
  text: string;
  href: string;
  currentPath: string;
};

function NavButton({ icon, text, href, currentPath }: NavButtonProps) {
  return (
    <div
      className={clsx([
        "flex flex-row space-x-3 items-center",
        { "text-black font-semibold": currentPath === href },
        { "text-gray-400": currentPath !== href },
      ])}
    >
      {icon}
      <Link href={href}>{text}</Link>
    </div>
  );
}
