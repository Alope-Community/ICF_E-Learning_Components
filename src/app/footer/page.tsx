import React from "react";

export default function page() {
  return (
    <footer className=" bg-sky-600">
      <div className="grid grid-cols-4 gap-5 mx-20">
        <div className="text-white my-10 ml-10">
          <h2 className="mb-5 font-bold text-2xl border-white pb-2">
            Personal
            <hr className="border-2 border-white w-[100px]"/>
          </h2>
          <ul className="space-y-4">
            <li className="text-lg hover:text-gray-300 transition">
              <a href="#">Digital Wallet</a>
            </li>
            <li className="text-lg hover:text-gray-300 transition">
              <a href="#">Finally Service</a>
            </li>
            <li className="text-lg hover:text-gray-300 transition">
              <a href="#">Lifestyle</a>
            </li>
          </ul>
        </div>
        <div className="text-white my -10 ml-10">
          <h2 className="mb-5 font-bold text-2xl border-white pb-2">
            Corporation
            <hr className="border-2 border-white w-[150px]"/>
          </h2>
          <ul className="space-y-4">
            <li className="text-lg hover:text-gray-300 transition">
              <a href="#">About</a>
            </li>
            <li className="text-lg hover:text-gray-300 transition">
              <a href="#">Karier</a>
            </li>
            <li className="text-lg hover:text-gray-300 transition">
              <a href="#">Newroom</a>
            </li>
          </ul>
        </div>
        <div className="text-white my-10 ml-10">
          <h2 className="mb-5 font-bold text-2xl border-white pb-2">
            Other
            <hr className="border-2 border-white w-[100px]"/>
          </h2>
          <ul className="space-y-4">
            <li className="text-lg hover:text-gray-300 transition">
              <a href="#">Digital Wallet</a>
            </li>
            <li className="text-lg hover:text-gray-300 transition">
              <a href="#">Finally Service</a>
            </li>
            <li className="text-lg hover:text-gray-300 transition">
              <a href="#">Lifestyle</a>
            </li>
          </ul>
        </div>
        <div className="text-white my-10 ml-10">
          <h2 className="mb-5 font-bold text-2xl border-white pb-2">
            Help
            <hr className="border-2 border-white w-[100px]"/>
          </h2>
          <ul className="space-y-4">
            <li className="text-lg hover:text-gray-300 transition">
              <a href="#">FAQ</a>
            </li>
            <li className="text-lg hover:text-gray-300 transition">
              <a href="#">Contact Us</a>
            </li>
            <li className="text-lg hover:text-gray-300 transition">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
