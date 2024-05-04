// NOTE: in the tutorial, this file is located in the root of the project (if not using src) or in the root of src (if using src)

import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

// tutorial solution
// import { UserRole } from "@prisma/client";
import authConfig from "~/lib/auth.config";
import { db } from "~/lib/db";
import { getUserById } from "~/data/user";

// auth.js docs solution for augmenting session type
// import { type DefaultSession } from "next-auth";
// declare module "next-auth" {
//   interface Session {
//     user: {
//       role: UserRole;
//     } & DefaultSession["user"];
//   }
// }

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
  callbacks: {
    // async signIn({ user }) {
    //   console.log({ "signIn callback user argument": user });

    //   // tutorial code: this is unnecessary query since user is already passed from the credentials provider's authorize function
    //   // we can just comment this out and proceed to conditional check
    //   // const existingUser = await getUserById(user.id);

    //   const existingUser = user;
    //   if (!existingUser || !existingUser.emailVerified) return false;

    //   return true;
    // },
    async jwt({ token, user, profile, trigger }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.role = existingUser.role;

      // console.log({ "jwt token": token });
      return token;
    },
    async session({ token, session }) {
      // if (session.user) { // tutorial
      // should also check if token.customField exists
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }

      if (session.user && token.role) {
        // tutorial solution since he couldn't augment JWT token
        // session.user.role = token.role as UserRole;

        // auth.js docs solution
        session.user.role = token.role;
      }

      // alternative solution
      // if (session.user && token.sub) {
      //   const modifiedSession = {
      //     ...session,
      //     user: { ...session.user, id: token.sub },
      //   };
      //   console.log({ "session token": token, modifiedSession });
      //   return modifiedSession;
      // }

      // console.log({ "session token": token, session });
      return session;
    },
  },
});

// alternative solution for initial middleware setup
// export const authOptions = { providers: [Github] };
// export const {
//   handlers,
//   auth,
// } = NextAuth(authOptions);
