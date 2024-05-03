import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required / Invalid email" }),

  // changing zod validation error message on the schema
  // email: z.string().email({message: "Email is required"}), // message - only avail on 2nd & chain onwards
  // email: z.string(invalid_type_error: "Must be a string").email(), // invalid_type_error - avail on first chain

  password: z.string().min(1, { message: "Password is required" }),
  // not recommended to limit pword length for login above 1 since required min length may change and old passwords may have old min lengths
  // okay to add .min() to password for RegisterSchema
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Email is required / Invalid email" }),
  password: z.string().min(6, { message: "Minimum 6 characters required" }),
  name: z.string().min(1, { message: "Name is required" }),
});
