import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="border-5 border-t-white rounded-full h-[100px] w-[100px] flex animate-spin"></div>
    </div>
  );
};

export default Loader;
