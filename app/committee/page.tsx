import { Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CommitteeMember {
  id: string
  name: string
  role: string
  unit: string
  email: string
  phone: string
  term: string
  avatarUrl?: string
  initials: string
}

const committeeMembers: CommitteeMember[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Chairperson",
    unit: "Unit 301",
    email: "sarah.johnson@example.com",
    phone: "(555) 123-4567",
    term: "2024-2026",
    initials: "SJ",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Secretary",
    unit: "Unit 205",
    email: "michael.chen@example.com",
    phone: "(555) 234-5678",
    term: "2023-2025",
    initials: "MC",
  },
  {
    id: "3",
    name: "David Wilson",
    role: "Treasurer",
    unit: "Unit 412",
    email: "david.wilson@example.com",
    phone: "(555) 345-6789",
    term: "2024-2026",
    initials: "DW",
  },
  {
    id: "4",
    name: "Emma Rodriguez",
    role: "Member",
    unit: "Unit 107",
    email: "emma.rodriguez@example.com",
    phone: "(555) 456-7890",
    term: "2023-2025",
    initials: "ER",
  },
  {
    id: "5",
    name: "James Taylor",
    role: "Member",
    unit: "Unit 508",
    email: "james.taylor@example.com",
    phone: "(555) 567-8901",
    term: "2024-2026",
    initials: "JT",
  },
  {
    id: "6",
    name: "Olivia Kim",
    role: "Member",
    unit: "Unit 215",
    email: "olivia.kim@example.com",
    phone: "(555) 678-9012",
    term: "2023-2025",
    initials: "OK",
  },
  {
    id: "7",
    name: "Robert Garcia",
    role: "Member",
    unit: "Unit 403",
    email: "robert.garcia@example.com",
    phone: "(555) 789-0123",
    term: "2024-2026",
    initials: "RG",
  },
]

export default function CommitteePage() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Users className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Committee Members</h1>
      </div>

      <p className="mb-8 text-muted-foreground">
        The strata committee is elected by owners to represent the owners corporation and make day-to-day decisions on
        its behalf.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {committeeMembers.map((member) => (
          <Card key={member.id}>
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar className="h-12 w-12">
                <AvatarImage src={member.avatarUrl} alt={member.name} />
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription>{member.unit}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Badge variant="outline" className="mb-2">
                  {member.role}
                </Badge>
                <p className="text-sm text-muted-foreground">Term: {member.term}</p>
              </div>
              <div className="space-y-1 text-sm">
                <p className="flex items-center">
                  <span className="font-medium w-16">Email:</span>
                  <span className="text-muted-foreground">{member.email}</span>
                </p>
                <p className="flex items-center">
                  <span className="font-medium w-16">Phone:</span>
                  <span className="text-muted-foreground">{member.phone}</span>
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

