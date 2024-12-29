import { z } from "zod";
import { HasString } from "../../types/product";

export const formSchema = z.object({
    product_name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name cannot exceed 50 characters"),
    product_category: z.string(),
    colors: z.string(),
    roll_width: z
        .union([z.string(), z.coerce.number()])
        .transform(val => (val === "" ? undefined : Number(val)))
        .pipe(z.number().positive().optional()),
    length: z
        .union([z.string(), z.coerce.number()])
        .transform(val => (val === "" ? undefined : Number(val)))
        .pipe(z.number().positive().optional()),
    width: z
        .union([z.string(), z.coerce.number()])
        .transform(val => (val === "" ? undefined : Number(val)))
        .pipe(z.number().positive().optional()),
    measurement_per_unit: z
        .union([z.string(), z.coerce.number()])
        .transform(val => (val === "" ? undefined : Number(val)))
        .pipe(z.number().positive().optional()),
    price_per_roll: z
        .union([z.string(), z.coerce.number()])
        .transform(val => (val === "" ? undefined : Number(val)))
        .pipe(z.number().positive().optional()),
    price_per_yard: z
        .union([z.string(), z.coerce.number()])
        .transform(val => (val === "" ? undefined : Number(val)))
        .pipe(z.number().positive().optional()),
    wholesale_price: z
        .union([z.string(), z.coerce.number()])
        .transform(val => (val === "" ? undefined : Number(val)))
        .pipe(z.number().positive().optional()),
    retail_price: z
        .union([z.string(), z.coerce.number()])
        .transform(val => (val === "" ? undefined : Number(val)))
        .pipe(z.number().positive().optional()),
    discount_price: z.string().optional(),
    has_string: z.nativeEnum(HasString),
});


export type FormFieldNames = keyof z.infer<typeof formSchema>;

export const defaultFormValues: z.infer<typeof formSchema> = {
    product_name: "",
    product_category: "",
    colors: "",
    // price_per_roll: 0,
    // price_per_yard: 0,
    // wholesale_price: 0,
    // retail_price: 0,
    discount_price: "",
    // roll_width: 0,
    // length: 0,
    // width: 0,
    has_string: HasString.S,
};