import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "../../components/ui/form";
import { Input, Button, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Heading } from "../../components";
import { useNavigate } from "react-router-dom";
import { Textarea } from "../../components/ui/textarea";
import { customerFormFields } from "./customer-form-schema";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name cannot exceed 50 characters"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  type: z.enum(["Regular", "New"]),
  address: z.string().min(5, "Address must be at least 5 characters"),
});

const CustomerCreatePage = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      type: "Regular",
      address: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="py-6">
      <Heading title="Create Customer" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-6">
          <section className="grid grid-cols-2 gap-4">
            {customerFormFields.map((field) => (
              <div key={field.fieldName}>
                <FormField
                  control={form.control}
                  name={field.fieldName}
                  render={({ field: formField }) => (
                    <FormItem>
                      <FormLabel>{field.label}</FormLabel>
                      <FormControl>
                        {field.type === "input" ? (
                          <Input placeholder={field.placeholder} {...formField} />
                        ) : field.type === "select" ? (
                          <Select onValueChange={formField.onChange} value={formField.value}>
                            <SelectTrigger>
                              <SelectValue placeholder={field.placeholder} />
                            </SelectTrigger>
                            <SelectContent>
                              {field.selectItems?.map((item) => (
                                <SelectItem key={item.value} value={item.value}>
                                  {item.text}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        ) : field.type === "textarea" ? (
                          <Textarea placeholder={field.placeholder} {...formField} />
                        ) : null}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ))}
          </section>

          <div className="mt-6 flex justify-start gap-4">
            <Button variant="secondary" onClick={() => navigate("/customer")}>Cancel</Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CustomerCreatePage;
