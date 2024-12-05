import React from "react";

export default function page() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-8 py-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Personal
            <hr className="mt-2 border-white w-20" />
          </h2>
          <ul className="space-y-3">
            <li className="hover:text-gray-300 transition-colors">
              <a href="#">Digital Wallet</a>
            </li>
            <li className="hover:text-gray-300 transition-colors">
              <a href="#">Finally Service</a>
            </li>
            <li className="hover:text-gray-300 transition-colors">
              <a href="#">Lifestyle</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Corporation
            <hr className="mt-2 border-white w-28" />
          </h2>
          <ul className="space-y-3">
            <li className="hover:text-gray-300 transition-colors">
              <a href="#">About</a>
            </li>
            <li className="hover:text-gray-300 transition-colors">
              <a href="#">Karier</a>
            </li>
            <li className="hover:text-gray-300 transition-colors">
              <a href="#">Newsroom</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Other
            <hr className="mt-2 border-white w-20" />
          </h2>
          <ul className="space-y-3">
            <li className="hover:text-gray-300 transition-colors">
              <a href="#">Digital Wallet</a>
            </li>
            <li className="hover:text-gray-300 transition-colors">
              <a href="#">Finally Service</a>
            </li>
            <li className="hover:text-gray-300 transition-colors">
              <a href="#">Lifestyle</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Help
            <hr className="mt-2 border-white w-20" />
          </h2>
          <ul className="space-y-3">
            <li className="hover:text-gray-300 transition-colors">
              <a href="#">FAQ</a>
            </li>
            <li className="hover:text-gray-300 transition-colors">
              <a href="#">Contact Us</a>
            </li>
            <li className="hover:text-gray-300 transition-colors">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-t-2 border-white max-w-screen-xl mx-auto my-2" />
      <div className="mx-[80px] my-5 flex md:flex-row flex-col items-center gap-5">
        <h2 className="text-lg">Download aplikasi kami di</h2>
        <a href="">
          <img
            src="https://a.m.dana.id/danaweb/v3/googleplay-download.svg"
            alt=""
          />
        </a>
        <a href="">
          <img
            src="https://a.m.dana.id/danaweb/v3/appstore-download.svg"
            alt=""
          />
        </a>
      </div>
      <div className="bg-gray-950 text-center py-4">
        <p className="text-sm font-medium text-gray-200">
          &copy; Alope. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
