import React from "react";
import Image from "next/image";

function Header(props) {
  return (
    <div>
      <div className="h-fit border-b-2  border-inherit w-full py-2 px-5 space-y-2">
        <div className="flex justify-between">
          <div className=" hidden space-x-2 text-2xl items-center md:flex text-gray-700 font-semibold">
            Welcome {props.data.name} !
          </div>
          <div className="flex items-center justify-end w-max">
            <Image
              height={50}
              width={50}
              className=" rounded-full"
              src={props.data.image}
              alt="grid icon"
            ></Image>
          </div>
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
    </div>
  );
}

export default Header;
