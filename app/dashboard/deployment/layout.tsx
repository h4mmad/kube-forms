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
          href="/dashboard/deployment/create-deployment"
          text="Create"
          parentRoute="/dashboard/deployment"
          icon={<IoCreateOutline size={22} />}
        />
        <NavButton
          href="/dashboard/deployment/view-deployments"
          text="View"
          parentRoute="/dashboard/deployment"
          icon={<IoEyeOutline size={22} />}
        />
      </div>
      <hr className="mb-8 mt-3" />
      <PageHeading text="Deployment" />
      <InfoBox>
        <p>
          A Deployment allows you to update Pods easily. You describe a desired
          state in a Deployment, and the Deployment Controller changes the
          actual state to the desired state.
        </p>

        <span>
          Learn more about{" "}
          <a
            className="text-blue-500 inline "
            href={
              "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"
            }
          >
            Deployments
          </a>
        </span>
      </InfoBox>

      {children}
    </div>
  );
}
