"use client";

// import { auth, signOut } from "~/lib/auth";
import {
  useSession,
  // signOut
} from "next-auth/react";
import { logout } from "~/actions/logout";

export default function SettingsPage() {
  // const session = await auth();
  // console.log("session", session);

  const session = useSession();

  const onClick = () => {
    // signOut();

    // using server action for signOut
    logout();
  };

  return (
    <div>
      <p>Settings Page</p>
      <p>Session: {JSON.stringify(session)}</p>
      {/* <form
        action={async () => {
          "use server";
          // per tutorial, signOut will redirect to /auth/login because of middleware but this isn't working
          // await signOut();

          // fix: will now redirect to /auth/login after signOut
          await signOut({ redirectTo: "/auth/login" });
        }}
      >
        <button type="submit">Sign Out</button>
      </form> */}

      {/* <button type="button" onClick={onClick}>
        Sign Out
      </button> */}

      {/* using server action for signOut */}
      <button type="button" onClick={onClick}>
        Sign Out
      </button>
      {/* this also works instead of a single button */}
      {/* <form action={logout}>
        <button type="submit">Sign Out</button>
      </form> */}
    </div>
  );
}
