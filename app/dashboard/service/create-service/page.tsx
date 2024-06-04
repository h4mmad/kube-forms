"use client";
import { PageHeading } from "@/app/components/page-layout/PageHeading";
import CreateServiceForm from "./CreateServiceForm";
import CreateServiceContextWrapper from "@/app/context/createServiceContextWrapper";
import InfoBox from "@/app/components/page-layout/InfoBox";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdInfoOutline } from "react-icons/md";

const Page = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <CreateServiceContextWrapper>
        <div className="flex flex-row justify-between items-center">
          <PageHeading text="Create service" />

          <button className="w-fit" onClick={() => setIsVisible(!isVisible)}>
            <MdInfoOutline size={32} className="text-blue-500" />
          </button>
        </div>
        {isVisible && (
          <InfoBox>
            <div className="flex flex-row space-x-6 text-gray-700">
              <iframe
                width="450"
                height="280"
                src="https://www.youtube.com/embed/T4Z7visMM4E?si=I3b0-Stuw67hMWf-"
                title="YouTube video player"
                className="rounded-xl flex-1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <div className="w-1/3">
                <p>
                  Service is a method for exposing an app that is running in one
                  or more Pods of your cluster to the network internally or
                  externally.
                </p>

                <div className="mt-2">
                  Visit the official Kubernetes website to learn more about{" "}
                  <a
                    className="text-blue-500 inline "
                    href={
                      "https://kubernetes.io/docs/concepts/services-networking/service/"
                    }
                  >
                    Services.
                  </a>
                </div>
              </div>
            </div>
          </InfoBox>
        )}

        <CreateServiceForm />
      </CreateServiceContextWrapper>
    </>
  );
};

export default Page;
