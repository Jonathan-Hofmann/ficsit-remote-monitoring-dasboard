"use client"

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/react/ui/collapsible"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/react/ui/dropdown-menu"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
} from "@/react/ui/sidebar"
import { ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { FaArrowUp, FaBolt, FaChevronDown, FaDiagramProject, FaDisplay, FaGithub, FaHouse, FaIndustry, FaMap, FaMoon, FaRecycle, FaSun, FaTruckPlane, FaWarehouse } from "react-icons/fa6"

const subMenus = [
    {
        title: "Power",
        icon: FaBolt,
        basePath: "/power",
        items: [
            {
                title: "Overview",
                link: "/power"
            },
            {
                title: "Generators",
                link: "/power/generators"
            },
            {
                title: "Batteries",
                link: "/power/batteries"
            },
            {
                title: "Circuits",
                link: "/power/circuits"
            }
        ]
    },
    {
        title: "Vehicles",
        icon: FaTruckPlane,
        basePath: "/vehicles",
        items: [
            {
                title: "Overview",
                link: "/vehicles"
            },
            {
                title: "Road Vehicles",
                link: "/vehicles/road"
            },
            {
                title: "Trains",
                link: "/vehicles/trains"
            },
            {
                title: "Drones",
                link: "/vehicles/drones"
            }
        ]
    },
    {
        title: "Production",
        icon: FaIndustry,
        basePath: "/production",
        items: [
            {
                title: "Overview",
                link: "/production"
            },
            {
                title: "Factories",
                link: "/production/factory"
            }
        ]
    }
]

export const SidebarNavigation = () => {
    const {theme, setTheme} = useTheme();
    const path = usePathname();
    const [openedMenus, setOpenedMenus] = useState<string[]>([])
    return (
        <Sidebar collapsible="none" className="h-screen">
            <SidebarHeader className="pb-0">
                <div className="p-2 pb-0">
                    <p className="font-bold text-lg">FRM Dashboard</p>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Factory Monitoring</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton isActive={path==="/"} asChild>
                                    <a href={"/"}>
                                        <FaHouse />
                                        <span>Overview</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            {subMenus.map((menu)=>{
                                return(
                                    <Collapsible key={menu.title} onOpenChange={()=>{setOpenedMenus((old)=>{
                                        if(old.includes(menu.title)){
                                            old.splice(old.indexOf(menu.title), 1)
                                        } else {
                                            old.push(menu.title)
                                        }
                                        return [...old];
                                    })}} open={openedMenus.includes(menu.title) || path.includes(menu.basePath)} className="group/collapsible">
                                        <SidebarMenuItem>
                                            <CollapsibleTrigger asChild>
                                                <SidebarMenuButton isActive={path.includes(menu.basePath)}>
                                                    <menu.icon />
                                                    <span>{menu.title}</span>
                                                    <div className="ml-auto ">
                                                        <FaChevronDown className="transition-transform group-data-[state=open]/collapsible:rotate-180 h-3 w-3" />
                                                    </div>
                                                </SidebarMenuButton>
                                            </CollapsibleTrigger>
                                            <CollapsibleContent>
                                                <SidebarMenuSub>
                                                    {menu.items.map((sub_item)=>{
                                                        return(
                                                            <SidebarMenuSubItem key={sub_item.link}>
                                                                <SidebarMenuButton asChild isActive={path===sub_item.link}>
                                                                    <a href={sub_item.link}>
                                                                        <span>{sub_item.title}</span>
                                                                    </a>
                                                                </SidebarMenuButton>
                                                            </SidebarMenuSubItem>
                                                        )
                                                    })}
                                                </SidebarMenuSub>
                                            </CollapsibleContent>
                                        </SidebarMenuItem>
                                    </Collapsible>  
                                )
                            })}
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={path==="/storage"}>
                                    <a href={"/storage"}>
                                        <FaWarehouse />
                                        <span>Storage</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={path==="/awesome-sink"}>
                                    <a href={"/awesome-sink"}>
                                        <FaRecycle />
                                        <span>Awesome Sink</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Factory Planning</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={path==="/planner"}>
                                    <a href={"/planner"}>
                                        <FaDiagramProject />
                                        <span>Recipe Planner</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={path==="/map"}>
                                    <a href={"/map"}>
                                        <FaMap />
                                        <span>Interactive Map</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    {theme === "dark" && <FaMoon/>}
                                    {theme === "light" && <FaSun/>}
                                    {theme === "system" && <FaDisplay/>}
                                    {theme?.slice(0,1).toUpperCase()}{theme?.slice(1)} Theme
                                    <ChevronDown className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                                <DropdownMenuItem onClick={()=>{setTheme("light")}}>
                                    <span>Light</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={()=>{setTheme("dark")}}>
                                    <span>Dark</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={()=>{setTheme("system")}}>
                                    <span>System</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a href={"https://ficsit.app/mod/FicsitRemoteMonitoring"}>
                                <FaArrowUp className="rotate-45" />
                                <span>FRM Mod</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a href={"https://github.com/Jonathan-Hofmann/ficsit-remote-monitoring-dasboard"}>
                                <FaGithub />
                                <span>See on GitHub</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}