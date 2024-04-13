import React, { useState } from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import Image from "next/image";
import imgIcon from "../../public/images/img.svg";
import presentIcon from "../../public/images/present.svg";
import txtIcon from "../../public/images/txt.svg";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div className="block sm:hidden">
        <MobileMenu />
      </div>
      <div
        className="w-full border-b shadow-sm sm:block hidden"
        onMouseLeave={() => setActive(false)}
      >
        <div className="py-4 flex items-center max-w-screen-lg mx-auto px-4">
          <Link href={"/"}>
            <span className="text-lg font-semibold text-red-600">Logo</span>
          </Link>
          <div className="relative">
            <div
              className="flex gap-1 items-center text-base ml-20 cursor-pointer transition-all hover:opacity-60"
              onMouseOver={() => setActive(true)}
            >
              <span>Convert</span>
              <span>
                <FaAngleDown />
              </span>
            </div>

            {active && (
              <div className="absolute left-10 top-10 shadow-lg bg-white z-50 w-[300px]">
                <div className="flex flex-col gap-3 py-4 ">
                  {data?.map((item, index) => {
                    return (
                      <Link href={item?.url} passHref key={index}>
                        <div className="flex items-center gap-4 transition-all hover:bg-slate-100 py-2 px-4">
                          <Image src={item?.icon} alt="" className="w-6" />
                          <span className="text-base font-normal text-gray-700">
                            {item?.title}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const data = [
  {
    title: "Document Converter",
    url: "/document-converter",
    icon: txtIcon,
  },
  {
    title: "Image Converter",
    url: "/image-converter",
    icon: imgIcon,
  },
  {
    title: "Presentation Converter",
    url: "/presentation-converter",
    icon: presentIcon,
  },
];
