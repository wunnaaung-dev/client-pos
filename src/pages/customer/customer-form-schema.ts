import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name cannot exceed 50 characters"),
    phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
    type: z.enum(["Regular", "New"]),
    address: z.string().min(5, "Address must be at least 5 characters"),
});

export type FormFieldNames = keyof z.infer<typeof formSchema>;

export const customerFormFields: {
    fieldName: FormFieldNames;
    label: string;
    type: "input" | "select" | "textarea";
    placeholder: string;
    selectItems?: { value: string; text: string }[];
}[] = [
    {
        fieldName: "name",
        label: "Name",
        type: "input",
        placeholder: "Customer Name",
    },
    {
        fieldName: "phone",
        label: "Phone",
        type: "input",
        placeholder: "Phone Number",
    },
    {
        fieldName: "type",
        label: "Type",
        type: "select",
        placeholder: "Select Type",
        selectItems: [
            { value: "Regular", text: "Regular" },
            { value: "New", text: "New" },
        ],
    },
    {
        fieldName: "address",
        label: "Address",
        type: "textarea",
        placeholder: "Enter the customer address here",
    },
];

export const defaultFormValues: z.infer<typeof formSchema> = {
    name: "",
    phone: "",
    type: "Regular",
    address: "",
};