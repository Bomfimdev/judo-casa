import 'react-native-url-polyfill/auto';

import { createClient } from '@supabase/supabase-js';

import type { Database } from '@/src/types/database';

const url = process.env.EXPO_PUBLIC_SUPABASE_URL ?? '';
const anon = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? '';

export const supabaseConfigured = Boolean(url && anon);

export const supabase = createClient<Database>(url || 'https://placeholder.supabase.co', anon || 'placeholder', {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false,
  },
});
