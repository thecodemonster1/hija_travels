import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Prevent hard crashes during build/prerender when env vars aren't configured yet.
  // Real auth/database will only work once you set real values.
  if (!url || !anonKey) {
    return createBrowserClient("https://example.supabase.co", "example-anon-key");
  }

  return createBrowserClient(url, anonKey);
}
