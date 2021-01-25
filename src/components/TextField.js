import React from "react";

const TextField = () => {
  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline font-light">Build the </span>
          <span className="block text-indigo-500 xl:inline font-light">
            future
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="mt-9 rounded-md shadow">
            <button
              href="#"
              className="w-full flex items-center mr-6 justify-center px-8 py-3 border border-transparent text-base font-small rounded-md text-white bg-black hover:bg-gray-800	 md:py-4 md:text-lg md:px-10g"
            >
              Get started
            </button>
          </div>
          <div className="mt-9">
            <button
              href="#"
              className="w-full flex items-center ml-6 justify-center px-8 py-3 border border-transparent text-base font-small rounded-md text-black bg-gray-200 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TextField;
