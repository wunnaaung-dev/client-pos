import { z } from "zod";
import { formSchema } from "./customer-form-schema";
import { UseFormReturn } from "react-hook-form";
import { CustomFormField } from "../../components/inputs/CustomFormField";

type CustomerFormData = z.infer<typeof formSchema>;

interface CustomerFormFieldsProps {
    form: UseFormReturn<CustomerFormData>;
}

const CustomerForm = ({ form }: CustomerFormFieldsProps) => {
    return (
        <section className="grid grid-cols-2 gap-4">
            <CustomFormField
                form={form}
                name="name"
                label="Name"
                type="text"
                placeholder="Customer Name"
            />
            <CustomFormField
                form={form}
                name="phone"
                label="Phone Number"
                type="text"
                placeholder="Enter Phone Number"
            />
            <CustomFormField
                form={form}
                name="type"
                label="Select Customer Type"
                type="select"
                options={[
                    { label: "Regular", value: "Regular" },
                    { label: "New", value: "New" }
                ]}
            />
            <CustomFormField
                form={form}
                name="address"
                label="Address"
                type="textarea"
                placeholder="Enter the address"
            />
        </section>
    )
}

export default CustomerForm