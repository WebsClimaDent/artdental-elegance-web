// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://snlnzofomkwzoynfiejg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNubG56b2ZvbWt3em95bmZpZWpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2NjE0ODcsImV4cCI6MjA1ODIzNzQ4N30.y310qoGRivcWaCy_FOqBWZQ9x8REOnsIR4rwHF8SjcI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);