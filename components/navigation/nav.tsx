import { auth } from "@/server/auth";
import UserButton from "./user-button";
import { Button } from "../ui/button";
import Link from "next/link";
import { LogInIcon } from "lucide-react";

export default async function Nav() {
  const session = await auth();
  console.log(session);
  return (
    <header className="bg-slate-300 py-4">
      <ul className="flex justify-between">
        <li>Logo</li>
        {session ? (
          <li>
            <UserButton expires={session?.expires} user={session?.user} />
          </li>
        ) : (
          <li>
            <Button className="flex gap-2" asChild>
              <Link href="/api/auth/signin">
                <LogInIcon size={16} />
                <span>Login</span>
              </Link>
            </Button>
          </li>
        )}
      </ul>
    </header>
  );
}
