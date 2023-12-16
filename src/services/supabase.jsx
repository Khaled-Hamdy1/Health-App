import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ctfuvqknojlnfxlkqccc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0ZnV2cWtub2psbmZ4bGtxY2NjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI2NjQ4NTYsImV4cCI6MjAxODI0MDg1Nn0.7Q4Xtp_kJuo7dMeZuAF0ZZKRShJidQvfUSeGmjljvWs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
