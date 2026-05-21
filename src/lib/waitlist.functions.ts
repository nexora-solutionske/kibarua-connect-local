import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const EmailSchema = z.object({
  email: z.string().trim().toLowerCase().email().max(320),
});

export const joinWaitlist = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => EmailSchema.parse(input))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin
      .from("waitlist_emails")
      .insert({ email: data.email });

    if (error && error.code !== "23505") {
      console.error("waitlist insert failed", error);
      throw new Error("Could not save your email. Please try again.");
    }

    return { ok: true };
  });
