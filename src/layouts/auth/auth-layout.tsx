import { Outlet } from "react-router-dom"
import Center from "../../components/shared/center"
import useUnauth from "../../hooks/useUnauth"

const AuthLayout = () => {
  useUnauth()
  return (
    <div className="bg-slate-200 h-screen">
        <Center className="flex-col">
            <Outlet />
        </Center>
    </div>
  )
}

export default AuthLayout

