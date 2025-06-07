import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { StarsIcon } from "lucide-react"
import Link from "next/link"

export function PythonLibraroesSidebar() {
    return (
        <Sidebar>
            <div className="bg-white dark:bg-slate-950 h-full">
            <SidebarHeader className="pt-10 mt-5 ml-5 text-2xl underline">Topics</SidebarHeader>
            <SidebarContent className="m-5">
                <SidebarGroup>
                    <div className="flex flex-row items-center gap-2 hover:underline hover:text-blue-500">
                        <StarsIcon /> <Link href={`/learn/python-libraries`}>Introduction</Link>
                    </div>
                </SidebarGroup>

                <SidebarGroup>
                    <div className="flex flex-row items-center gap-2 hover:underline hover:text-blue-500">
                        <StarsIcon /> <Link href={`/learn/python-libraries/numpy`}>Numpy</Link>
                    </div>
                </SidebarGroup>

                <SidebarGroup>
                    <div className="flex flex-row items-center gap-2 hover:underline hover:text-blue-500">
                        <StarsIcon /> <Link href={`/learn/python-libraries/scipy`}>Scipy</Link>
                    </div>
                </SidebarGroup>

                <SidebarGroup>
                    <div className="flex flex-row items-center gap-2 hover:underline hover:text-blue-500">
                        <StarsIcon /> <Link href={`/learn/python-libraries/matplotlib`}>Matplotlib</Link>
                    </div>
                </SidebarGroup>

                <SidebarGroup>
                    <div className="flex flex-row items-center gap-2 hover:underline hover:text-blue-500">
                        <StarsIcon /> <Link href={`/learn/python-libraries/qrcode`}>qrcode</Link>
                    </div>
                </SidebarGroup>

                <SidebarGroup>
                    <div className="flex flex-row items-center gap-2 hover:underline hover:text-blue-500">
                        <StarsIcon /> <Link href={`/learn/python-libraries/pyzbar`}>pyzbar</Link>
                    </div>
                </SidebarGroup>

                <SidebarGroup>
                    <div className="flex flex-row items-center gap-2 hover:underline hover:text-blue-500">
                        <StarsIcon /> <Link href={`/learn/python-libraries/barcode`}>barcode</Link>
                    </div>
                </SidebarGroup>

            </SidebarContent>
            <SidebarFooter />
            </div>
        </Sidebar>
    )
}