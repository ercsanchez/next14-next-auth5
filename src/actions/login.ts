"use server";

import * as z from "zod";
import { AuthError } from "next-auth";

import { LoginSchema } from "~/schemas";
import { signIn } from "~/lib/auth";
import { DEFAULT_LOGIN_REDIRECT } from "~/routes";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    }); // explicitly setting the redirect (for clarity), even though middleware will redirect if user is logged in
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }

    // next.js requires to throw the error, otherwise, it won't redirect
    throw error;
  }

  // Unnecessary since will be redirected on successful login
  // return { success: "Email sent!" };
};

// signIn() for use in server component or server action
// export const oauthLogin = async (provider: string) => {
//   try {
//     await signIn(provider, { redirectTo: DEFAULT_LOGIN_REDIRECT });
//   } catch (error) {
//     if (error instanceof AuthError) {
//       switch (error.type) {
//         case "OAuthSignInError":
//           return {
//             error: `Invalid ${provider} credentials!`,
//           };
//         default:
//           return {
//             error: "Something went wrong!",
//           };
//       }
//     }
//     throw error;
//   }
//   return { success: "Succcessfully logged in!" };
// };
