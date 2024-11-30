"use client"
 
import * as React from "react"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarMenu, MenubarTrigger } from "../ui/menubar"
import { BsChevronExpand, BsHexagonHalf, BsMoonFill, BsSunFill } from "react-icons/bs"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(()=>{
      setIsClient(true);
  },[])
 
  return (
    <>
      {isClient ? 
        <DropdownMenu>
          <DropdownMenuTrigger className="w-[170px]" asChild>
            <Button variant="outline">
              Theme: {theme && theme?.substring(0,1).toUpperCase()+theme?.substring(1)}
              <BsChevronExpand className="ml-3"/>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => {
              setTheme("light")
              // anychartCore.theme("lightTurquoise")
            }}>
              <BsSunFill className="mr-2"/>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => {
              setTheme("dark")
              // anychartCore.theme("lightTurquoise")
            }}>
              <BsMoonFill className="mr-2"/>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              <BsHexagonHalf className="mr-2"/>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      : 
        <p className="text-sm text-muted-foreground">Loading ...</p>
      }
    </>
    
  )
}