import SEO from "@/components/SEO";
import React from "react";

const terms = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-10">
      <SEO title={"Terms of Use"} description={""} />
      <h1 className="text-center font-semibold text-3xl mb-12 text-red-500">
        Terms of Service
      </h1>

      <p className="mb-10 text-gray-700 text-base font-normal">
        <b className="text-xl font-normal block mb-4">1. Introduction</b>
        These Terms of Service {`(the "Terms")`} govern your use of the
        Convertly website and services {`(the "Services")`}. By accessing and
        using the Services, you acknowledge and agree to be bound by the
        following Terms. These Terms apply to the entire website and any API
        usage provided by Convertly.
      </p>
      <p className="mb-10 text-gray-700 text-base font-normal">
        <b className="text-xl font-normal block mb-4">
          2. Legal Entity and Registered Address
        </b>
        The legal entity that provides the Services is Convertly Limited, a
        company registered in Cyprus, with its registered address at Krinou 3,
        Agios Athanasios 4103, Limassol, Cyprus.
      </p>
      <p className="mb-10 text-gray-700 text-base font-normal">
        <b className="text-xl font-normal block mb-4">
          3. Privacy Policy and GDPR Compliance
        </b>
        We are committed to protecting your privacy and complying with the
        General Data Protection Regulation (GDPR). For information regarding the
        collection, use, share and protection of your personal data, please
        refer to our Privacy Policy located at https://convertly.co/privacy/.
      </p>
      <p className="mb-10 text-gray-700 text-base font-normal">
        <b className="text-xl font-normal block mb-4">
          4. GDPR data processing agreement
        </b>
        If you are a business or entity subject to GDPR requirements or your
        data falls under the scope of the GDPR, we may need to enter into a Data
        Processing Agreement (DPA) with you. A DPA is a legal document that sets
        out the terms and conditions under which we will process your personal
        information.
      </p>
      <p className="mb-10 text-gray-700 text-base font-normal">
        <b className="text-xl font-normal block mb-4">
          5. Registration and User Conduct
        </b>
        You must be at least 13 years old to register for and use the Service.
        By signing up for the Service, you will create a personalized account.
        You agree to promptly notify us of any unauthorized use of your account.
        Convertly Limited is not liable for any losses or damages resulting from
        the unauthorized use of your login credentials and/or account. Any
        premium plan you purchase from this Service is for personal use only and
        cannot be shared with others.
      </p>
    </div>
  );
};

export default terms;
