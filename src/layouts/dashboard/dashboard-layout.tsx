import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "./components";
import clsx from "clsx";

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-1 w-full bg-background">
        <Sidebar />
        <main
          className={clsx(
            "flex-1 px-3 transition-all duration-300 overflow-auto",
            "pt-[64px]"
          )}
        >
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
