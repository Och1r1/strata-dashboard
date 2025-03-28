import { Badge } from "@/components/ui/badge"

interface MaintenanceRequest {
  id: string
  title: string
  unit: string
  date: string
  status: "pending" | "in-progress" | "completed"
}

const requests: MaintenanceRequest[] = [
  {
    id: "1",
    title: "Leaking Faucet",
    unit: "Unit 203",
    date: "Apr 12, 2025",
    status: "in-progress",
  },
  {
    id: "2",
    title: "Broken Intercom",
    unit: "Unit 107",
    date: "Apr 10, 2025",
    status: "pending",
  },
  {
    id: "3",
    title: "Hallway Light Out",
    unit: "Level 2",
    date: "Apr 8, 2025",
    status: "completed",
  },
  {
    id: "4",
    title: "Garage Door Issue",
    unit: "Parking",
    date: "Apr 5, 2025",
    status: "pending",
  },
]

export function MaintenanceRequests() {
  return (
    <div className="space-y-4">
      {requests.map((request) => (
        <div key={request.id} className="flex flex-col space-y-2 rounded-lg border p-3">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">{request.title}</h3>
            <Badge
              variant={
                request.status === "pending" ? "outline" : request.status === "in-progress" ? "secondary" : "default"
              }
            >
              {request.status === "in-progress"
                ? "In Progress"
                : request.status === "completed"
                  ? "Completed"
                  : "Pending"}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            {request.unit} • {request.date}
          </p>
        </div>
      ))}
    </div>
  )
}

