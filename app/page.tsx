"use client";

import { useEffect, useState } from "react";

const sizes = [
  "size-[40px]",
  "size-[50px]",
  "size-[60px]",
  "size-[70px]",
  "size-[80px]",
  "size-[90px]",
  "size-[100px]",
];

export default function Home() {
  const [number, setNumber] = useState(0);
  const [size, setSize] = useState(sizes[number]);

  useEffect(() => {
    setSize(sizes[number]);
  }, [number]);

  return (
    <div className="px-10">
      <h1>Hello</h1>
      <div className="flex gap-5 mx-auto">
        <div className={`${size} bg-teal-400 animate-jump`}></div>
      </div>

      <button
        className="px-4 py-2 bg-indigo-500 text-white hover:bg-indigo-800 transition-colors duration-300 rounded-md mt-20"
        onClick={() => setNumber((number + 1) % sizes.length)}
      >
        {number < sizes.length - 1 ? "Zoom In" : "Zoom Out"}
      </button>

      <button className="ms-3 px-4 py-2 font-poppins bg-indigo-500 text-white hover:bg-indigo-800 transition-colors duration-300 rounded-md mt-20">
        Zoom In
      </button>

      <div className="group border-2 border-gray-300 max-w-[400px] mx-auto p-5 rounded-xl">
        <div className="flex gap-5">
          <div className="group-hover:bg-teal-400 size-10 rounded-full bg-gray-300 transition-colors duration-500"></div>

          <div className="flex flex-col gap-3 grow mt-1.5">
            <div className="w-2/4 rounded-full bg-gray-300 h-2"></div>
            <div className="w-full rounded-full bg-gray-300 h-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
