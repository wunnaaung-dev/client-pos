import { Outlet } from "react-router-dom";
import CustomerSearchCreate from "./components/CustomerSearchCreate";
import ProductSearch from "./components/ProductSearch";
import { Button, Select, SelectContent, SelectTrigger, SelectValue } from "../../components";
import { UserRoundPlus } from 'lucide-react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { defaultFormValues, formSchema } from "../../pages/customer/customer-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../../components/ui/form";
import CustomerForm from "../../pages/customer/customer-form";
import usePOSHook from "../../hooks/usePOSHook";
import { useState } from "react";
import { Buyer } from "../../types/customer";
import { SelectGroup, SelectItem } from "../../components/ui/select";
import { SaleType } from "../../types/sale";

const POSLayout = () => {
    const { handleSetBuyer, handleSaleType } = usePOSHook()
    const [open, setOpen] = useState<boolean>(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultFormValues
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // add api for create customer
        const buyer: Buyer = {
            name: values.name,
            address: values.address
        }
        handleSetBuyer(buyer)
        setOpen(false)
    }

    return (
        <div>
            <div className="flex items-center justify-between p-3 gap-5">
                <div className="flex items-center gap-2">
                    <CustomerSearchCreate />
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                            <Button onClick={() => setOpen(true)}>
                                <UserRoundPlus size={24} />
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                            <DialogHeader>
                                <DialogTitle>Create Customer</DialogTitle>
                            </DialogHeader>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)}>
                                    <CustomerForm form={form} />
                                    <DialogFooter className="mt-4">
                                        <Button className="px-8" type="submit">Create</Button>
                                    </DialogFooter>
                                </form>
                            </Form>
                        </DialogContent>
                    </Dialog>
                    <ProductSearch onSearch={() => console.log("Hee Hee")} />
                </div>
                <div>
                    <Select onValueChange={(value) => handleSaleType(value as SaleType)}>
                        <SelectTrigger className="w-[250px]">
                            <SelectValue placeholder="Select wholesale or retail" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value={SaleType.WHOLE_SALE}>Wholesale</SelectItem>
                                <SelectItem value={SaleType.RETAIL}>Retail</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default POSLayout;