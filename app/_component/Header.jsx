"use client";
import { useEffect, useRef, useState } from "react";
import {
  UserCircleIcon,
  HomeIcon,
  CameraIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  PencilSquareIcon,
  CurrencyRupeeIcon,
  LanguageIcon,
  MoonIcon,
  ArrowLeftStartOnRectangleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const dropDownRef = useRef(null);

  useEffect(() => {
    const handleOutside = (e) => {
      console.log("ee--->", e);
      console.log("dropDownRef--->", dropDownRef.current);
      if (!dropDownRef.current.contains(e.target)) {
        setProfileMenuOpen(false);
      }
    };
    window.addEventListener("click", handleOutside);
    return () => {
      window.removeEventListener("click", handleOutside);
    };
  }, [profileMenuOpen]);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4 font-poppins">
        {/* Logo */}
        <div className="w-[200px]">
          <Image src="/logo.svg" alt="logo" width={80} height={100} />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6">
            <a
              href="#home"
              className="flex items-center text-gray-600 hover:text-orange-900"
            >
              Home
            </a>
            <a
              href="#images"
              className="flex items-center text-gray-600 hover:text-orange-900"
            >
              Images
            </a>
            <a
              href="#videos"
              className="flex items-center text-gray-600 hover:text-orange-900"
            >
              Videos
            </a>
            <a
              href="#poster"
              className="flex items-center text-gray-600 hover:text-orange-900"
            >
              Poster
            </a>
          </nav>

          {/* Profile Dropdown for Desktop */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setProfileMenuOpen(!profileMenuOpen);
              }}
              className="flex items-center text-gray-600 hover:text-orange-900"
            >
              <UserCircleIcon className="w-7 h-7" />
            </button>
            {profileMenuOpen && (
              <div
                ref={dropDownRef}
                className="absolute right-0 mt-2 w-auto min-w-[300px] bg-white border rounded shadow-lg font-poppins"
              >
                <a
                  href="#premium"
                  className="flex px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <CurrencyRupeeIcon className="w-5 h-5 mr-1" />
                  Get Premium Membership
                </a>
                <a
                  href="#edit-profile"
                  className="flex px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <PencilSquareIcon className="w-5 h-5 mr-1" />
                  Edit Profile
                </a>
                <a
                  href="#template-language"
                  className="flex px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <LanguageIcon className="w-5 h-5 mr-1" />
                  Template Language
                </a>
                <a
                  href="#dark-mode"
                  className="flex px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <MoonIcon className="w-5 h-5 mr-1" />
                  Change Theme
                </a>
                <a
                  href="#logout"
                  className="flex px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <ArrowLeftStartOnRectangleIcon className="w-5 h-5 mr-1" />
                  Logout
                </a>
                <a
                  href="#delete"
                  className="flex px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <TrashIcon className="w-5 h-5 mr-1" />
                  Delete Account
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setProfileMenuOpen(!profileMenuOpen)}
            className="text-gray-600 focus:outline-none"
          >
            <UserCircleIcon className="w-7 h-7" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-600 focus:outline-none text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md font-poppins fixed top-0 right-0 h-screen w-2/4 z-20 p-6">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="self-end text-gray-600 focus:outline-none text-2xl"
          >
            ✕
          </button>
          <nav className="flex flex-col space-y-4 mt-4">
            <a
              href="#home"
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <HomeIcon className="w-5 h-5 mr-1" />
              Home
            </a>
            <a
              href="#images"
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <CameraIcon className="w-5 h-5 mr-1" />
              Images
            </a>
            <a
              href="#videos"
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <VideoCameraIcon className="w-5 h-5 mr-1" />
              Videos
            </a>
            <a
              href="#poster"
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <DocumentTextIcon className="w-5 h-5 mr-1" />
              Poster
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
