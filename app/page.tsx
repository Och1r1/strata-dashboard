import type React from "react"
import { Building, DollarSign, FileText, Users2, Mail, Calendar } from "lucide-react"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface StatCardProps {
  title: string
  value: string
  description: string
  icon: React.ReactNode
  href: string
}

function StatCard({ title, value, description, icon, href }: StatCardProps) {
  return (
    <Link href={href} className="block">
      <Card className="h-full transition-all hover:shadow-md">
        <CardContent className="flex flex-row items-center justify-between p-6">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold">{value}</p>
            <p className="text-xs text-muted-foreground">{description}</p>
          </div>
          <div className="rounded-full bg-muted p-3">{icon}</div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default function Home() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>

      <div className="grid gap-4 mb-8 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Units"
          value="48"
          description="Residential apartments"
          icon={<Building className="h-5 w-5" />}
          href="/building-info"
        />
        <StatCard
          title="Committee Members"
          value="7"
          description="Active members"
          icon={<Users2 className="h-5 w-5" />}
          href="/committee"
        />
        <StatCard
          title="Maintenance Fund"
          value="$125,450"
          description="Available funds"
          icon={<DollarSign className="h-5 w-5" />}
          href="/building-info"
        />
        <StatCard
          title="Open Requests"
          value="12"
          description="Pending resolution"
          icon={<FileText className="h-5 w-5" />}
          href="/maintenance"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="grid gap-2">
            <Button asChild variant="outline" className="justify-start">
              <Link href="/meetings">
                <Calendar className="mr-2 h-4 w-4" />
                View Upcoming Meetings
              </Link>
            </Button>
            <Button asChild variant="outline" className="justify-start">
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Create Maintenance Request
              </Link>
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Recent Updates</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <p className="font-medium">Annual General Meeting Scheduled</p>
              <p className="text-sm text-muted-foreground">May 15, 2025 at 6:00 PM</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <p className="font-medium">New Committee Member Elected</p>
              <p className="text-sm text-muted-foreground">James Taylor from Unit 508</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <p className="font-medium">Maintenance Fund Contribution Updated</p>
              <p className="text-sm text-muted-foreground">Effective from July 1, 2025</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

