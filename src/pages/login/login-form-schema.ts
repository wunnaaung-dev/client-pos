import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string()
});
