import { auth, signOut } from "~/lib/auth";

export default async function SettingsPage() {
  const session = await auth();
  console.log("session", session);

  return (
    <div>
      <p>Settings Page</p>
      <p>Session: {JSON.stringify(session)}</p>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
}
