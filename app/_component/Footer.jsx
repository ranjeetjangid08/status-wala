import React from "react";
import {
  ClipboardDocumentListIcon,
  GlobeAsiaAustraliaIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-[50%]">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-4">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h3 className="text-2xl font-semibold">Status Wala</h3>
          </div>
          <div className="w-full md:w-auto flex items-center text-center mb-4 md:mb-0">
            <a
              href="#"
              className="flex items-center text-sm hover:text-blue-500 mr-3"
            >
              <ClipboardDocumentListIcon className="w-6 h-6 mr-1" />
              Privacy Policy
            </a>
            <a
              href="#"
              className="flex items-center text-sm hover:text-blue-500 mr-3"
            >
              <GlobeAsiaAustraliaIcon className=" w-6 h-7 mr-1" />
              Explore More
            </a>
            <a
              href="#"
              className="flex items-center text-sm hover:text-blue-500"
            >
              <ClipboardDocumentCheckIcon className=" w-6 h-6 mr-1" />
              Terms of Use
            </a>
          </div>
        </div>
        <div className="text-center border-t border-gray-700 pt-4">
          <p className="text-sm">© 2024 Status Wala. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
