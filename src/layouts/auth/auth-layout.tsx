import { Outlet } from "react-router-dom"
import Center from "../../components/shared/center"

const AuthLayout = () => {
  return (
    <div className="">
        <Center>
            <p>Header</p>
            <Outlet />
        </Center>
    </div>
  )
}

export default AuthLayout

// w-full h-[100vh] p-4