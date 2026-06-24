-- HyperDial — leads table
-- Run this in the Supabase SQL editor (Dashboard → SQL → New query).

create extension if not exists "pgcrypto";

create table if not exists public.leads (
  id                   uuid primary key default gen_random_uuid(),
  created_at           timestamptz not null default now(),
  name                 text not null,
  work_email           text not null,
  company              text,
  phone                text,
  vertical             text,
  monthly_call_volume  text,
  message              text,
  source               text default 'demo_form',
  status               text default 'new'   -- new | contacted | booked | closed
);

-- Useful indexes
create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_email_idx       on public.leads (work_email);

-- Row Level Security: lock the table down.
-- The API route uses the SERVICE ROLE key, which bypasses RLS, so inserts work
-- from the server while the table stays private to the public (anon) key.
alter table public.leads enable row level security;

-- (No anon policies on purpose — only the server can read/write.)
