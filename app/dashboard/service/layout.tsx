import InfoBox from "@/app/components/page-layout/InfoBox";
import { PageHeading } from "@/app/components/page-layout/PageHeading";
import Link from "next/link";

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
        <iframe
          width="450"
          height="280"
          src="https://www.youtube.com/embed/T4Z7visMM4E?si=I3b0-Stuw67hMWf-"
          title="YouTube video player"
          className="rounded-xl mt-4"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </InfoBox>
      <div className="flex flex-col space-y-14 mt-14">{children}</div>
    </div>
  );
}
