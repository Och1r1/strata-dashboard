"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Building2, Menu, X, Users, Calendar, ClipboardList, Info, Home, Mail } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <div className="flex h-16 items-center border-b px-4 md:hidden">
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <div className="flex flex-1 items-center justify-center">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Building2 className="h-5 w-5" />
            <span>Strata Manager</span>
          </Link>
        </div>
      </div>
      <SheetContent side="left" className="w-64 p-0">
        <div className="flex h-16 items-center border-b px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold" onClick={() => setOpen(false)}>
            <Building2 className="h-5 w-5" />
            <span>Strata Manager</span>
          </Link>
          <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setOpen(false)}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <nav className="grid gap-1 p-4">
          <NavLink
            href="/"
            icon={<Home className="mr-2 h-4 w-4" />}
            isActive={pathname === "/"}
            onClick={() => setOpen(false)}
          >
            Dashboard
          </NavLink>
          <NavLink
            href="/committee"
            icon={<Users className="mr-2 h-4 w-4" />}
            isActive={pathname === "/committee"}
            onClick={() => setOpen(false)}
          >
            Committee Members
          </NavLink>
          <NavLink
            href="/meetings"
            icon={<Calendar className="mr-2 h-4 w-4" />}
            isActive={pathname === "/meetings"}
            onClick={() => setOpen(false)}
          >
            Meetings
          </NavLink>
          <NavLink
            href="/maintenance"
            icon={<ClipboardList className="mr-2 h-4 w-4" />}
            isActive={pathname === "/maintenance"}
            onClick={() => setOpen(false)}
          >
            Maintenance
          </NavLink>
          <NavLink
            href="/building-info"
            icon={<Info className="mr-2 h-4 w-4" />}
            isActive={pathname === "/building-info"}
            onClick={() => setOpen(false)}
          >
            Building Info
          </NavLink>
          <NavLink
            href="/contact"
            icon={<Mail className="mr-2 h-4 w-4" />}
            isActive={pathname === "/contact"}
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

interface NavLinkProps {
  href: string
  icon: React.ReactNode
  children: React.ReactNode
  isActive: boolean
  onClick: () => void
}

function NavLink({ href, icon, children, isActive, onClick }: NavLinkProps) {
  return (
    <Link href={href} passHref onClick={onClick}>
      <Button variant="ghost" className={cn("w-full justify-start", isActive && "bg-muted font-medium")}>
        {icon}
        {children}
      </Button>
    </Link>
  )
}

