import { db } from "~/lib/db";

export const getAccountByUserId = async (id: string) => {
  try {
    const account = await db.account.findFirst({
      where: {
        id,
      },
    });
  } catch {
    return null;
  }
};
