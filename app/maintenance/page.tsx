import { ClipboardList, AlertCircle, CheckCircle, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface MaintenanceRequest {
  id: string
  title: string
  unit: string
  date: string
  description: string
  status: "pending" | "in-progress" | "completed"
  priority: "low" | "medium" | "high"
  submittedBy: string
  assignedTo?: string
  completedDate?: string
  notes?: string
}

const requests: MaintenanceRequest[] = [
  {
    id: "1",
    title: "Leaking Faucet",
    unit: "Unit 203",
    date: "Apr 12, 2025",
    description: "The kitchen faucet has a slow leak that is getting worse. Water is pooling under the sink.",
    status: "in-progress",
    priority: "medium",
    submittedBy: "John Smith",
    assignedTo: "Building Maintenance",
    notes: "Plumber scheduled for April 14th",
  },
  {
    id: "2",
    title: "Broken Intercom",
    unit: "Unit 107",
    date: "Apr 10, 2025",
    description: "Intercom not working. Cannot hear visitors or buzz them in.",
    status: "pending",
    priority: "high",
    submittedBy: "Emma Rodriguez",
    notes: "Waiting for intercom specialist availability",
  },
  {
    id: "3",
    title: "Hallway Light Out",
    unit: "Level 2",
    date: "Apr 8, 2025",
    description: "The light fixture near Unit 205 is not working, making the hallway dark at night.",
    status: "completed",
    priority: "medium",
    submittedBy: "Building Manager",
    assignedTo: "Building Maintenance",
    completedDate: "Apr 9, 2025",
    notes: "Replaced bulb and fixed wiring issue",
  },
  {
    id: "4",
    title: "Garage Door Issue",
    unit: "Parking",
    date: "Apr 5, 2025",
    description: "The garage door is making a loud grinding noise when opening and sometimes gets stuck.",
    status: "pending",
    priority: "high",
    submittedBy: "David Wilson",
    notes: "Garage door company contacted for quote",
  },
  {
    id: "5",
    title: "Cracked Tile in Lobby",
    unit: "Common Area",
    date: "Apr 3, 2025",
    description: "Several tiles in the main lobby are cracked and becoming a tripping hazard.",
    status: "in-progress",
    priority: "medium",
    submittedBy: "Building Manager",
    assignedTo: "Premium Tiling Services",
    notes: "Contractor scheduled for April 15th",
  },
  {
    id: "6",
    title: "Water Stain on Ceiling",
    unit: "Unit 412",
    date: "Mar 28, 2025",
    description: "Water stain appearing on bathroom ceiling, possibly from unit above.",
    status: "completed",
    priority: "high",
    submittedBy: "David Wilson",
    assignedTo: "Emergency Plumbing",
    completedDate: "Apr 1, 2025",
    notes: "Fixed leak from Unit 512 bathtub and repaired ceiling",
  },
  {
    id: "7",
    title: "Mailbox Lock Broken",
    unit: "Unit 301",
    date: "Mar 25, 2025",
    description: "Cannot open mailbox, lock appears to be jammed or broken.",
    status: "completed",
    priority: "low",
    submittedBy: "Sarah Johnson",
    assignedTo: "Building Maintenance",
    completedDate: "Mar 27, 2025",
    notes: "Replaced lock and provided new keys",
  },
]

export default function MaintenancePage() {
  const pendingRequests = requests.filter((req) => req.status === "pending")
  const inProgressRequests = requests.filter((req) => req.status === "in-progress")
  const completedRequests = requests.filter((req) => req.status === "completed")

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <ClipboardList className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Maintenance Requests</h1>
      </div>

      <div className="flex justify-between items-center mb-8">
        <p className="text-muted-foreground">Track and manage maintenance requests for the building.</p>
        <Button>New Request</Button>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All ({requests.length})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({pendingRequests.length})</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress ({inProgressRequests.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completedRequests.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6 mt-6">
          {requests.map((request) => (
            <MaintenanceRequestCard key={request.id} request={request} />
          ))}
        </TabsContent>

        <TabsContent value="pending" className="space-y-6 mt-6">
          {pendingRequests.map((request) => (
            <MaintenanceRequestCard key={request.id} request={request} />
          ))}
        </TabsContent>

        <TabsContent value="in-progress" className="space-y-6 mt-6">
          {inProgressRequests.map((request) => (
            <MaintenanceRequestCard key={request.id} request={request} />
          ))}
        </TabsContent>

        <TabsContent value="completed" className="space-y-6 mt-6">
          {completedRequests.map((request) => (
            <MaintenanceRequestCard key={request.id} request={request} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

function MaintenanceRequestCard({ request }: { request: MaintenanceRequest }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CardTitle className="text-xl">{request.title}</CardTitle>
            <Badge
              variant={
                request.status === "pending" ? "outline" : request.status === "in-progress" ? "secondary" : "default"
              }
              className="ml-2"
            >
              {request.status === "in-progress"
                ? "In Progress"
                : request.status === "completed"
                  ? "Completed"
                  : "Pending"}
            </Badge>
          </div>
          <Badge
            variant={
              request.priority === "high" ? "destructive" : request.priority === "medium" ? "default" : "outline"
            }
          >
            {request.priority.charAt(0).toUpperCase() + request.priority.slice(1)} Priority
          </Badge>
        </div>
        <CardDescription>
          {request.unit} • Submitted on {request.date} by {request.submittedBy}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="font-medium mb-2">Description</h3>
            <p className="text-sm text-muted-foreground">{request.description}</p>

            {request.notes && (
              <div className="mt-4">
                <h3 className="font-medium mb-2">Notes</h3>
                <p className="text-sm text-muted-foreground">{request.notes}</p>
              </div>
            )}
          </div>

          <div className="space-y-3">
            <div className="flex items-center text-sm">
              <StatusIcon status={request.status} className="mr-2 h-4 w-4" />
              <span className="font-medium w-24">Status:</span>
              <span className="text-muted-foreground capitalize">{request.status.replace("-", " ")}</span>
            </div>

            {request.assignedTo && (
              <div className="flex items-center text-sm">
                <span className="font-medium w-24 ml-6">Assigned to:</span>
                <span className="text-muted-foreground">{request.assignedTo}</span>
              </div>
            )}

            {request.completedDate && (
              <div className="flex items-center text-sm">
                <span className="font-medium w-24 ml-6">Completed on:</span>
                <span className="text-muted-foreground">{request.completedDate}</span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex gap-2">
          <Button variant="outline" size="sm">
            Update Status
          </Button>
          <Button variant="outline" size="sm">
            Add Note
          </Button>
          <Button variant="outline" size="sm">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function StatusIcon({ status, className }: { status: string; className?: string }) {
  if (status === "pending") {
    return <Clock className={className} />
  } else if (status === "in-progress") {
    return <AlertCircle className={className} />
  } else if (status === "completed") {
    return <CheckCircle className={className} />
  }
  return null
}

