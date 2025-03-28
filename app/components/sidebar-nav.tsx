import type React from "react"
import Link from "next/link"
import { Building2, Users, Calendar, ClipboardList, Info, Home, Mail } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {}

export function SidebarNav({ className, ...props }: SidebarNavProps) {
  return (
    <div className="hidden border-r bg-muted/40 md:block md:w-64">
      <div className="flex h-16 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Building2 className="h-5 w-5" />
          <span>Strata Manager</span>
        </Link>
      </div>
      <nav className="grid gap-1 p-4">
        <NavLink href="/" icon={<Home className="mr-2 h-4 w-4" />}>
          Dashboard
        </NavLink>
        <NavLink href="/committee" icon={<Users className="mr-2 h-4 w-4" />}>
          Committee Members
        </NavLink>
        <NavLink href="/meetings" icon={<Calendar className="mr-2 h-4 w-4" />}>
          Meetings
        </NavLink>
        <NavLink href="/maintenance" icon={<ClipboardList className="mr-2 h-4 w-4" />}>
          Maintenance
        </NavLink>
        <NavLink href="/building-info" icon={<Info className="mr-2 h-4 w-4" />}>
          Building Info
        </NavLink>
        <NavLink href="/contact" icon={<Mail className="mr-2 h-4 w-4" />}>
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
}

function NavLink({ href, icon, children }: NavLinkProps) {
  // This is a client component, but we're using it in a server component
  // In a real app, you'd need to make this a client component with "use client"
  // and use usePathname() to determine the active state
  const isActive = false // Placeholder for server component

  return (
    <Link href={href} passHref>
      <Button variant="ghost" className={cn("w-full justify-start", isActive && "bg-muted font-medium")}>
        {icon}
        {children}
      </Button>
    </Link>
  )
}

