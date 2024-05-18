import Lottie from "lottie-react";
import vr from "../assets/vr.json";

export default function GetStarted() {
  return (
    <div className="flex container mx-auto justify-start p-20 mb-20">
      <div className="w-1/2">
        <Lottie animationData={vr} loop={true} />
      </div>
      <div className="w-1/2 ml-32">
        <p className=" text-sky-300 mb-5">
          Request Early Access to Get Started
        </p>
        <h2 className="text-2xl w-72 mb-5 bg-gradient-to-r from-fuchsia-400 via-fuchsia-300 to-yellow-600 bg-clip-text text-transparent">
          The possibilities are beyond your imagination
        </h2>
        <p className="text-primary-text mb-8 w-5/6">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className="text-orange-500">Request Early Access to Get Started</p>
      </div>
    </div>
  );
}
