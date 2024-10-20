"use server";

import { signIn } from "@/server/auth";
import { AuthError } from "next-auth";
import { DEFAULT_LOGIN_REDIRECT } from "routes";
import { loginSchema } from "schemas/LoginSchema";
import * as z from "zod";

const login = async (values: z.infer<typeof loginSchema>) => {
  const validated = loginSchema.safeParse(values);
  if (!validated.success) {
    return { error: "Not valid" };
  }
  const { email, password } = validated.data;
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (e) {
    if (e instanceof AuthError) {
      switch (e.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw e;
  }
};

export default login;
