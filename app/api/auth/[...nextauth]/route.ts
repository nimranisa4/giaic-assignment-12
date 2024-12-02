import { handlers } from "@/app/lib/auth";

export const {POST,GET} = handlers;
export async function auth() {
    // Mocking session data
    return { user: { name: "Nimra Nisa" } }; // Replace `null` with user data if logged out
  }
  