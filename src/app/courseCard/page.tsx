import { IconStarFill } from "justd-icons";
import React from "react";

export default function page() {
  return (
    <section>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 bg-[rgb(206,226,255)] mt-10 mx-10">
        <div className="relative bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
          <div className="group relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DmLCy9PSJfFqO55mNTYOQLx3x8THsbokkw&s"
              alt="Course"
              className="w-full"
            />
            <div className="p-5">
              <a href="#" className="block">
                <h2 className="font-bold text-2xl overflow-hidden text-ellipsis max-w-full line-clamp-2 transition-all duration-300 group-hover:line-clamp-none">
                  JavaScript dasar: Membangun website yang lebih interaktif dan
                  juga animasi
                </h2>
                <p className="hidden text-gray-600 transition-all duration-300 group-hover:block mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi voluptate culpa necessitatibus explicabo fugit
                  mollitia!
                </p>
              </a>
            </div>
            <div className="flex items-center p-5 text-yellow-500 gap-1">
              <IconStarFill />
              <IconStarFill />
              <IconStarFill />
              <IconStarFill />
              <IconStarFill />
              <p className="text-gray-700">(10)</p>
            </div>
          </div>
        </div>

        <div className="relative bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
          <div className="group relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DmLCy9PSJfFqO55mNTYOQLx3x8THsbokkw&s"
              alt="Course"
              className="w-full"
            />
            <div className="p-5">
              <a href="#" className="block">
                <h2 className="font-bold text-2xl overflow-hidden text-ellipsis max-w-full line-clamp-2 transition-all duration-300 group-hover:line-clamp-none">
                  JavaScript tingkat lanjut: Framework modern dan aplikasi
                  dinamis
                </h2>
                <p className="hidden text-gray-600 transition-all duration-300 group-hover:block mt-3">
                  Pelajari cara membangun aplikasi menggunakan framework modern
                  dan teknik terbaik di industri.
                </p>
              </a>
            </div>
            <div className="flex items-center p-5 text-yellow-500 gap-1">
              <IconStarFill />
              <IconStarFill />
              <IconStarFill />
              <IconStarFill />
              <IconStarFill />
              <p className="text-gray-700">(15)</p>
            </div>
          </div>
        </div>
        <div className="relative bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
          <div className="group relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DmLCy9PSJfFqO55mNTYOQLx3x8THsbokkw&s"
              alt="Course"
              className="w-full"
            />
            <div className="p-5">
              <a href="#" className="block">
                <h2 className="font-bold text-2xl overflow-hidden text-ellipsis max-w-full line-clamp-2 transition-all duration-300 group-hover:line-clamp-none">
                  JavaScript tingkat lanjut: Framework modern dan aplikasi
                  dinamis
                </h2>
                <p className="hidden text-gray-600 transition-all duration-300 group-hover:block mt-3">
                  Pelajari cara membangun aplikasi menggunakan framework modern
                  dan teknik terbaik di industri.
                </p>
              </a>
            </div>
            <div className="flex items-center p-5 text-yellow-500 gap-1">
              <IconStarFill />
              <IconStarFill />
              <IconStarFill />
              <IconStarFill />
              <IconStarFill />
              <p className="text-gray-700">(15)</p>
            </div>
          </div>
        </div>
        <div className="relative bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
          <div className="group relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DmLCy9PSJfFqO55mNTYOQLx3x8THsbokkw&s"
              alt="Course"
              className="w-full"
            />
            <div className="p-5">
              <a href="#" className="block">
                <h2 className="font-bold text-2xl overflow-hidden text-ellipsis max-w-full line-clamp-2 transition-all duration-300 group-hover:line-clamp-none">
                  JavaScript tingkat lanjut: Framework modern dan aplikasi
                  dinamis
                </h2>
                <p className="hidden text-gray-600 transition-all duration-300 group-hover:block mt-3">
                  Pelajari cara membangun aplikasi menggunakan framework modern
                  dan teknik terbaik di industri.
                </p>
              </a>
            </div>
            <div className="flex items-center p-5 text-yellow-500 gap-1">
              <IconStarFill />
              <IconStarFill />
              <IconStarFill />
              <IconStarFill />
              <IconStarFill />
              <p className="text-gray-700">(15)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
