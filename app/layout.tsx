import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const open_sans = Open_Sans({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Kube Forms",
  description: "Deploy your apps with ease!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <div className="bg-slate-50">{children}</div>
      </body>
    </html>
  );
}
