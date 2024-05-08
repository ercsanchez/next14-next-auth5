"use client";

import { useCurrentUser } from "~/hooks/use-current-user";
import { UserInfo } from "~/components/user-info";

export default function ServerPage() {
  const user = useCurrentUser();

  return <UserInfo user={user} label="👩 Client component" />;
}
