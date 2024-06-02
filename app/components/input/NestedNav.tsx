"use client";

import { usePathname } from "next/navigation";
import { navigationDataType } from "../side-nav/navData";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const NestedNav = ({
  icon,
  isSubMenu,
  path,
  subMenuItems,
  title,
}: navigationDataType) => {
  const [isOpen, setIsOpen] = useState(true);
  const currentPath = usePathname();

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className={clsx([
          "flex flex-row justify-between items-center p-2 rounded-lg w-full",
          {
            " text-black font-semibold bg-slate-100":
              currentPath.includes(path),
          },
          {
            "text-gray-500": isOpen && !currentPath.includes(path),
          },
          {
            "text-gray-500": !currentPath.includes(path),
          },
        ])}
      >
        <div className="flex flex-row space-x-2 items-center">
          <div className="font-light">{icon}</div>
          <p>{title}</p>
        </div>

        {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </button>
      {isOpen ? (
        <ul className="ml-8">
          {subMenuItems?.map((item, index) => {
            return (
              <li className="mt-2">
                <Link
                  href={item.path}
                  className={clsx([
                    {
                      "text-black font-medium": currentPath === item.path,
                    },
                    {
                      "text-gray-500": currentPath !== item.path,
                    },
                    "text-sm",
                  ])}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};
export default NestedNav;
