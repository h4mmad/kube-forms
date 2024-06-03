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
      {children}
    </div>
  );
}
