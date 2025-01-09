import { z } from "zod";

export const purchaseFormSchema = z.object({
  date: z
    .date({ required_error: "Date is required" })
    .refine((date) => !isNaN(date.getTime()), { message: "Invalid date" }),
  supplier: z
    .string({ required_error: "Supplier is required" })
    .min(1, "Supplier name cannot be empty"),
  productName: z
    .string({ required_error: "Product name is required" })
    .min(1, "Product name cannot be empty"),
  qty: z
    .number({ required_error: "Quantity is required" })
    .positive("Quantity must be greater than zero")
    .int("Quantity must be an integer"),
  unitPrice: z
    .number({ required_error: "Unit price is required" })
    .positive("Unit price must be greater than zero"),
  totalPrice: z
    .number({ required_error: "Total price is required" })
    .positive("Total price must be greater than zero")
});
