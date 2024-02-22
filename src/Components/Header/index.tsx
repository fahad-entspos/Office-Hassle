import React from "react";

function Header() {
  return (
    <>
      <div className="w-full mt-20">
        <div className="flex justify-between px-5 lg:px-16 flex-wrap ">
          <div className=" ">
            <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl">
              MAKE MANUFACTURING
            </h2>
            <h2 className="text-[#366bff] text-3xl font-semibold lg:text-4xl mt-4">
              {" "}
              EASY.
            </h2>
            <p className="text-sm text-gray-800 font-medium lg:text-base mt-6">
              Manage your manufacturing, assembly, and inventory all in one
              place.
            </p>
            <div className="flex justify-start lg:justify-start mt-12">
              <button className="text-white bg-[#366bff] py-[8px] px-5 shadow-xl text-lg font-semibold rounded-lg ">
                {" "}
                Try for Free
              </button>
            </div>
          </div>
          <img
            src="/download (1).jpg"
            alt="error"
            className="max-w-[95%] mt-5 xl:mt-0 shadow-2xl  h-auto"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
