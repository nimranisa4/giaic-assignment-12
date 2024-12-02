import { auth } from "./lib/auth"; // Replace with your actual auth logic
import SessionWrapper from "@/components/SessionWrapper";
import SignInPage from "@/components/login/LoginComponet";
import SignOutPage from "@/components/login/SignOutComponent";

export default async function Home() {
  const session = await auth(); // Fetch session data
  const isAuthenticated = !!session?.user;

  return (
    <SessionWrapper>
      <div className="container mx-auto">
        {isAuthenticated ? <SignInPage /> : <SignOutPage />}
      </div>
    </SessionWrapper>
  );
}
