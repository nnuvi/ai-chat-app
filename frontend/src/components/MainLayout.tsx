import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";

const MainLayout = () => {
  console.log("MainLayout rendered");
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-screen flex-1 flex-col">
        <Navbar />
        {<Outlet />}
      </main>
    </SidebarProvider>
  );
};

export default MainLayout;
