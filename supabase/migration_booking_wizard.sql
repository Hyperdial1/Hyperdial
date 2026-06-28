-- HyperDial — leads table migration: booking wizard fields
-- Run this in the Supabase SQL editor (Dashboard → SQL → New query).
-- This is ADDITIVE ONLY — safe to run on the existing live `leads` table.
-- It does not touch or remove any existing column, row, or RLS policy.

alter table public.leads
  add column if not exists first_name           text,
  add column if not exists last_name             text,
  add column if not exists job_title              text,
  add column if not exists company_website        text,
  add column if not exists company_size           text,
  add column if not exists annual_support_volume   text,
  add column if not exists needs                  text[],        -- e.g. {"AI Voice Agent","AI Chat Agent"}
  add column if not exists current_solution        text,
  add column if not exists timeline                text,
  add column if not exists country                 text;

-- Helpful index if you ever filter/report by timeline or company size
create index if not exists leads_timeline_idx on public.leads (timeline);

-- NOTE: the existing `name` and `monthly_call_volume` columns are left in place
-- on purpose for backward compatibility with the old /demo form (LeadForm).
-- The new booking wizard writes both:
--   - first_name + last_name (new)
--   - name = first_name || ' ' || last_name (kept in sync, so old dashboards/
--     queries that rely on `name` keep working without changes)
