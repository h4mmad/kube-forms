import { SideNav } from "../components/side-nav/SideNav";
import { Open_Sans } from "next/font/google";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import { Slide, ToastContainer } from "react-toastify";

const open_sans = Open_Sans({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={open_sans.className}>
      <div className="flex 2xl:w-3/4 mx-auto">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Slide}
        />
        <SideNav />

        <div className="overflow-y-auto flex-1 h-screen px-32 py-4">
          <ErrorBoundary children={children} errorComponent={Error} />
        </div>
      </div>
    </div>
  );
}
