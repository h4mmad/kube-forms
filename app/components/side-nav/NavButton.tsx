"use client";
import { GlobalContext } from "@/app/context/globalContext";
import clsx from "clsx";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
type NavButtonProps = {
  icon?: any;
  text: string;
  href: string;
  parentRoute?: string;
};

function NavButton({ icon, text, href, parentRoute }: NavButtonProps) {
  useEffect(() => {
    if (localStorage.getItem("config")) {
      const config = localStorage.getItem("config");
      console.log("from localstorage and navbutton: ", config);
    }
  }, []);
  const currentPath = usePathname();
  const [active, setActive] = useState<boolean>();

  return (
    <Link
      href={href}
      className={clsx([
        "flex flex-row space-x-3 items-center",
        {
          "font-semibold text-black":
            currentPath.split("/").at(2) === href.split("/").at(2) &&
            href === currentPath,
        },
      ])}
    >
      <div>{icon}</div>
      <p>{text}</p>
    </Link>
  );
}

export default NavButton;

// clsx(

//   { "text-black font-semibold": true },

//   { "text-gray-400": currentPath !== href },

//   { "flex flex-row space-x-3 items-center": true }
// )
