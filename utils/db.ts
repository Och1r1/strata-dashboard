import { supabase } from '@/lib/supabase';

export async function submitIssue(issueData: {
  issueTitle: string;
  location: string;
  description: string;
  priority: string;
  contactName: string;
  contactEmail?: string;
}) {
  const { data, error } = await supabase
    .from('maintenance_requests')
    .insert([issueData]);

  if (error) throw error;
  return data;
}
