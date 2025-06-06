import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"
import Link from "next/link"

export function PythonLibraroesSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="pt-10 mt-5 ml-5">Topics</SidebarHeader>
            <SidebarContent className="m-5">
                <SidebarGroup>  <Link href={``}>Introduction</Link></SidebarGroup>
                <SidebarGroup>  <Link href={``}>Numpy</Link></SidebarGroup>
                <SidebarGroup>  <Link href={``}>Scipy</Link></SidebarGroup>
                <SidebarGroup>  <Link href={``}>Matplotlib</Link></SidebarGroup>
                <SidebarGroup>  <Link href={``}>qrcode</Link></SidebarGroup>
                <SidebarGroup>  <Link href={``}>pyzbar</Link></SidebarGroup>
                <SidebarGroup>  <Link href={``}>barcode</Link></SidebarGroup>
                <SidebarGroup>  <Link href={``}>Combo</Link></SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}