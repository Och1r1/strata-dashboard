import { Calendar, CalendarIcon, MapPin, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Meeting {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  type: "general" | "committee" | "special"
  agenda?: string[]
}

const meetings: Meeting[] = [
  {
    id: "1",
    title: "Annual General Meeting",
    date: "May 15, 2025",
    time: "6:00 PM",
    location: "Building Common Room",
    description:
      "Annual general meeting to discuss the budget, elect committee members, and review the past year's activities.",
    type: "general",
    agenda: [
      "Welcome and introduction",
      "Minutes of previous AGM",
      "Chairperson's report",
      "Treasurer's report",
      "Budget approval for 2025-2026",
      "Election of committee members",
      "General business",
    ],
  },
  {
    id: "2",
    title: "Committee Meeting",
    date: "April 28, 2025",
    time: "7:30 PM",
    location: "Building Common Room",
    description: "Regular committee meeting to discuss ongoing maintenance issues and upcoming projects.",
    type: "committee",
    agenda: [
      "Review of previous minutes",
      "Maintenance updates",
      "Financial report",
      "Upcoming projects discussion",
      "Other business",
    ],
  },
  {
    id: "3",
    title: "Special Resolution Meeting",
    date: "June 10, 2025",
    time: "6:30 PM",
    location: "Building Common Room",
    description: "Special meeting to discuss and vote on the proposed renovation of the building lobby.",
    type: "special",
    agenda: [
      "Presentation of lobby renovation proposal",
      "Cost breakdown and funding options",
      "Discussion and questions",
      "Voting on the special resolution",
    ],
  },
  {
    id: "4",
    title: "Budget Planning Meeting",
    date: "July 5, 2025",
    time: "7:00 PM",
    location: "Building Common Room",
    description: "Committee meeting focused on planning the budget for the next fiscal year.",
    type: "committee",
    agenda: [
      "Review of current financial position",
      "Maintenance fund assessment",
      "Capital works planning",
      "Draft budget preparation",
    ],
  },
  {
    id: "5",
    title: "Quarterly General Meeting",
    date: "August 20, 2025",
    time: "6:00 PM",
    location: "Building Common Room",
    description: "Quarterly meeting to update all owners on building matters and committee activities.",
    type: "general",
    agenda: ["Committee report", "Financial update", "Maintenance updates", "General business and questions"],
  },
]

export default function MeetingsPage() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Upcoming Meetings</h1>
      </div>

      <p className="mb-8 text-muted-foreground">
        Schedule of upcoming strata meetings, including general meetings, committee meetings, and special resolution
        meetings.
      </p>

      <div className="space-y-6">
        {meetings.map((meeting) => (
          <Card key={meeting.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{meeting.title}</CardTitle>
                <Badge
                  variant={
                    meeting.type === "general" ? "default" : meeting.type === "committee" ? "outline" : "secondary"
                  }
                >
                  {meeting.type === "general" ? "General" : meeting.type === "committee" ? "Committee" : "Special"}
                </Badge>
              </div>
              <CardDescription>{meeting.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{meeting.date}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{meeting.time}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{meeting.location}</span>
                  </div>
                </div>

                {meeting.agenda && (
                  <div>
                    <h3 className="font-medium mb-2">Agenda</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      {meeting.agenda.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-6 flex gap-2">
                <Button variant="outline" size="sm">
                  Add to Calendar
                </Button>
                <Button variant="outline" size="sm">
                  View Documents
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

