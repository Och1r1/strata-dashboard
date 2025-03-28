import type React from "react"
import { Info, Building, MapPin, Phone, Mail, Calendar, DollarSign } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

interface BuildingDetail {
  label: string
  value: string
  icon?: React.ReactNode
}

const buildingDetails: BuildingDetail[] = [
  {
    label: "Building Name",
    value: "Horizon Apartments",
    icon: <Building className="h-4 w-4" />,
  },
  {
    label: "Address",
    value: "123 Main Street, Cityville",
    icon: <MapPin className="h-4 w-4" />,
  },
  {
    label: "Year Built",
    value: "2018",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    label: "Total Units",
    value: "48",
  },
  {
    label: "Floors",
    value: "12",
  },
  {
    label: "Strata Plan",
    value: "SP12345",
  },
]

const contactDetails: BuildingDetail[] = [
  {
    label: "Building Manager",
    value: "Robert Smith",
    icon: <Phone className="h-4 w-4" />,
  },
  {
    label: "Manager Phone",
    value: "(555) 123-4567",
    icon: <Phone className="h-4 w-4" />,
  },
  {
    label: "Manager Email",
    value: "manager@horizonapts.com",
    icon: <Mail className="h-4 w-4" />,
  },
  {
    label: "Strata Manager",
    value: "Cityville Strata Services",
  },
  {
    label: "Emergency Contact",
    value: "(555) 987-6543",
  },
]

const financialDetails: BuildingDetail[] = [
  {
    label: "Maintenance Fund",
    value: "$125,450",
    icon: <DollarSign className="h-4 w-4" />,
  },
  {
    label: "Capital Works Fund",
    value: "$350,000",
    icon: <DollarSign className="h-4 w-4" />,
  },
  {
    label: "Annual Budget",
    value: "$180,000",
    icon: <DollarSign className="h-4 w-4" />,
  },
  {
    label: "Quarterly Levy",
    value: "$1,250 per unit (avg)",
  },
  {
    label: "Last Audit",
    value: "December 2024",
  },
]

export default function BuildingInfoPage() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Info className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Building Information</h1>
      </div>

      <p className="mb-8 text-muted-foreground">
        Key information about Horizon Apartments, including building details, contacts, and financial information.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Building Details</CardTitle>
            <CardDescription>Physical building information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {buildingDetails.map((detail, index) => (
                <div key={index} className="flex items-center">
                  {detail.icon && <span className="text-muted-foreground mr-2">{detail.icon}</span>}
                  <span className="text-sm font-medium w-32">{detail.label}:</span>
                  <span className="text-sm">{detail.value}</span>
                </div>
              ))}
            </div>

            <Separator className="my-4" />

            <div className="flex justify-end">
              <Button variant="outline" size="sm">
                View Floor Plans
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Management and emergency contacts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {contactDetails.map((detail, index) => (
                <div key={index} className="flex items-center">
                  {detail.icon && <span className="text-muted-foreground mr-2">{detail.icon}</span>}
                  <span className="text-sm font-medium w-32">{detail.label}:</span>
                  <span className="text-sm">{detail.value}</span>
                </div>
              ))}
            </div>

            <Separator className="my-4" />

            <div className="flex justify-end">
              <Button variant="outline" size="sm">
                Contact Directory
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Financial Information</CardTitle>
            <CardDescription>Funds and budget details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {financialDetails.map((detail, index) => (
                <div key={index} className="flex items-center">
                  {detail.icon && <span className="text-muted-foreground mr-2">{detail.icon}</span>}
                  <span className="text-sm font-medium w-32">{detail.label}:</span>
                  <span className="text-sm">{detail.value}</span>
                </div>
              ))}
            </div>

            <Separator className="my-4" />

            <div className="flex justify-end">
              <Button variant="outline" size="sm">
                Financial Reports
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle>Building Documents</CardTitle>
            <CardDescription>Important documents and reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Button variant="outline" className="justify-start h-auto py-4 px-4">
                <div className="flex flex-col items-start">
                  <span className="font-medium">Strata Plan</span>
                  <span className="text-xs text-muted-foreground">SP12345.pdf</span>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4 px-4">
                <div className="flex flex-col items-start">
                  <span className="font-medium">By-Laws</span>
                  <span className="text-xs text-muted-foreground">HorizonApts_ByLaws.pdf</span>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4 px-4">
                <div className="flex flex-col items-start">
                  <span className="font-medium">Annual Report 2024</span>
                  <span className="text-xs text-muted-foreground">AnnualReport_2024.pdf</span>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4 px-4">
                <div className="flex flex-col items-start">
                  <span className="font-medium">Insurance Certificate</span>
                  <span className="text-xs text-muted-foreground">Insurance_2025.pdf</span>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4 px-4">
                <div className="flex flex-col items-start">
                  <span className="font-medium">Maintenance Schedule</span>
                  <span className="text-xs text-muted-foreground">Maintenance_Schedule.pdf</span>
                </div>
              </Button>
              <Button variant="outline" className="justify-start h-auto py-4 px-4">
                <div className="flex flex-col items-start">
                  <span className="font-medium">Fire Safety Compliance</span>
                  <span className="text-xs text-muted-foreground">FireSafety_2025.pdf</span>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

