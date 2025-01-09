import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "./components";
import useAuth from "../../hooks/useAuth";

const DashboardLayout = () => {
  useAuth()
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="fixed h-screen">
        <Sidebar />
      </div>
      
      <div className="flex flex-col flex-1 ml-64">
        <div className="fixed top-0 right-0 left-64 bg-white z-10">
          <Header />
        </div>
        
        <main className="flex-1 overflow-auto pt-16 px-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;