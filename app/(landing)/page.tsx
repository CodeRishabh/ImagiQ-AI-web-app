import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <p className="text-5xl text-green-500">Landing Page(unprotected)</p>
      <Link href="/sign-in">
        <Button>Sign in</Button>
      </Link>
      <Link href="/sign-up">
        <Button>Register</Button>
      </Link>
    </div>
  );
}