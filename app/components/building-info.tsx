interface BuildingDetail {
  label: string
  value: string
}

const buildingDetails: BuildingDetail[] = [
  {
    label: "Building Name",
    value: "Horizon Apartments",
  },
  {
    label: "Address",
    value: "123 Main Street, Cityville",
  },
  {
    label: "Year Built",
    value: "2018",
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
  {
    label: "Building Manager",
    value: "Robert Smith",
  },
]

export function BuildingInfo() {
  return (
    <div className="space-y-2">
      {buildingDetails.map((detail, index) => (
        <div key={index} className="flex justify-between py-1">
          <span className="text-sm font-medium text-muted-foreground">{detail.label}</span>
          <span className="text-sm">{detail.value}</span>
        </div>
      ))}
    </div>
  )
}

