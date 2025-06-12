import { auth } from "@/auth";
import ButtonCreateMatch from "@/components/ButtonCreateMatch";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user) redirect("/");

  return (
    <>
      <h1>Welcome, {session?.user?.name}!</h1>
      <ButtonCreateMatch />
    </>
  );
}
