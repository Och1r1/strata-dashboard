"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Building2, Users, Calendar, ClipboardList, Info, Home, Mail } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {}

export function SidebarNavClient({ className, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-muted/40 md:block md:w-64">
      <div className="flex h-16 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Building2 className="h-5 w-5" />
          <span>Strata Manager</span>
        </Link>
      </div>
      <nav className="grid gap-1 p-4">
        <NavLink href="/" icon={<Home className="mr-2 h-4 w-4" />} isActive={pathname === "/"}>
          Dashboard
        </NavLink>
        <NavLink href="/committee" icon={<Users className="mr-2 h-4 w-4" />} isActive={pathname === "/committee"}>
          Committee Members
        </NavLink>
        <NavLink href="/meetings" icon={<Calendar className="mr-2 h-4 w-4" />} isActive={pathname === "/meetings"}>
          Meetings
        </NavLink>
        <NavLink
          href="/maintenance"
          icon={<ClipboardList className="mr-2 h-4 w-4" />}
          isActive={pathname === "/maintenance"}
        >
          Maintenance
        </NavLink>
        <NavLink
          href="/building-info"
          icon={<Info className="mr-2 h-4 w-4" />}
          isActive={pathname === "/building-info"}
        >
          Building Info
        </NavLink>
        <NavLink href="/contact" icon={<Mail className="mr-2 h-4 w-4" />} isActive={pathname === "/contact"}>
          Contact
        </NavLink>
      </nav>
    </div>
  )
}

interface NavLinkProps {
  href: string
  icon: React.ReactNode
  children: React.ReactNode
  isActive: boolean
}

function NavLink({ href, icon, children, isActive }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <Button variant="ghost" className={cn("w-full justify-start", isActive && "bg-muted font-medium")}>
        {icon}
        {children}
      </Button>
    </Link>
  )
}

