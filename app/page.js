import { auth } from "@/auth";
import ButtonSignIn from "@/components/ButtonSignIn";

export default async function Home() {
  const session = await auth();
  console.log(session);

  return (
    <>
      <h1>hello</h1>
      <ButtonSignIn>Sign In</ButtonSignIn>
    </>
  );
}
