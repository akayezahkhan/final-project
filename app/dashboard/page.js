"use client";
import React from "react";
import Navbar from "@/components/navbar";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Header from "@/components/header";

export default function Dashboard() {
  const { status, data: session } = useSession();
  const router = useRouter();
  if (typeof window === "undefined") {
    return <div></div> // Return null on the server-side to prevent rendering
  }
  return (
    <div>
      {status === "authenticated" ? (
        <div className="min-w-full min-h-screen ">
          <Navbar />
          <div className="flex">
            {/* SIDEBAR */}
            <div className="h-screen hidden sm:grid grid-col-1 w-60 shadow-black bg-slate-100 bg-opacity-40 ">
              <div className=" flex flex-col">
                <div className="h-20 flex justify-center align-middle items-center text-2xl font-bold">
                  My Stack
                </div>
                <div className="h-full flex flex-col justify-between text-lg">
                  <div className="flex flex-col space-y-3">
                    <span className="bg-inherit hover:opacity-90 focus:opacity-90 hover:cursor-pointer pl-6 justify-start w-full hover:bg-[#f8f6f4] focus:bg-[#f8f6f4] py-2">
                      Courses
                    </span>
                    <span className="bg-inherit hover:opacity-90 focus:opacity-90 hover:cursor-pointer pl-6 justify-start w-full hover:bg-[#f8f6f4] focus:bg-[#f8f6f4] py-2">
                      Summer Coding
                    </span>
                    <span className="bg-inherit hover:opacity-90 focus:opacity-90 hover:cursor-pointer pl-6 justify-start w-full hover:bg-[#f8f6f4] focus:bg-[#f8f6f4] py-2">
                      Data Science
                    </span>
                    <span className="bg-inherit hover:opacity-90 focus:opacity-90 hover:cursor-pointer pl-6 justify-start w-full hover:bg-[#f8f6f4] focus:bg-[#f8f6f4] py-2">
                      Setting
                    </span>
                  </div>
                  <span
                    className="bg-inherit hover:opacity-90 focus:opacity-90 hover:cursor-pointer pl-6 w-full hover:bg-red-600 focus:bg-red-600 hover:text-white justify-end py-2 mb-2"
                    onClick={() => signOut()}
                  >
                    Log out
                  </span>
                </div>
              </div>
            </div>
            {/* SIDEBAR END */}
            <div className="w-full">
              <Header data={session?.user}></Header>
              <div className="h-fit">
                Ayezah
                {/* bodypart here */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        router.push("../")
      )}
    </div>
  );
}
