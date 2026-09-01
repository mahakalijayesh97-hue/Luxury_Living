/*
# Create leads table for Piramal Vaikunth Phase 2 enquiry forms

1. New Tables
- `leads`
  - `id` (uuid, primary key)
  - `name` (text, not null) — full name of the enquirer
  - `phone` (text, not null) — contact phone number
  - `email` (text, nullable) — contact email (optional on some forms)
  - `configuration` (text, nullable) — preferred config e.g. "2 BHK", "3 BHK"
  - `source` (text, not null default 'site_visit') — which form/CTA the lead came from
  - `message` (text, nullable) — optional message
  - `created_at` (timestamptz, default now())
  - `status` (text, default 'new') — lead status for CRM tracking

2. Security
- Enable RLS on `leads`.
- This is a public landing page with no sign-in, so anon + authenticated can INSERT.
- SELECT/UPDATE/DELETE restricted to authenticated (admin/sales team) only — public visitors must not read others' leads.
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  configuration text,
  source text NOT NULL DEFAULT 'site_visit',
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Public can submit leads (no sign-in on the landing page)
DROP POLICY IF EXISTS "anon_insert_leads" ON leads;
CREATE POLICY "anon_insert_leads"
ON leads FOR INSERT
TO anon, authenticated WITH CHECK (true);

-- Only authenticated (admin/sales) can read leads
DROP POLICY IF EXISTS "auth_select_leads" ON leads;
CREATE POLICY "auth_select_leads"
ON leads FOR SELECT
TO authenticated USING (true);

-- Only authenticated can update lead status
DROP POLICY IF EXISTS "auth_update_leads" ON leads;
CREATE POLICY "auth_update_leads"
ON leads FOR UPDATE
TO authenticated USING (true) WITH CHECK (true);

-- Only authenticated can delete leads
DROP POLICY IF EXISTS "auth_delete_leads" ON leads;
CREATE POLICY "auth_delete_leads"
ON leads FOR DELETE
TO authenticated USING (true);

CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);
CREATE INDEX IF NOT EXISTS leads_phone_idx ON leads (phone);
