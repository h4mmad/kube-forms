import InfoBox from "@/app/components/page-layout/InfoBox";
import { PageHeading } from "@/app/components/page-layout/PageHeading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {" "}
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
            Deployments.
          </a>
        </span>
        <div className="mt-4 rounded-xl">
          <iframe
            width="500"
            height="300"
            src="https://www.youtube.com/embed/Sulw5ndbE88?si=4N_QlAzyxX4XDm8E"
            title="YouTube video player"
            className="rounded-xl shadow-md"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </InfoBox>
      <div className="flex flex-col space-y-14 mt-14">{children}</div>
    </div>
  );
}
