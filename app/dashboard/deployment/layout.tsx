import InfoBox from "@/app/components/page-layout/InfoBox";
import { PageHeading } from "@/app/components/page-layout/PageHeading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
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
