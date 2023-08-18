import { connectMongoDB } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user";

export async function POST(request) {
  return request.json().then((data) => {
    let { name, email } = data;
    return connectMongoDB().then(() => {
      return User.create({ name, email }).then(() => {
        return NextResponse.json(
          { message: "User Registered" },
          { status: 201 }
        );
      });
    });
  });
}
