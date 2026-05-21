CREATE TABLE public.waitlist_emails (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX waitlist_emails_email_unique ON public.waitlist_emails (lower(email));

ALTER TABLE public.waitlist_emails ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join the waitlist"
ON public.waitlist_emails
FOR INSERT
TO anon, authenticated
WITH CHECK (
  email IS NOT NULL
  AND length(email) <= 320
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
);
