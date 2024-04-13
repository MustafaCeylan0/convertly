import SecurityIcon from "../../public/images/securityicon.svg";
import SEO from "@/components/SEO";
import Image from "next/image";

const Security = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-10">
      <SEO title={"Security"} description={""} />
      <h1 className="text-center font-semibold text-3xl mb-6 text-red-500">
        Security
      </h1>
      <p className="text-center text-gray-700 text-base font-normal mb-14 max-w-4xl mx-auto">
        Convertly pays attention to the safety of your files. We take all the
        measures needed to protect your data. Take a look at the points below to
        know exactly why Convertly is secure to use.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <div className="flex gap-4 mb-10">
            <div className="w-full max-w-10">
              <Image src={SecurityIcon} alt="" width={100} height={100} />
            </div>
            <div>
              <p className="text-base font-normal text-[#333333] mb-2">
                Storage
              </p>
              <p className="text-[#746f6f] text-[15px] font-normal">
                The input files and any temporary files are deleted immediately
                after conversion. The output files are deleted after 24 hours
                but you can delete them manually at any time. To do so, click on{" "}
                {`"My Files"`} on the top right and then click on the {`"X"`}{" "}
                icon near the file name you want to delete.
              </p>
            </div>
          </div>
          <div className="flex gap-4 mb-10">
            <div className="w-full max-w-10">
              <Image src={SecurityIcon} alt="" width={100} height={100} />
            </div>
            <div>
              <p className="text-base font-normal text-[#333333] mb-2">
                Сertified Datacenters
              </p>
              <p className="text-[#746f6f] text-[15px] font-normal">
                Convertly uses only trusted and highly secure cloud service
                providers and data centers, all of them are certified with ISO
                27001 (Information Security Standard).
              </p>
            </div>
          </div>
          <div className="flex gap-4 mb-10">
            <div className="w-full max-w-10">
              <Image src={SecurityIcon} alt="" width={100} height={100} />
            </div>
            <div>
              <p className="text-base font-normal text-[#333333] mb-2">
                Secure Communication
              </p>
              <p className="text-[#746f6f] text-[15px] font-normal">
                Your data is protected from being stolen, altered, or diverted
                because all the communications in-between your web browser, our
                server, and conversion hosts are performed via a secured channel
                protected with a state-of-the-art TLS encryption and with HSTS
                web security policy enabled.
              </p>
            </div>
          </div>
          <div className="flex gap-4 mb-10">
            <div className="w-full max-w-10">
              <Image src={SecurityIcon} alt="" width={100} height={100} />
            </div>
            <div>
              <p className="text-base font-normal text-[#333333] mb-2">
                Data Protection
              </p>
              <p className="text-[#746f6f] text-[15px] font-normal">
                Our infrastructure is based in Germany and is fully compliant
                with the EU General Data Protection Regulation (GDPR). The
                safety of your data and personal information is of utmost
                importance to us.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-4 mb-10">
            <div className="w-full max-w-10">
              <Image src={SecurityIcon} alt="" width={100} height={100} />
            </div>
            <div>
              <p className="text-base font-normal text-[#333333] mb-2">
                Scalable Service
              </p>
              <p className="text-[#746f6f] text-[15px] font-normal">
                We convert over 1 million of files daily, over 1 PB of data
                monthly. Convertly remains stable while adapting to increasing
                workload. It means for you that if some user who uses the
                website has a load peak, your conversion {`won't`} be affected
                by it.
              </p>
            </div>
          </div>
          <div className="flex gap-4 mb-10">
            <div className="w-full max-w-10">
              <Image src={SecurityIcon} alt="" width={100} height={100} />
            </div>
            <div>
              <p className="text-base font-normal text-[#333333] mb-2">
                Data Isolation
              </p>
              <p className="text-[#746f6f] text-[15px] font-normal">
                Convertly keeps user data isolated which means that each
                conversion is performed in a separate sandboxed environment.
                Therefore, {`it's`} only you who have access to your files and
                even the Convertly team cannot access them.
              </p>
            </div>
          </div>
          <div className="flex gap-4 mb-10">
            <div className="w-full max-w-10">
              <Image src={SecurityIcon} alt="" width={100} height={100} />
            </div>
            <div>
              <p className="text-base font-normal text-[#333333] mb-2">
                Privacy
              </p>
              <p className="text-[#746f6f] text-[15px] font-normal">
                All your files are bound to your own IP address which means that
                only you — the person who uploaded and converted the file — can
                download the result.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
