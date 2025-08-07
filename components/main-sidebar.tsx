"use client"

import Link from "next/link"
import { FileText, FolderKanban, GalleryVerticalEnd, Home, User2, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar"

export function MainSidebar() {
  const menuItems = [
    {
      name: "Home",
      href: "#",
      icon: Home,
    },
    {
      name: "About",
      href: "#about",
      icon: User2,
    },
    {
      name: "Projects",
      href: "#projects",
      icon: FolderKanban,
    },
    // {
    //   name: "Blog",
    //   href: "#blog",
    //   icon: GalleryVerticalEnd,
    // },
    {
      name: "Resume",
      href: "#resume",
      icon: FileText,
    },
  ]

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" className="border-r w-48 font-mono">
        <SidebarHeader className="flex justify-center py-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <span className="text-lg font-bold font-mono">TZ</span>
          </div>
        </SidebarHeader>
        <SidebarContent className="font-mono">
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild tooltip={item.name} className="hover-highlight">
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="pb-6">
          <div className="text-center text-xs text-muted-foreground group-data-[collapsible=icon]:hidden mb-4 font-mono">
            <p>Thomas Zeng</p>
            <p>Student & Developer</p>
          </div>
          <div className="flex gap-2 group-data-[collapsible=icon]:gap-1 flex-row items-start">
            <Link href="https://github.com/thomasz5" target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="ghost" className="h-8 w-8 hover-icon-glow">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/thomasz5" target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="ghost" className="h-8 w-8 hover-icon-glow">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:thomaszeng05@gmail.com">
              <Button size="icon" variant="ghost" className="h-8 w-8 hover-icon-glow">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </SidebarProvider>
  )
}
