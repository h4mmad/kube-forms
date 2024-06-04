"use client";
import { PageHeading } from "@/app/components/page-layout/PageHeading";
import CreateDeploymentForm from "./CreateDeploymentForm";
import CreateDeploymentContextWrapper from "@/app/context/createDeploymentContextWrapper";
import InfoBox from "@/app/components/page-layout/InfoBox";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdInfoOutline } from "react-icons/md";

function CreateDeploymentPage() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <CreateDeploymentContextWrapper>
      <div className="flex flex-row justify-between items-center">
        <PageHeading text="Create deployment" />

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
              src="https://www.youtube.com/embed/Sulw5ndbE88?si=4N_QlAzyxX4XDm8E"
              title="YouTube video player"
              className="rounded-xl flex-1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className="w-1/3">
              <p>
                A Deployment allows you to update Pods easily. You describe a
                desired state in a Deployment, and the Deployment Controller
                changes the actual state to the desired state.
              </p>

              <div className="mt-2">
                Visit the official Kubernetes website to learn more about{" "}
                <a
                  className="text-blue-500 inline "
                  href={
                    "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"
                  }
                >
                  Deployments.
                </a>
              </div>
            </div>
          </div>
        </InfoBox>
      )}

      <CreateDeploymentForm />
    </CreateDeploymentContextWrapper>
  );
}

export default CreateDeploymentPage;
