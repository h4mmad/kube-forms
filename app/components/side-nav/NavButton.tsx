"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
type NavButtonProps = {
  icon: any;
  text: string;
  href: string;
};

function NavButton({ icon, text, href }: NavButtonProps) {
  const currentPath = usePathname();

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

export default NavButton;
