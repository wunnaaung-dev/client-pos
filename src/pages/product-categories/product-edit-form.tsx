/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";
import { Button, Input } from "../../components"
import { Label } from "../../components/ui/label"

const ProductEditForm = () => {
    const [inputValue, setInputValue] = useState<string>('');

    const debouncedUpdate = useCallback(
        (value: string) => {
            if (value) {
                console.log(value)
            }
        },
        []
    );

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setInputValue(newValue);

        if ((window as any).debounceTimer) {
            clearTimeout((window as any).debounceTimer);
        }

        (window as any).debounceTimer = setTimeout(() => {
            debouncedUpdate(newValue);
        }, 300);
    };

    return (
        <div className="grid gap-4">
            <div className="space-y-3">
                <Label htmlFor="name" className="text-right">
                    Name
                </Label>
                <br />
                <Input
                    id="name"
                    value={inputValue}
                    placeholder="Enter Category Name Here..."
                    className="col-span-3"
                    onChange={handleInputChange}
                />
                <Button>Save</Button>
            </div>
        </div>
    )
}

export default ProductEditForm