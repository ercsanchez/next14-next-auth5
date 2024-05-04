// NOTE: in the tutorial, this file is located in the root of the project (if not using src) or in the root of src (if using src)

import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import authConfig from "~/lib/auth.config";
import { db } from "~/lib/db";

export const {
  handlers, // auth.js docs
  // handlers: { GET, POST }, // tutorial
  auth,
  signIn, // auth.js docs
  signOut, // auth.js docs
} = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
});

// alternative solution for initial middleware setup
// export const authOptions = { providers: [Github] };
// export const {
//   handlers,
//   auth,
// } = NextAuth(authOptions);
