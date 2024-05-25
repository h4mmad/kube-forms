import InfoBox from "@/app/components/page-layout/InfoBox";
import { PageHeading } from "@/app/components/page-layout/PageHeading";
import NavButton from "@/app/components/side-nav/NavButton";
import Link from "next/link";
import { IoCreateOutline, IoEyeOutline } from "react-icons/io5";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex flex-row space-x-16 ">
        <NavButton
          href="/dashboard/service/create-service"
          text="Create"
          parentRoute="/dashboard/service"
          icon={<IoCreateOutline size={22} />}
        />
        <NavButton
          href="/dashboard/service/view-services?namespace=default"
          text="View"
          icon={<IoEyeOutline size={22} />}
          parentRoute="/dashboard/service"
        />
      </div>
      <hr className="mb-8 mt-3" />
      <PageHeading text="Service" />
      <InfoBox>
        <p>
          Service is a method for exposing an app that is running in one or more
          Pods of your cluster to the network internally or externally.
        </p>
        <span>
          Learn more about{" "}
          <Link
            className="text-blue-500 inline "
            href={
              "https://kubernetes.io/docs/concepts/services-networking/service/"
            }
          >
            Services.
          </Link>
        </span>
      </InfoBox>
      <div className="mt-8 w-full">{children}</div>
    </div>
  );
}
