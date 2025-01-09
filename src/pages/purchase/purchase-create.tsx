import { useForm } from "react-hook-form"
import { purchaseFormSchema } from "./purchase-form-schema"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Heading } from "../../components"
import { Form } from "../../components/ui/form"
import { CustomFormField } from "../../components/inputs/CustomFormField"
import { useEffect } from "react"
import useSuppliersHook from "../../hooks/useSuppliersHook"
import { DatePicker } from "../../components/inputs/DatePicker"
import { Label } from "../../components/ui/label"
import { useNavigate } from "react-router-dom"

const PurchaseCreate = () => {
    const navigate = useNavigate()
    const form = useForm<z.infer<typeof purchaseFormSchema>>({
        resolver: zodResolver(purchaseFormSchema),
        defaultValues: {
            date: new Date(),
            supplier: "Default Supplier",
            productName: "Default Product",
            qty: 1,
            unitPrice: 10,
            totalPrice: 10,
        },
    })

    const quantity = form.watch("qty")
    const unitPrice = form.watch("unitPrice")
    const { suppliers } = useSuppliersHook()
    useEffect(() => {
        if (quantity && unitPrice) {
            const totalPrice = quantity * unitPrice
            form.setValue("totalPrice", totalPrice)
        }
    }, [quantity, unitPrice, form])

    function onSubmit(values: z.infer<typeof purchaseFormSchema>) {
        console.log(values)
    }
    return (
        <div>
            <Heading title="Create Purchase" />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5">
                    <section className="grid grid-cols-2 gap-3 ">
                        <div className="flex flex-col gap-2">
                            <Label>Date</Label>
                            <DatePicker
                                value={form.watch("date")}
                                onChange={(date) => form.setValue("date", date)}
                            />
                        </div>
                        <CustomFormField
                            form={form}
                            type="text"
                            name="productName"
                            label="Product Name"
                            placeholder="Enter the purchased product name"
                        />
                        <CustomFormField
                            form={form}
                            type="number"
                            name="qty"
                            label="Quantity"
                            placeholder="Enter the pruchased product quantity"
                        />
                        <CustomFormField
                            form={form}
                            type="number"
                            name="unitPrice"
                            label="Unit Price"
                            placeholder="Enter unit price here"
                        />
                        <CustomFormField
                            form={form}
                            type="number"
                            name="totalPrice"
                            label="Total Price"
                            disabled
                        />
                        <CustomFormField
                            form={form}
                            type="select"
                            name="supplier"
                            label="Supplier"
                            placeholder="Choose the supplier"
                            options={suppliers?.map((supplier) => ({
                                label: supplier.name,
                                value: supplier.name
                            }))}
                        />
                    </section>

                    <div className="mt-6 flex justify-start gap-4">
                        <Button type="button" variant="secondary" onClick={() => navigate("/purchases")}>
                            Cancel
                        </Button>
                        <Button type="submit">Save</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default PurchaseCreate