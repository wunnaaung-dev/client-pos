import { cn } from "../../../lib/utils";
import { Button } from "../../../components";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "../../../components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../../../components/ui/popover";
import { useEffect, useState } from "react";
import useCustomerHook from "../../../hooks/useCustomerHook";
import { Check, ChevronsUpDown } from "lucide-react";
import usePOSHook from "../../../hooks/usePOSHook";
import { Buyer } from "../../../types/customer";
const CustomerSearchCreate = () => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState<Buyer | null>(null)
    const { customers } = useCustomerHook()
    const {handleSetBuyer} = usePOSHook()
    useEffect(() => {
        if(value) {
            handleSetBuyer(value)
        }
    }, [value, handleSetBuyer])
    
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? customers?.find((customer) => customer.name === value.name)?.name
                        : "Select customer..."}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command className="bg-slate-100">
                    <CommandInput placeholder="Search customer..."/>
                    <CommandList>
                        <CommandEmpty>No customer found</CommandEmpty>
                        <CommandGroup>
                           {customers?.map((customer) => (
                            <CommandItem
                                key={customer.name}
                                value={customer.name}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value?.name ? null : customers?.find(customer => customer.name === currentValue) || null)
                                    setOpen(false)
                                }}
                            >
                                {customer.name}
                                <Check 
                                    className={cn(
                                        "ml-auto",
                                        value?.name === customer.name ? "opacity-100" : "opacity-0"
                                    )}
                                />
                            </CommandItem>
                           ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export default CustomerSearchCreate;