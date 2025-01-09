import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../../components/ui/form";
import { Button, Heading } from "../../components";
import { useNavigate } from "react-router-dom";
import { formSchema, defaultFormValues } from "./poduct-form-schema";
import { z } from "zod";
import useProductsHook from "../../hooks/useProductsHook";
import { HasString, ProductDTO } from "../../types/product";
import { useEffect} from "react";
import { CustomFormField } from "../../components/inputs/CustomFormField";
import useProductCategoryHook from "../../hooks/useProductCategoryHook";
import { colorsMock } from "../../mockData/colorsMock";
import { generateProductCode } from "../../lib/generateProductCode";

const ProductCreate = () => {
    const navigate = useNavigate();
    const { handleAddProduct } = useProductsHook();
    const { productCategories } = useProductCategoryHook();
    const { handleFetchProductCategories } = useProductCategoryHook()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultFormValues,
    });

    const length = form.watch("length");
    const roll_width = form.watch("roll_width");
    const width = form.watch("width");
    const productName = form.watch("name");
    const category = form.watch("category_id")
    const color = form.watch("color");
    const rollWidth = form.watch("roll_width");
    const status = form.watch("has_string");

    useEffect(() => {
        handleFetchProductCategories()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (
            length && 
            roll_width && 
            width && 
            category && 
            productName && 
            color && 
            rollWidth && 
            status
        ) {
            const measurementPerUnit = (length * width) / (3 * roll_width);
            form.setValue("measurement_per_unit", parseFloat(measurementPerUnit.toFixed(2)));
    
            const categoryLabel = productCategories.find((cat) => String(cat.id) === category)?.name
            console.log(categoryLabel)
            const productCode = generateProductCode({
                category: categoryLabel!,
                productName,
                color,
                rollWidth,
                length,
                width,
                status,
            });
    
            form.setValue("product_code", productCode);
        }
    }, [length, roll_width, width, form, category, productName, color, rollWidth, status, productCategories]);
    


    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        const product: ProductDTO = {
            name: values.name,
            category_id: values.category_id,
            color: values.color,
            roll_width: values.roll_width as number,
            length: values.length as number,
            width: values.width as number,
            has_string: values.has_string,
            measurement_per_unit: values.measurement_per_unit as number,
            product_code: values.product_code!,
            price_per_roll: values.price_per_roll as number,
            price_per_yard: values.price_per_yard as number,
            wholesale_price: values.wholesale_price as number,
            retail_price: values.retail_price as number,
            discount: values.discount_price as unknown as number || 0,
            quantity: values.quantity as unknown as number,
            minimum_qty: values.minimum_qty as unknown as number,
        };
        handleAddProduct(product);
        navigate("/products");
    }

    return (
        <div className="py-6">
            <Heading title="Create Product" />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-6">
                    {/* Product Info Section */}
                    <fieldset className="grid grid-cols-3 gap-6 border rounded-lg p-4">
                        <legend className="text-lg font-semibold">Product Info</legend>

                        <CustomFormField
                            form={form}
                            name="name"
                            label="Product Name"
                            placeholder="Enter product name"
                            type="text"
                        />

                        <CustomFormField
                            form={form}
                            name="category_id"
                            label="Product Category"
                            type="select"
                            options={productCategories.map((category) => ({
                                label: category.name,
                                value: String(category.id),
                            }))}
                        />

                        <CustomFormField
                            form={form}
                            name="color"
                            label="Choose Color"
                            type="select"
                            options={
                                colorsMock.map((color) => {
                                    return {
                                        label: color.label,
                                        value: color.value,
                                    };
                                })
                            }
                        />

                        <CustomFormField
                            form={form}
                            name="roll_width"
                            label="Roll Width"
                            type="number"
                            placeholder="Enter roll width"
                        />

                        <CustomFormField
                            form={form}
                            name="length"
                            label="Length"
                            type="number"
                            placeholder="Enter length"
                        />

                        <CustomFormField
                            form={form}
                            name="width"
                            label="Width"
                            type="number"
                            placeholder="Enter width"
                        />

                        <CustomFormField
                            form={form}
                            name="has_string"
                            label="Has String"
                            type="select"
                            options={[
                                { label: "Yes", value: HasString.S },
                                { label: "No", value: HasString.N },
                            ]}
                        />

                        <CustomFormField
                            form={form}
                            name="measurement_per_unit"
                            label="Measurement Per Unit"
                            type="number"
                            disabled
                        />
                        <CustomFormField
                            form={form}
                            name="product_code"
                            label="Product Code"
                            type="text"
                            disabled
                        />

                        <CustomFormField
                            form={form}
                            name="price_per_roll"
                            label="Price Per Roll"
                            type="number"
                            placeholder="Enter price per roll"
                        />

                        <CustomFormField
                            form={form}
                            name="price_per_yard"
                            label="Price Per Yard"
                            type="number"
                            placeholder="Enter price per yard"
                        />

                        <CustomFormField
                            form={form}
                            name="wholesale_price"
                            label="Whole Sale Price"
                            type="number"
                            placeholder="Enter wholesale price"
                        />

                        <CustomFormField
                            form={form}
                            name="retail_price"
                            label="Retail Price"
                            type="number"
                            placeholder="Enter retail price"
                        />
                    </fieldset>

                    {/* Stock Info Section */}
                    <fieldset className="grid grid-cols-2 gap-6 border rounded-lg p-4">
                        <legend className="text-lg font-semibold">Stock Info</legend>

                        <CustomFormField
                            form={form}
                            name="quantity"
                            label="Add Product Quantity"
                            type="number"
                            placeholder="Add Product Quantity"
                        />
                        <CustomFormField
                            form={form}
                            name="minimum_qty"
                            label="Stock Alert"
                            type="number"
                            placeholder="Add stock alert number"
                        />

                        <CustomFormField
                            form={form}
                            name="discount_price"
                            label="Discount"
                            type="select"
                            options={[
                                { label: "20%", value: "20" },
                                { label: "50%", value: "50" },
                                { label: "70%", value: "70" },
                            ]}
                        />
                    </fieldset>

                    <div className="mt-6 flex justify-start gap-4">
                        <Button variant="secondary" onClick={() => navigate("/products")}>
                            Cancel
                        </Button>
                        <Button type="submit">Save</Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default ProductCreate;
