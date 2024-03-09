import User from "@/models/user";
import { JWT } from "next-auth/jwt";
declare module "next-auth"{
    interface Session{
        user: User;
    }
}

declare module "next-auth"{
    type JWT = User;
}
