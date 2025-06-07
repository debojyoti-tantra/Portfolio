import PythonLibrariesComments from "@/components/PythonLibrariesComments";
import { PythonLibraroesSidebar } from "@/components/PythonLibraroesSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export const metadata = {
    title: "Pyhton Libraries",
    description: "Explore Python Libraries.",
};

export default function RootLayout({ children }) {
    return (
        <div className="bg-violet-100 dark:bg-slate-900">
            <SidebarProvider>
                <PythonLibraroesSidebar />
                {children}
            </SidebarProvider>
        </div>
    );
}
