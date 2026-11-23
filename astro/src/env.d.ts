/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly DRIBBBLE_ACCESS_TOKEN?: string;
  readonly NEXT_PUBLIC_GA_MEASUREMENT_ID?: string;
  readonly NEXT_PUBLIC_SUPABASE_URL?: string;
  readonly NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?: string;
  readonly PUBLIC_SUPABASE_URL?: string;
  readonly PUBLIC_SUPABASE_PUBLISHABLE_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
