"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
  route: string;
}

export function LoginButton({
  children,
  mode = "redirect",
  asChild,
  route,
}: LoginButtonProps) {
  const router = useRouter();

  const onClick = () => {
    console.log("login button clicked");
    router.push(route);
  };

  if (mode === "modal") {
    return <span>TODO: Implement modal</span>;
  }

  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
}
