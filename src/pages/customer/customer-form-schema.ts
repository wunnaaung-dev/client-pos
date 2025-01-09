import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name cannot exceed 50 characters"),
    phone: z.string()
        .regex(/^09\d{7,9}$/, "Phone number must start with 09 and be 9-11 digits total")
        .min(9, "Phone number must be at least 9 digits")
        .max(11, "Phone number cannot exceed 11 digits"),
    type: z.enum(["Regular", "New"]),
    address: z.string().min(5, "Address must be at least 5 characters"),
});

export type FormFieldNames = keyof z.infer<typeof formSchema>;

export const defaultFormValues: z.infer<typeof formSchema> = {
    name: "",
    phone: "",
    type: "Regular",
    address: "",
};