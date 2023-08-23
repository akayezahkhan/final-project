import React from "react";
import Image from "next/image";

function Header(props) {
  return (
      <div className="border-b-2 border-purple-500 py-2 px-4 space-y-2 flex flex-col mb-2 mx-2">
        <div className="flex justify-between">
          <div className="hidden space-x-2 text-2xl items-center md:flex text-gray-700 font-semibold">
            Welcome {props.user.name} !
          </div>
            <Image
              height={50}
              width={50}
              className=" rounded-full"
              src={props.user.image}
              alt="grid icon"
            ></Image>
        </div>
        <div className="flex justify-between items-baseline">
          <div className="h-full px-2 items-center mr-20">
            <p className="w-fit text-[#1458DD] border-b-2 border-[#1458DD] font-medium py-2">ToDo</p>
          </div>
          <div className="h-full bg-white p-2 items-center rounded-md">
            <input
              className="bg-inherit border-none outline-none w-full"
              placeholder="Search"
            ></input>
          </div>
        </div>
      </div>
  );
}

export default Header;
