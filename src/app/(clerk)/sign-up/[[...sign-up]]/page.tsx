import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignUp
      path="/sign-up"
      forceRedirectUrl="/sign-in"
      fallbackRedirectUrl="/sign-in"
    />
  );
}
