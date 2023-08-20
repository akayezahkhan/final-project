import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import User from "@/models/user";

export async function POST(request) {
  return request.json().then((data) => {
    let { name, email, task } = data;
    return connectMongoDB().then(() => {
      return User.create({ name, email, task }).then(() => {
        return NextResponse.json(
          { message: "User Registered" },
          { status: 201 }
        );
      });
    });
  });
}
