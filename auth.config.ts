import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { loginSchema } from "schemas/LoginSchema";
import { getUserByEmail } from "@/server/data";
import bcrypt from "bcryptjs";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = loginSchema.safeParse(credentials);
        if (!validatedFields.success) return null;
        const { email, password } = validatedFields.data;
        const user = await getUserByEmail(email);
        if (!user) return null;
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) return null;

        return user;
      },
    }),
  ],
} satisfies NextAuthConfig;
