/* eslint-disable @typescript-eslint/no-explicit-any */
import { Label } from '../../components/ui/label';
import { Input } from '../../components';
import useProductCategoryHook from '../../hooks/useProductCategoryHook';
import { useState, useCallback } from 'react';
import { ProductCategoryDTO } from '../../types/productCategory';

const ProductCategoryForm = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const { handlePrepareNewProductCategory} = useProductCategoryHook();
    const debouncedUpdate = useCallback(
        (value: string) => {
            if (value) {
                const updatedCategory: ProductCategoryDTO = { name: value };
                handlePrepareNewProductCategory(updatedCategory);
            }
        },
        [handlePrepareNewProductCategory]
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
            </div>
        </div>
    );
};

export default ProductCategoryForm;