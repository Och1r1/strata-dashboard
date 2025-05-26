"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const formSchema = z.object({
  issue_title: z.string().min(2, {
    message: "Issue title must be at least 2 characters.",
  }),
  location: z.string().min(2, {
    message: "Location/unit number must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  priority: z.string().min(1, {
    message: "Please select a priority level.",
  }),
  contact_name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  contact_email: z.string().email({
    message: "Please enter a valid email address.",
  }).optional(),
})

type IssueFormValues = z.infer<typeof formSchema>

export default function IssueReportPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const { toast } = useToast()

  const form = useForm<IssueFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      issue_title: "",
      location: "",
      description: "",
      priority: "",
      contact_name: "",
      contact_email: "",
    },
  })

  // Handle form submission (POST)
  async function onSubmit(values: IssueFormValues) {
    setIsSubmitting(true);
  
    try {
      // Call the API to submit the issue
      const response = await fetch('/api/submit-issue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values), // Send the form values as JSON
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit issue');
      }
  
      const data = await response.json();
      setIsSubmitting(false);
      setSuccess(true);
      form.reset();
  
      toast({
        title: 'Issue reported',
        description: 'We\'ve received your issue and will get back to you soon.',
      });
  
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      toast({
        title: 'Submission failed',
        description: 'Something went wrong. Please try again later.',
        variant: 'destructive',
      });
    }
  }
  

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Mail className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Report an Issue</h1>
      </div>

      <p className="mb-8 text-muted-foreground">
        Please fill out the form below to report an issue. Our team will get back to you as soon as possible.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Submit an Issue</CardTitle>
            <CardDescription>Fill out the form below to report an issue.</CardDescription>
          </CardHeader>
          <CardContent>
            {success && (
              <Alert className="mb-6">
                <AlertTitle>Issue reported successfully!</AlertTitle>
                <AlertDescription>
                  Thank you for reporting the issue. We will get back to you as soon as possible.
                </AlertDescription>
              </Alert>
            )}

            <Form {...form}>
              <form method="POST" action="/submit-issue" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="issue_title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Issue Title</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Leaking Faucet" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location / Unit Number</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Unit 203" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="e.g. The kitchen faucet has a slow leak..." className="min-h-[150px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="priority"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Priority Level</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select priority level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contact_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contact_email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-center">
                  <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Submit Issue"
                    )}
                  </Button>
                </div>

              </form>
            </Form>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Alternative ways to reach us</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Building Manager</h3>
                <p className="text-sm text-muted-foreground">Robert Smith</p>
                <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                <p className="text-sm text-muted-foreground">manager@horizonapts.com</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Strata Management</h3>
                <p className="text-sm text-muted-foreground">Cityville Strata Services</p>
                <p className="text-sm text-muted-foreground">(555) 987-6543</p>
                <p className="text-sm text-muted-foreground">admin@cityvillestrata.com</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Emergency Contact</h3>
                <p className="text-sm text-muted-foreground">(555) 789-0123 (24/7)</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Office Hours</h3>
                <p className="text-sm text-muted-foreground">Monday to Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-sm text-muted-foreground">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-sm text-muted-foreground">Sunday: Closed</p>
              </div>
            </CardContent>
          </Card>
      </div>
    </div>
  )
}