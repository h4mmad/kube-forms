"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavButtonProps = {
  icon?: any;
  title: string;
  href: string;
};

function NavButton({ icon, title, href }: NavButtonProps) {
  const currentPath = usePathname();

  return (
    <Link
      href={href}
      className={clsx([
        "flex flex-row space-x-3 items-center p-3 rounded-lg",
        {
          "font-semibold text-black bg-slate-100": currentPath === href,
        },
        {
          "text-gray-500": currentPath != href,
        },
      ])}
    >
      <div className="font-light">{icon}</div>
      <p>{title}</p>
    </Link>
  );
}

export default NavButton;
