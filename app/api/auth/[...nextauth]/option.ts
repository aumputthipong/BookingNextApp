import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";


export const options: NextAuthOptions = {
  secret: process.env.AUTH_SECRET,
  session:{strategy:"jwt"},
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    profile(profile){
      return({
        id: profile.sub,
        name:`${profile.given_name} ${profile.family_name}`,
        email:profile.email,
        role: profile.role,
        image: profile.picture,
      })
    }
    
    }),
  ],
  
  callbacks: {
    async jwt({token ,user}){
      return{ ...token, ...user};
    },
    async session({ session ,token}) {
      const sessionUser = await User.findOne({ email: session.user?.email });
      if (sessionUser) {
        session.user.id =  sessionUser._id;
        session.user.role = sessionUser.role;
      }
      return session;
    },

    async signIn({ profile, user}) {
      // console.log("profile",user);
      const userInfo = user;
   

      try {
        await connectMongoDB();

        const userExist = await User.findOne({email: profile?.email});
        
        if (!userExist){
          const user = await User.create({
            email: profile?.email,
            name: profile?.name,
            image: userInfo?.image,
          });
        }
        else{
          
        }
        return true;

      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};
