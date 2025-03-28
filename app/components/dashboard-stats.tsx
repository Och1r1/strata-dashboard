import type React from "react"
import { Building, DollarSign, FileText, Users2 } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface StatCardProps {
  title: string
  value: string
  description: string
  icon: React.ReactNode
}

function StatCard({ title, value, description, icon }: StatCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-6">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
        <div className="rounded-full bg-muted p-3">{icon}</div>
      </CardContent>
    </Card>
  )
}

export function DashboardStats() {
  return (
    <div className="grid gap-4 mb-6 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Units"
        value="48"
        description="Residential apartments"
        icon={<Building className="h-5 w-5" />}
      />
      <StatCard
        title="Committee Members"
        value="7"
        description="Active members"
        icon={<Users2 className="h-5 w-5" />}
      />
      <StatCard
        title="Maintenance Fund"
        value="$125,450"
        description="Available funds"
        icon={<DollarSign className="h-5 w-5" />}
      />
      <StatCard
        title="Open Requests"
        value="12"
        description="Pending resolution"
        icon={<FileText className="h-5 w-5" />}
      />
    </div>
  )
}

