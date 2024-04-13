import React from "react";

const PageTitle = ({ title, description }) => {
  return (
    <div className="mb-10">
      <h1 className="text-center font-semibold text-3xl text-red-500 mb-1">
        {title}
      </h1>
      <h2 className="text-base text-gray-700 font-normal text-center">
        {description}
      </h2>
    </div>
  );
};

export default PageTitle;
