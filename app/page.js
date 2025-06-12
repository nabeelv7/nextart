import { auth } from "@/auth";
import ButtonSignIn from "@/components/ButtonSignIn";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (session?.user) redirect("/dashboard")

  return (
    <>
      <h1>hello</h1>
      <ButtonSignIn>Sign In</ButtonSignIn>
    </>
  );
}
