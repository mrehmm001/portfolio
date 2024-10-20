"use server";

import * as z from "zod";
import { registerSchema } from "schemas/LoginSchema";
import bcrypt from "bcryptjs";
import { db } from "@/server/db";
import { getUserByEmail } from "@/server/data";

const register = async (values: z.infer<typeof registerSchema>) => {
  const validated = registerSchema.safeParse(values);
  if (!validated.success) {
    return { error: "Not valid" };
  }
  const { email, password, name } = validated.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  // Check if user doesnt already exist
  const user = await getUserByEmail(email);
  if (user) {
    return { error: "Email already taken." };
  }

  //Store account to db
  try {
    await db.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });
  } catch (e) {
    console.error(e);
    return { error: "Something went wrong" };
  }

  return { success: "Account successfully created!" };
};

export default register;
