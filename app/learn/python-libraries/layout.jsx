import { PythonLibraroesSidebar } from "@/components/PythonLibraroesSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Pyhton Libraries",
    description: "Explore Python Libraries.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                    <div className="bg-violet-100 dark:bg-slate-900">
                <SidebarProvider>
                    <PythonLibraroesSidebar />
                        <SidebarTrigger />
                        {children}
                </SidebarProvider>
                    </div>
            </body>
        </html>
    );
}
