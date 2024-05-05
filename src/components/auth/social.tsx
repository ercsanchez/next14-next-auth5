"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { signIn } from "next-auth/react"; // signIn() for use in client component
import { DEFAULT_LOGIN_REDIRECT } from "~/routes";
// import { oauthLogin } from "~/actions/login"; // if using signIn() in server action
import { Button } from "~/components/ui/button";

export function Social() {
  const onClick = (provider: "google" | "github") => {
    // if using signIn() in server action
    // await oauthLogin(provider);

    // tutorial solution: use signIn() provided by next-auth/react for use in client component
    signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
  };

  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("google")}
      >
        <FcGoogle />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("github")}
      >
        <FaGithub />
      </Button>
    </div>
  );
}
