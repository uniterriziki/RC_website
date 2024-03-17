import { socials } from "../../lib/constants";
import React from "react";

const page = () => {
  return (
    <div className="antialiased">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col space-y-6 bg-cyan-700 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white ">
          {/* contact info div */}
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">Contact US</h1>
              <p className="pt-2 text-cyan-200 text-sm ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center">
                {/* insert call icon here */}
                <span> +(254)-712-345-678</span>
              </div>
            </div>
            <div>
              <div className="inline-flex space-x-2 items-center">
                {/* insert mail icon here */}
                <span>info@mailtest.com</span>
              </div>
            </div>
            <div>
              <div className="inline-flex space-x-2 items-center">
                {/* insert location icon here */}
                <span>Univeristy of Nairobi, KNH campus</span>
              </div>
            </div>
          </div>

          {/* contact form div */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 ">
              <form>contact form</form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
