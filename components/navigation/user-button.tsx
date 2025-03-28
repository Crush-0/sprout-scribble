"use client";

import { signOut } from "@/server/auth";
import { Session } from "next-auth";

export default function UserButton({ user }: Session) {
  return (
    <div>
      <h1>{user?.email}</h1>
      <button onClick={() => signOut()}>signOut</button>
    </div>
  );
}
