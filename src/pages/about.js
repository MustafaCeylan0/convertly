import SEO from "@/components/SEO";
import Image from "next/image";
import Ab1 from "../../public/images/ab-1.svg";
import Ab2 from "../../public/images/ab-2.svg";
import Ab3 from "../../public/images/ab-3.svg";
import Ab4 from "../../public/images/ab-4.svg";
import Ab5 from "../../public/images/ab-5.svg";

const about = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4 py-10 mb-10">
        <SEO title={"About"} description={""} />
        <h1 className="text-center font-semibold text-3xl mb-6 text-red-500">
          About
        </h1>
        <p className="text-center text-gray-700 text-base font-normal mb-14 max-w-4xl mx-auto">
          In 2014, we decided to create the first file conversion website with
          user experience in mind. Today Convertly is ranked among the 1000 most
          visited sites in the world and almost every competitor has already
          borrowed something from our interface.
        </p>
        <div className="flex justify-center md:justify-center gap-5 flex-wrap ">
          <div className="max-w-[200px]">
            <div className="flex justify-center mb-3">
              <Image src={Ab1} alt="" />
            </div>
            <p className="text-base text-gray-900 text-center">
              We convert more than <b>1,000,000 </b> files daily
            </p>
          </div>
          <div className="max-w-[200px]">
            <div className="flex justify-center mb-3">
              <Image src={Ab2} alt="" />
            </div>
            <p className="text-base text-gray-900 text-center">
              Over <b>1 PB </b> of data converted monthly
            </p>
          </div>
          <div className="max-w-[200px]">
            <div className="flex justify-center mb-3">
              <Image src={Ab3} alt="" />
            </div>
            <p className="text-base text-gray-900 text-center">
              More than <b>10 million </b> people use our service every month
            </p>
          </div>
          <div className="max-w-[200px]">
            <div className="flex justify-center mb-3">
              <Image src={Ab4} alt="" />
            </div>
            <p className="text-base text-gray-900 text-center">
              <b>1M+ </b> people use our Chrome extension
            </p>
          </div>
          <div className="max-w-[200px]">
            <div className="flex justify-center mb-3">
              <Image src={Ab5} alt="" />
            </div>
            <p className="text-base text-gray-900 text-center">
              We support <b>25600+ </b> conversions between <b>300+ </b> file
              formats
            </p>
          </div>
        </div>
      </div>
      <div className="py-28 bg-[#F8F8F8]">
        <h3 className="text-xl text-center text-gray-900 mb-5">Contact Us</h3>
        <p className="text-center">
          Email:{" "}
          <a
            href="mailto:hello@convertly.co"
            className="text-sm transition-all hover:text-red-500"
          >
            hello@convertly.co
          </a>
        </p>
      </div>
    </div>
  );
};

export default about;
