"use client";
import React from "react";


export default function Part1_2() {

  return (
    <div className="h-full flex flex-col rounded-lg p-1">
      <textarea
        placeholder="Add Description"
        className=" textarea textarea-info"
      />
      <div className=" flex space-x-3 items-center">
        {" "}
        <h1 className=" text-cyan-400"> Priority </h1>
        <button className=" hover:scale-105 transition duration-200 my-3 bg-cyan-950 border-2 rounded-xl border-green-400 text-green-400 px-3 py-1 ">
          Low
        </button>
        <button className=" hover:scale-105 transition duration-200 bg-cyan-950 border-2 rounded-xl border-yellow-400 text-yellow-400 px-3 py-1 ">
          Medium
        </button>
        <button className=" hover:scale-105 transition duration-200 bg-cyan-950 border-2 rounded-xl border-red-400 text-red-400 px-3 py-1 ">
          High
        </button>
      </div>

      <div className=" flex space-x-3 items-center">
        {" "}
        <h1 className=" text-cyan-400"> Repeat Every</h1>
        <button className=" hover:scale-105 transition duration-200 my-3 bg-cyan-950 border-2 rounded-xl border-gray-100 text-gray-100 px-3 py-1 ">
          2
        </button>
        <button className=" hover:scale-105 transition duration-200 my-3 bg-cyan-950 border-2 rounded-xl border-gray-100 text-gray-100 px-3 py-1 ">
          weeks
        </button>
      </div>

      <div className=" flex items-center space-x-3 my-3">
        <h1 className=" text-cyan-400">Add Attachment</h1>
        <input type="file" className="  file-input-info" />
      </div>

      <div className=" flex items-center space-x-3 my-3">
        <h1 className=" text-cyan-400">Add Location</h1>

      </div>

      <div className=" flex items-center space-x-3 my-3">
        <h1 className=" text-cyan-400">Make Habbit</h1>
        {/* <FontAwesomeIcon icon={menuIcon} onClick={toggle} className=' h-5 w-5 hover:scale-105 transition duration-150 cursor-pointer' /> */}
        <input type="checkbox" className=" toggle toggle-info" />
      </div>

      <textarea
        placeholder="Add Tags like Work, Exercise etc"
        className=" textarea-info"
      />

      <button className=" hover:scale-105 transition duration-200 bg-black text-white rounded-xl px-2 py-1 float-right my-72">
        Save Task
      </button>
    </div>
  );
}
