// alternative solution for initial middleware setup
// import NextAuth from "next-auth";
// import { authOptions } from "~/lib/auth";

// export const { auth: middleware } = NextAuth(authOptions);

import { auth } from "~/lib/auth";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  console.log("ROUTE:", req.nextUrl.pathname);
  console.log("IS LOGGED IN:", isLoggedIn);
});

export const config = {
  // test url path for middleware:
  // matcher: ["/auth/login", "/auth/register"], // test url path for middleware

  // auth.js docs:
  // matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"], // auth.js docs

  // clerk docs:
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"], // source: https://clerk.com/docs/quickstarts/nextjs?utm_source=sponsorship&utm_medium=youtube&utm_campaign=code-with-antonio&utm_content=12-31-2023#add-middleware-to-your-application
};
