"use client";

import { useTransition } from "react";
import { useSession } from "next-auth/react";

import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardContent } from "~/components/ui/card";
import { settings } from "~/actions/settings";

export default function SettingsPage() {
  const { update } = useSession();
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      settings({ name: "New Name!" }).then(() => update());
    });
  };

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-center text-2xl font-semibold">⚙ Settings</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button onClick={onClick} disabled={isPending}>
          Update name
        </Button>
      </CardContent>
    </Card>
  );
}
