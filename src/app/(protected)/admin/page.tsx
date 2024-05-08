"use client";

// if using util function to get current user's role
// import { currentRole } from "~/lib/auth";

// export default async function AdminPage() {
//   const role = await currentRole();
//   return <div>Current role: {role}</div>;
// }

import { UserRole } from "@prisma/client";
import { RoleGate } from "~/components/auth/role-gate";
import { FormSuccess } from "~/components/form-success";
import { Card, CardHeader, CardContent } from "~/components/ui/card";

export default function AdminPage() {
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-center text-2xl font-semibold">🔑 Admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="You are allowed to view this content!" />
        </RoleGate>
      </CardContent>
    </Card>
  );
}
