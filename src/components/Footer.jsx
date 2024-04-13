import React from "react";
import Link from "next/link";
import RatingComponent from "./Rating";

const Footer = () => {
  return (
    <div>
      <RatingComponent />
      <div className="bg-[#282828]">
        <div className="pt-16 max-w-screen-lg mx-auto px-4">
          <div className="flex justify-center md:justify-between flex-col md:flex-row sm:flex-wrap gap-10 border-b border-b-gray-300 pb-10">
            <div className=" hidden md:flex justify-center md:justify-start">
              <div>
                <h4 className="text-lg font-normal text-white mb-4 md:mb-10">
                  Converted Files:
                </h4>
                <p className="text-xl tracking-widest text-gray-300">
                  2,533,109,140 <span className="text-red-500">/</span> 46,558{" "}
                  <b>TB</b>
                </p>
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <div>
                <div className="flex items-center md:items-start flex-col gap-6">
                  <Link href={"/about"}>
                    <span className="text-sm font-normal text-gray-300">
                      About
                    </span>
                  </Link>
                  <Link href={"/security"}>
                    <span className="text-sm font-normal text-gray-300">
                      Security
                    </span>
                  </Link>
                  <Link href={"/"}>
                    <span className="text-sm font-normal text-gray-300">
                      Formats
                    </span>
                  </Link>
                  <Link href={"/help"}>
                    <span className="text-sm font-normal text-gray-300">
                      Help
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <div>
                <div className="flex items-center md:items-start flex-col gap-6">
                  <Link href={"/pdf-convertor"}>
                    <span className="text-sm font-normal text-gray-300">
                      Pdf Converter
                    </span>
                  </Link>
                  <Link href={"/docs-convertor"}>
                    <span className="text-sm font-normal text-gray-300">
                      Docs Converter
                    </span>
                  </Link>
                  <Link href={"/png-convertor"}>
                    <span className="text-sm font-normal text-gray-300">
                      Document Converter
                    </span>
                  </Link>
                  <Link href={"/image-convertor"}>
                    <span className="text-sm font-normal text-gray-300">
                      Image Converter
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <div>
                <div className="flex items-center md:items-start flex-col gap-6">
                  <Link href={"/"}>
                    <span className="text-sm font-normal text-gray-300">
                      Developers API
                    </span>
                  </Link>
                  <Link href={"/"}>
                    <span className="text-sm font-normal text-gray-300">
                      API Docs
                    </span>
                  </Link>
                  <Link href={"/"}>
                    <span className="text-sm font-normal text-gray-300">
                      CLI Docs
                    </span>
                  </Link>
                  <Link href={"/"}>
                    <span className="text-sm font-normal text-gray-300">
                      API Pricing
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center py-8 gap-4 text-gray-300">
            <p className="text-sm">
              © 2023–2024 Convertly ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href={"/terms"}>
                <span className="text-sm font-normal">Terms of Use</span>
              </Link>
              <Link href={"/privacy"}>
                <span className="text-sm font-normal">Privacy Policy</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
