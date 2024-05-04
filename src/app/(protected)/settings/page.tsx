import { auth, signOut } from "~/lib/auth";

export default async function SettingsPage() {
  const session = await auth();
  // console.log("session", session);

  return (
    <div>
      <p>Settings Page</p>
      <p>Session: {JSON.stringify(session)}</p>
      <form
        action={async () => {
          "use server";
          // per tutorial, signOut will redirect to /auth/login because of middleware but this isn't working
          // await signOut();

          // fix: will now redirect to /auth/login after signOut
          await signOut({ redirectTo: "/auth/login" });
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
}
