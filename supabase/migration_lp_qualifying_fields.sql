-- HyperDial — leads table migration: LP qualifying fields
-- Run this in the Supabase SQL editor (Dashboard → SQL → New query).
-- This is ADDITIVE ONLY — safe to run on the existing live `leads` table.
--
-- These columns are written by app/api/lead/route.ts (the business-communication /
-- customer-service / service-automation landing page forms) but were missing from
-- this repo's migration files — they existed on the original production Supabase
-- project only, added directly via the dashboard without a checked-in migration.
-- Discovered during the Hyperdial1 Supabase migration when a live write failed with
-- "Could not find the 'countries' column of 'leads' in the schema cache".

alter table public.leads
  add column if not exists end_users        text,
  add column if not exists countries        text[],
  add column if not exists team_size        text,
  add column if not exists monthly_tickets  text,
  add column if not exists platforms        text[];
