import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface CommitteeMember {
  id: string
  name: string
  role: string
  unit: string
  avatarUrl?: string
  initials: string
}

const committeeMembers: CommitteeMember[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Chairperson",
    unit: "Unit 301",
    initials: "SJ",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Secretary",
    unit: "Unit 205",
    initials: "MC",
  },
  {
    id: "3",
    name: "David Wilson",
    role: "Treasurer",
    unit: "Unit 412",
    initials: "DW",
  },
  {
    id: "4",
    name: "Emma Rodriguez",
    role: "Member",
    unit: "Unit 107",
    initials: "ER",
  },
  {
    id: "5",
    name: "James Taylor",
    role: "Member",
    unit: "Unit 508",
    initials: "JT",
  },
]

export function CommitteeMembers() {
  return (
    <div className="space-y-4">
      {committeeMembers.map((member) => (
        <div key={member.id} className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={member.avatarUrl} alt={member.name} />
            <AvatarFallback>{member.initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{member.name}</p>
            <p className="text-sm text-muted-foreground">
              {member.role} • {member.unit}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

