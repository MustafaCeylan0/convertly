import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Image from "next/image";
import imgIcon from "../../public/images/img.svg";
import presentIcon from "../../public/images/present.svg";
import txtIcon from "../../public/images/txt.svg";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="flex justify-between items-center shadow-md py-4 px-3">
        <Link href={"/"}>
          <span className="text-lg font-semibold text-red-600 block">Logo</span>
        </Link>
        <button onClick={toggleDrawer}>
          <RxHamburgerMenu className="text-2xl" />
        </button>
      </div>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
        <div className="pl-4 pt-5 mb-10">
          <Link href={"/"}>
            <span className="text-lg font-semibold text-red-600 block">
              Logo
            </span>
          </Link>
        </div>
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
      </Drawer>
    </>
  );
};

export default MobileMenu;

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
