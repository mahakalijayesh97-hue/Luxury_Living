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

const isLive = true;
const API_BASE_URL = isLive ? 'https://luxury-living-backend.onrender.com' : '';

export async function submitLead(data: LeadFormData): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          name: data.name,
          phone: data.phone,
          email: data.email || null,
          configuration: data.configuration || null,
          source: data.source,
          message: data.message || null,
        }
      })
    });

    if (!response.ok) {
      let errorMessage = 'Failed to submit form';
      try {
        const errorData = await response.json();
        errorMessage = errorData.error?.message || errorMessage;
      } catch (e) {
        errorMessage = `Server error: ${response.status} ${response.statusText}`;
      }
      return { success: false, error: errorMessage };
    }

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message || 'Network error occurred' };
  }
}
