"use server";
import { signIn } from "@/auth";

export async function SignIn() {
  // const session=  await auth()
  await signIn();
}
