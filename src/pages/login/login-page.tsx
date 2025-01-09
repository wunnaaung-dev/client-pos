import { useForm } from "react-hook-form"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { loginFormSchema } from "./login-form-schema"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { CustomFormField } from "../../components/inputs/CustomFormField"
import { Form } from "../../components/ui/form"
import { Button } from "../../components"
import { LoginReq } from "../../types/requests/loginReq"
import { authService } from "../../api/authService"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "youremail@gmail.com",
      password: "password"
    }
  })

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    const credentials: LoginReq = {
      email: values.email,
      password: values.password,
    };
    try {
      console.log("submitting")
      const res = await authService.login(credentials)
      if(res.token){
        localStorage.setItem('TOKEN', res.token)
        navigate("/", { replace: true })

      }
    } catch (error) {
      console.error("Error during login submission:", error);
    }
  }

  return (
    <Card className="w-[30vw]">
      <CardHeader className="text-center font-semibold text-xl">
        <CardTitle>Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CustomFormField
              form={form}
              name="email"
              type="text"
              label="Email"
              placeholder="Enter your email address"
            />
            <CustomFormField
              form={form}
              name="password"
              type="password"
              label="Passowrd"
              placeholder="Enter your password"
            />

            <Button className="mt-5 w-full" type="submit">Login</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default Login