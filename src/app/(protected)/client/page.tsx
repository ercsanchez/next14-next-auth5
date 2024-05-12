// "use client";

// import { useCurrentUser } from "~/hooks/use-current-user";
import { currentUser } from "~/lib/auth";
import { UserInfo } from "~/components/user-info";

export default async function ClientPage() {
  // const user = useCurrentUser();
  const user = await currentUser();

  return <UserInfo user={user} label="👩 Client component" />;
}
