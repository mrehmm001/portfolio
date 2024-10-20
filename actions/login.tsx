"use server";

import { loginSchema } from "schemas/LoginSchema";
import * as z from "zod";

const login = async (values: z.infer<typeof loginSchema>) => {
  const validated = loginSchema.safeParse(values);
  if (!validated.success) {
    return { error: "Not valid" };
  }

  return { success: "Success!" };
};

export default login;
