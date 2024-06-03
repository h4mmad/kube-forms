import InfoBox from "@/app/components/page-layout/InfoBox";
import { PageHeading } from "@/app/components/page-layout/PageHeading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
