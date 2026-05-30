import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  console.log("MainLayout rendered");
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-screen flex-1 flex-col" >
        <SidebarTrigger />
        {<Outlet />}
      </main>
    </SidebarProvider>
  )
}

export default MainLayout