import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form} from "../../components/ui/form";
import { Button,Heading } from "../../components";
import { useNavigate } from "react-router-dom";
import { defaultFormValues, formSchema } from "./customer-form-schema";
import CustomerForm from "./customer-form";

const CustomerCreatePage = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultFormValues
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="py-6">
      <Heading title="Create Customer" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-6">
          <CustomerForm form={form}/>
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
