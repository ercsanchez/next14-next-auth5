// NOTE: in the tutorial, this file is located in the root of the project (if not using src) or in the root of src (if using src)

import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import authConfig from "~/lib/auth.config";
import { db } from "~/lib/db";
import { getUserById } from "~/data/user";

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
