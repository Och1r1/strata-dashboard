// ✅ 1. React page (Edited to fetch from DB)
"use client";

import { useEffect, useState } from "react";
import { Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  unit: string;
  email: string;
  phone: string;
  term: string;
  avatarUrl?: string;
  initials: string;
}

export default function CommitteePage() {
  const [members, setMembers] = useState<CommitteeMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCommittee = async () => {
      try {
        const res = await fetch("/api/committee-members");
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to load committee members");
        setMembers(data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCommittee();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

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
        {members.map((member) => (
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
  );
}