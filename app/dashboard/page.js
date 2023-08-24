"use client";
import React from "react";
import Navbar from "@/components/navbar";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Header from "@/components/header";
import { useState } from "react";
import Bodypart from "@/components/bodypart";

export default function Dashboard() {
  const { status, data: session } = useSession();
  const [showSidebar, setshowSidebar] = useState("show");

  const showOnClick = () => {
    setshowSidebar("show");
  };
  const hideOnClick = () => {
    setshowSidebar("");
  };

  const router = useRouter();
  if (typeof window === "undefined") {
    return <div></div> // Return null on the server-side to prevent rendering
  }
  return (
    <div className="overflow-hidden">
      {status === "authenticated" ? (
        <div className="w-screen min-h-screen">
          <Navbar />
          <div className="flex justify-start">
            <div className="flex flex-col w-1/4">
              <button
                className=" font-medium my-2 p-1 border justify-center rounded-lg hover:bg-red-600"
                onClick={hideOnClick}
              >
                hide sidebar
              </button>
              {/* SIDEBAR */}
              {showSidebar && (
                <div className="h-screen grid grid-col-1 shadow-black bg-slate-100 bg-opacity-40 ">
                  <div className="flex flex-col justify-center">
                    <div className="h-12 my-2 flex justify-center align-middle items-center text-2xl font-bold">
                      My Stack
                    </div>
                    <div className="h-full flex flex-col justify-between text-lg">
                      <div className="flex flex-col">
                        <span className="flex justify-center bg-inherit hover:opacity-90 focus:opacity-90 hover:cursor-pointer w-full hover:bg-[#f8f6f4] focus:bg-[#f8f6f4] p-2">
                          Courses
                        </span>
                        <span className="flex justify-center bg-inherit hover:opacity-90 focus:opacity-90 hover:cursor-pointer w-full hover:bg-[#f8f6f4] focus:bg-[#f8f6f4] p-2">
                          Summer Coding
                        </span>
                        <span className="flex justify-center bg-inherit hover:opacity-90 focus:opacity-90 hover:cursor-pointer w-full hover:bg-[#f8f6f4] focus:bg-[#f8f6f4] p-2">
                          Data Science
                        </span>
                        <span className="flex justify-center bg-inherit hover:opacity-90 focus:opacity-90 hover:cursor-pointer w-full hover:bg-[#f8f6f4] focus:bg-[#f8f6f4] p-2">
                          Setting
                        </span>
                      </div>
                      <span
                        className="flex justify-center bg-inherit hover:opacity-90 focus:opacity-90 hover:cursor-pointer w-full hover:bg-red-600 focus:bg-red-600 hover:text-white p-2"
                        onClick={() => signOut()}
                      >
                        Log out
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {/* SIDEBAR END */}

              <button
                className=" font-medium my-2 p-1 border justify-center rounded-lg hover:bg-green-600"
                onClick={showOnClick}
              >
                show sidebar
              </button>
            </div>
            <div className="w-3/4 flex flex-col">
              <Header user={session?.user}></Header>
              <Bodypart/>
            </div>
          </div>
        </div>
      ) : (
        router.push("/")
      )}
    </div>
  );
}
