import InfoBox from "@/app/components/page-layout/InfoBox";
import { PageHeading } from "@/app/components/page-layout/PageHeading";
import NavButton from "@/app/components/side-nav/NavButton";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { usePathname } from "next/navigation";

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
        />
        <NavButton
          href="/dashboard/service/view-services"
          text="View"
          parentRoute="/dashboard/service"
        />
      </div>
      <hr className="mb-8 mt-3" />
      <PageHeading text="Service" />
      <InfoBox text="In Kubernetes, a Service is a method for exposing an application that is running as one or more Pods in your cluster to the network." />

      {children}
    </div>
  );
}
