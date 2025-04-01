"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClipboardList } from "lucide-react";

interface MaintenanceRequest {
  id: string;
  issueTitle: string;
  location: string;
  created_at: string;
  description: string;
  priority: "low" | "medium" | "high";
  contactName: string;
  notes?: string;
}

export default function MaintenancePage() {
  const [requests, setRequests] = useState<MaintenanceRequest[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch("/api/submit-issue");
        const data = await response.json();
        console.log(data); // Check the structure of the data
        if (data?.data) {
          setRequests(data.data);
        } else {
          setError("Failed to fetch maintenance requests.");
        }
      } catch (err) {
        setError("Error fetching data from server.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchRequests();
  }, []);
  

  const handleNewRequest = () => {
    router.push("/contact");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <ClipboardList className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Maintenance Requests</h1>
      </div>

      <div className="flex justify-between items-center mb-8">
        <p className="text-muted-foreground">Track and manage maintenance requests for the building.</p>
        <Button onClick={handleNewRequest}>New Request</Button>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All ({requests.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6 mt-6">
          {requests.map((request) => (
            <MaintenanceRequestCard key={request.id} request={request} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}

function MaintenanceRequestCard({ request }: { request: MaintenanceRequest }) {
  const formattedDate = new Date(request.created_at).toLocaleDateString();

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CardTitle className="text-xl">{request.issueTitle}</CardTitle>
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
          {request.location ? request.location : "No unit specified"} • Submitted on {formattedDate} by {request.contactName}
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
        </div>
      </CardContent>
    </Card>
  );
}
