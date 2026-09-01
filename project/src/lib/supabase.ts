import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type LeadSource =
  | 'site_visit'
  | 'brochure'
  | 'price'
  | 'final_cta'
  | 'header'
  | 'hero'
  | 'floor_plan';

export interface LeadFormData {
  name: string;
  phone: string;
  email?: string;
  configuration?: string;
  source: LeadSource;
  message?: string;
}

export async function submitLead(data: LeadFormData): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabase.from('leads').insert({
    name: data.name,
    phone: data.phone,
    email: data.email || null,
    configuration: data.configuration || null,
    source: data.source,
    message: data.message || null,
  });

  if (error) {
    return { success: false, error: error.message };
  }
  return { success: true };
}
