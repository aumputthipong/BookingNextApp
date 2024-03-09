import { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { withAuth,NextRequestWithAuth } from 'next-auth/middleware'


export async function middleware(request: NextRequest) {
  const user = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  })
  console.log("user",user?.role)

}

// export default withAuth({
//   callbacks:{
//     authorized: async({req,token})=>{
//       if(req.nextUrl.pathname.startsWith("/admin"))return token?.role == "admin";
//       return !!token;
//     }
//   }  
// }
// )




 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/admin/:path*',]
}