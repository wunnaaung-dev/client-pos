import { useNavigate } from "react-router-dom"
import useProductsHook from "../../hooks/useProductsHook"
import { useForm } from "react-hook-form"
import { formSchema } from "./poduct-form-schema"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Heading } from "../../components"
import { Form } from "../../components/ui/form"
import { CustomFormField } from "../../components/inputs/CustomFormField"
import useProductCategoryHook from "../../hooks/useProductCategoryHook"
import { useEffect } from "react"
import { colorsMock } from "../../mockData/colorsMock"
import { ProductDTO } from "../../types/product"

const ProductEdit = () => {
  const navigate = useNavigate()
  const { selectedProduct, handleUpdateProduct } = useProductsHook()
  const {handleFetchProductCategories} = useProductCategoryHook()
  const { productCategories } = useProductCategoryHook()
  console.log(selectedProduct)

  useEffect(() => {
    handleFetchProductCategories()
  }, [navigate, handleFetchProductCategories])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: selectedProduct?.name,
      category_id: selectedProduct?.category_id,
      color: selectedProduct?.color,
      roll_width: selectedProduct?.roll_width,
      length: selectedProduct?.length,
      width: selectedProduct?.width,
      has_string: selectedProduct?.has_string,
      measurement_per_unit: selectedProduct?.measurement_per_unit,
      price_per_roll: selectedProduct?.price_per_roll,
      price_per_yard: selectedProduct?.price_per_yard,
      wholesale_price: selectedProduct?.wholesale_price,
      retail_price: selectedProduct?.retail_price,
      quantity: Number(selectedProduct?.stock?.quantity),
      minimum_qty: Number(selectedProduct?.stock?.minimum_qty)
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const updateProduct: ProductDTO = {
      name: values.name,
      category_id: values.category_id,
      color: values.color,
      roll_width: values.roll_width as unknown as number,
      length: values.length as unknown as number,
      width: values.width as unknown as number,
      has_string: values.has_string,
      measurement_per_unit: values.measurement_per_unit as unknown as number,
      price_per_roll: values.price_per_roll as unknown as number,
      price_per_yard: values.price_per_yard as unknown as number,
      wholesale_price: values.wholesale_price as unknown as number,
      retail_price: values.retail_price as unknown as number,
      quantity: values.quantity as unknown as number,
      minimum_qty: values.minimum_qty as unknown as number,
      discount: values.discount_price as unknown as number || 0,
      product_code: selectedProduct?.product_code
    }
    handleUpdateProduct(selectedProduct?.id as string, updateProduct)
    navigate("/products")
  }

  const length = form.watch("length")
  const roll_width = form.watch("roll_width")
  const width = form.watch("width")

  useEffect(() => {
    if (length && roll_width && width) {
      const measurementPerUnit = (length * width) / (3 * roll_width)
      form.setValue("measurement_per_unit", parseFloat(measurementPerUnit.toFixed(2)))
    }
  }, [length, roll_width, width, form])

  return (
    <div className="py-3">
      <Heading title="Edit Product" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <section className="grid grid-cols-3 gap-6 mt-3">
            <CustomFormField form={form} name="name" label="Product Name" placeholder="Enter product name" type="text" />
            <CustomFormField
              form={form}
              name="category_id"
              label="Product Category"
              type="select"
              options={productCategories.map((category) => ({ label: category.name, value: String(category.id) }))}
            />
            <CustomFormField
              form={form}
              name="color"
              label="Colors"
              type="select"
              placeholder="Select colors"
              options={
                colorsMock.map((color) => {
                  return {
                    label: color.label,
                    value: color.value,
                  };
                })
              }
            />
            <CustomFormField form={form} name="roll_width" label="Roll Width" type="number" placeholder="Enter roll width" />
            <CustomFormField form={form} name="length" label="Length" type="number" placeholder="Enter length" />
            <CustomFormField form={form} name="width" label="Width" type="number" placeholder="Enter width" />
            <CustomFormField
              form={form}
              name="has_string"
              label="Has String"
              type="select"
              options={[
                { label: "Yes", value: "S" },
                { label: "No", value: "N" }
              ]}
            />
            <CustomFormField form={form} name="measurement_per_unit" label="Measurement Per Unit" type="number" disabled />
            <CustomFormField form={form} name="price_per_roll" label="Price Per Roll" type="number" />
            <CustomFormField form={form} name="price_per_yard" label="Price Per Yard" type="number" />
            <CustomFormField form={form} name="wholesale_price" label="Wholesale Price" type="number" />
            <CustomFormField form={form} name="retail_price" label="Retail Price" type="number" />
            <CustomFormField form={form} name="minimum_qty" label="Stock Alert Quantity" type="number" />
            <CustomFormField
              form={form}
              name="quantity"
              label="Add Product Quantity"
              type="number"
              placeholder="Add Product Quantity"
            />
            <CustomFormField
              form={form}
              name="discount_price"
              label="Discount"
              type="select"
              options={[
                { label: "20%", value: "20" },
                { label: "50%", value: "50" },
                { label: "70%", value: "70" }
              ]}
            />
          </section>

          <div className="mt-6 flex justify-start gap-4">
            <Button variant="secondary" onClick={() => navigate("/products")}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default ProductEdit
