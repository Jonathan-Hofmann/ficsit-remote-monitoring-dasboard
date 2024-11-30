"use client"

import Link from "next/link"
import { ModeToggle } from "../theme/theme-changer"
import { ThemeProvider } from "../theme/themeProvider"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"
import { FaBolt, FaHome } from "react-icons/fa"
import { usePathname } from "next/navigation"

const Sidebar = () => {
    const path = usePathname()
    return(
        <div className="w-[70px] bg-background dark:bg-zinc-900 border-r h-screen sticky top-0 flex flex-col justify-between p-3">
            <div className="flex flex-col items-center gap-1">
                <p>SFRM</p>
                <Separator className="w-full my-3" /><Link href={"/"}>
                    <Button variant={path ==="/" ? "secondary" : "ghost"} size={"sm"} className="justify-start w-full">
                        <FaHome/>
                    </Button>
                </Link>
                <Link href={"/energy"}>
                    <Button variant={path.includes("/energy") ? "secondary" : "ghost"} size={"sm"} className="justify-start w-full">
                        <FaBolt/>
                    </Button>
                </Link>
            </div>
            <div>
                <ModeToggle/>
                {/* <p>Account</p> */}
            </div>
        </div>
    )
}

export const SidebarWrapper = ({children}:{children:any}) => {
    return(
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <div className="flex flex-row">
                <aside>
                    <Sidebar/>
                </aside>
                <div className="w-full">
                    {children}
                </div>
            </div>
        </ThemeProvider>
    )
}