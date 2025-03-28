import { CalendarIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

interface Meeting {
  id: string
  title: string
  date: string
  time: string
  location: string
  type: "general" | "committee" | "special"
}

const meetings: Meeting[] = [
  {
    id: "1",
    title: "Annual General Meeting",
    date: "May 15, 2025",
    time: "6:00 PM",
    location: "Building Common Room",
    type: "general",
  },
  {
    id: "2",
    title: "Committee Meeting",
    date: "April 28, 2025",
    time: "7:30 PM",
    location: "Building Common Room",
    type: "committee",
  },
  {
    id: "3",
    title: "Special Resolution Meeting",
    date: "June 10, 2025",
    time: "6:30 PM",
    location: "Building Common Room",
    type: "special",
  },
]

export function UpcomingMeetings() {
  return (
    <div className="space-y-4">
      {meetings.map((meeting) => (
        <div key={meeting.id} className="flex flex-col space-y-2 rounded-lg border p-3">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">{meeting.title}</h3>
            <Badge
              variant={meeting.type === "general" ? "default" : meeting.type === "committee" ? "outline" : "secondary"}
            >
              {meeting.type === "general" ? "General" : meeting.type === "committee" ? "Committee" : "Special"}
            </Badge>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarIcon className="mr-1 h-4 w-4" />
            <span>
              {meeting.date} • {meeting.time}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{meeting.location}</p>
        </div>
      ))}
    </div>
  )
}

