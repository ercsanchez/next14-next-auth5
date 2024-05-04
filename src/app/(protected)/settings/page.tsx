import { auth } from "~/lib/auth";

export default async function Settings() {
  const session = await auth();
  console.log("session", session);

  return (
    <div>
      <p>Settings Page</p>
      <p>Session: {JSON.stringify(session)}</p>
    </div>
  );
}
