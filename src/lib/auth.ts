// NOTE: in the tutorial, this file is located in the root of the project (if not using src) or in the root of src (if using src)

import NextAuth from "next-auth";
import Github from "next-auth/providers/github";

export const {
  handlers, // auth.js docs
  // handlers: { GET, POST }, // tutorial
  auth,
  // signIn, // auth.js docs
  // signOut, // auth.js docs
} = NextAuth({
  providers: [Github],
});

// alternative solution for initial middleware setup
// export const authOptions = { providers: [Github] };
// export const {
//   handlers,
//   auth,
// } = NextAuth(authOptions);
