import React from "react";
import Image from "next/image";
import supportedIcon from "../../public/images/support.svg";
import fastIcon from "../../public/images/fast-30.svg";
import cloudIcon from "../../public/images/cloud.svg";
import settingIcon from "../../public/images/setting.svg";
import securityIcon from "../../public/images/security.svg";
import devicesIcon from "../../public/images/devices.svg";

const Features = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {data?.map((item, index) => {
        return (
          <div key={index} className="border border-gray-200 rounded-sm shadow-sm px-6 py-10 w-full">
            <div className="flex justify-center mb-3">
              <Image src={item?.icon} alt={item?.title} />
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-3 text-center">{item.title}</h3>
            <p className="text-sm text-center text-gray-500">{item?.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Features;

const data = [
  {
    title: "300+ formats supported",
    description:
      "We support more than 25600 different conversions between more than 300 different file formats. More than any other converter.",
    icon: supportedIcon,
  },
  {
    title: "Fast and easy",
    description: `Just drop your files on the page, choose an output format and click "Convert" button. Wait a little for the process to complete. We aim to do all our conversions in under 1-2 minutes.`,
    icon: fastIcon,
  },
  {
    title: "In the cloud",
    description:
      "All conversions take place in the cloud and will not consume any capacity from your computer.",
    icon: cloudIcon,
  },
  {
    title: "Custom settings",
    description:
      "Most conversion types support advanced options. For example with a video converter you can choose quality, aspect ratio, codec and other settings, rotate and flip.",
    icon: settingIcon,
  },
  {
    title: "Security guaranteed",
    description: `We delete uploaded files instantly and converted ones after 24 hours. No one has access to your files and privacy is 100% guaranteed. Read more about security.`,
    icon: securityIcon,
  },
  {
    title: "All devices supported",
    description:
      "Convertly is browser-based and works for all platforms. There is no need to download and install any software.",
    icon: devicesIcon,
  },
];
