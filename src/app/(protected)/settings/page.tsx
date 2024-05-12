import { currentUser } from "~/lib/auth";
import { Settings } from "~/components/settings";

export default async function SettingsPage() {
  const user = await currentUser();

  if (!user) return null;

  return <Settings user={user} />;
}
