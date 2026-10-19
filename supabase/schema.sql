-- FORDESH AFRICA: contact form storage
-- Run this once in Supabase: Dashboard -> SQL Editor -> New query -> paste -> Run.

create table if not exists public.contact_messages (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  name        text not null check (char_length(name) between 1 and 120),
  email       text not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' and char_length(email) <= 200),
  phone       text check (char_length(phone) <= 40),
  subject     text check (char_length(subject) <= 200),
  message     text not null check (char_length(message) between 1 and 5000)
);

-- Row Level Security: visitors may only ADD messages.
-- Nobody using the public key can read, edit or delete them;
-- you view them in the Supabase dashboard (Table Editor).
alter table public.contact_messages enable row level security;

drop policy if exists "Visitors can send messages" on public.contact_messages;
create policy "Visitors can send messages"
  on public.contact_messages
  for insert
  to anon
  with check (true);
