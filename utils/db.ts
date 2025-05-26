import { supabase } from '@/lib/supabase';

export async function submitIssue(issueData: {
  issue_title: string;
  location: string;
  description: string;
  priority: string;
  contact_name: string;
  contact_email?: string;
}) {
  const { data, error } = await supabase
    .from('maintenance_requests')
    .insert([issueData]);

  if (error) throw error;
  return data;
}
