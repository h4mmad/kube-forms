"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

function TabButton({ namespace }: { namespace: string | undefined }) {
  const searchParams = useSearchParams();

  return (
    <Link
      className={clsx(
        "px-4 py-2 bg-slate-100 border rounded-full text-slate-600",
        {
          "font-semibold shadow-sm":
            namespace === searchParams.get("namespace"),
          "": namespace != searchParams.get("namespace"),
        }
      )}
      href={`/dashboard/view-pods?namespace=${namespace}`}
    >
      {namespace}
    </Link>
  );
}

export default TabButton;
