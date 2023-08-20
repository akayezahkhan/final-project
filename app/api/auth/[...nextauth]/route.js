import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      console.log("User" + user);
      let { name, email, notes } = user;
      if (account.provider == "google") {
        try {
          await connectMongoDB();
          console.log("Mongo responded");
          const userExists = await User.findOne({ email });
          if (!userExists) {
            console.log("User does not exist in db");
            let res = await fetch(process.env.NEXTAUTH_URL + "api/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name, email, notes }),
            });
            if (res.ok) {
              console.log("adding User in db");
              return user;
            }
          }
          console.log("User already exists in db");
        } catch (error) {
          console.log("ERROR SAVING DATA TO MONGO", error);
        }
      }
      return user;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
