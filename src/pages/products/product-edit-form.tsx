import { useNavigate } from "react-router-dom"
import useProductsHook from "../../hooks/useProductsHook"
import { useForm } from "react-hook-form"
import { formSchema } from "./poduct-form-schema"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Heading, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "../../components/ui/form"
import { Input, Select } from "../../components"
import { HasString, Product } from "../../types/product"
import { useEffect } from "react"


const ProductEdit = () => {
  const navigate = useNavigate()
  const { handleEditProduct, selectedProduct } = useProductsHook()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      product_name: selectedProduct?.name,
      product_category: selectedProduct?.category,
      colors: selectedProduct?.availableColors,
      roll_width: selectedProduct?.roll_width,
      length: selectedProduct?.length,
      width: selectedProduct?.width,
      has_string: selectedProduct?.has_string,
      measurement_per_unit: selectedProduct?.measurement_per_unit,
      price_per_roll: selectedProduct?.price_per_roll,
      price_per_yard: selectedProduct?.price_per_yard,
      wholesale_price: selectedProduct?.wholesale_price,
      retail_price: selectedProduct?.retail_price,
      discount_price: selectedProduct?.discount
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const updatedProduct: Product = {
      productId: selectedProduct?.productId as string,
      name: values.product_name,
      category: values.product_category,
      availableColors: values.colors,
      roll_width: values.roll_width as unknown as number,
      length: values.length as unknown as number,
      width: values.width as unknown as number,
      has_string: values.has_string,
      measurement_per_unit: values.measurement_per_unit as unknown as number,
      product_code: selectedProduct?.product_code as string,
      price_per_roll: values.price_per_roll as unknown as number,
      price_per_yard: values.price_per_yard as unknown as number,
      wholesale_price: values.wholesale_price as unknown as number,
      retail_price: values.retail_price as unknown as number,
      discount: values.discount_price,
    };
    handleEditProduct(updatedProduct)
    navigate("/products")
  }

  const length = form.watch("length");
  const roll_width = form.watch("roll_width");
  const width = form.watch("width");

  useEffect(() => {
    if (length && roll_width && width) {
      const measurementPerUnit = (length * width) / (3 * roll_width);
      form.setValue("measurement_per_unit", parseFloat(measurementPerUnit.toFixed(2)));
    }
  }, [length, roll_width, width, form])

  return (
    <div className="py-3">
      <Heading title="Edit Product" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <section className="grid grid-cols-3 gap-6 mt-3">
            <FormField
              control={form.control}
              name="product_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter product name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="product_category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Category</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="category1">Category 1</SelectItem>
                        <SelectItem value="category2">Category 2</SelectItem>
                        <SelectItem value="category3">Category 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="colors"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Colors</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select colors" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="red">Red</SelectItem>
                        <SelectItem value="blue">Blue</SelectItem>
                        <SelectItem value="green">Green</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="roll_width"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Roll Width</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter roll width"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="length"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Length</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter Length"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="width"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Width</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter Width"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="has_string"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Has String</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Has String or Not" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={HasString.S}>Yes</SelectItem>
                        <SelectItem value={HasString.N}>No</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="measurement_per_unit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Measurement Per Unit</FormLabel>
                  <FormControl>
                    <Input
                      disabled
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price_per_roll"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price Per Roll</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price_per_yard"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price Per Yard</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="wholesale_price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Whole Sale Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="retail_price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Retail Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="discount_price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Discount</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Discount" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="20">20%</SelectItem>
                        <SelectItem value="50">50%</SelectItem>
                        <SelectItem value="70">70%</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
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