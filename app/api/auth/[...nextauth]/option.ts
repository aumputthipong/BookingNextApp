import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";


export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({email: session.user?.email});
      // session.user.id = sessionUser._id;
      return session;
    },
    async signIn({ user}) {
      console.log("profile",user);
      const userInfo = user;
   
      try {
        await connectMongoDB();

        const userExist = await User.findOne({email: userInfo?.email});
        
        if (!userExist){
          const user = await User.create({
            email: userInfo?.email,
            name: userInfo?.name,
            image: userInfo?.image,
            role:"user",
          });
        }
        return true;

      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};
