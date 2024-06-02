"use client";
import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function TabButton({
  namespace,
  baseURL,
}: {
  namespace: string | undefined;
  baseURL: string;
}) {
  const searchParams = useSearchParams();

  return (
    <Link
      className={clsx("px-4 py-2 text-slate-500 border rounded-full text-sm", {
        "font-semibold shadow-sm bg-slate-100   text-slate-600":
          namespace === searchParams.get("namespace"),
        "": namespace != searchParams.get("namespace"),
      })}
      href={`${baseURL}?namespace=${namespace}`}
    >
      {namespace}
    </Link>
  );
}

export default TabButton;
