import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const DashboardLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="h-full relative">
        <div className="hidden h-full md:flex md:flex-col md:fixed md:w-72 md:inset-y-0 z-[20] bg-gray-900">
            <Sidebar />
        </div>
        <div className="md:pl-72 ">
            <Navbar />
            {children}
        </div>
    </div>
  )
}

export default DashboardLayout;