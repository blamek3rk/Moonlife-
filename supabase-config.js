/* ════════════════════════════════════════════
   SUPABASE CONFIGURATION
   ════════════════════════════════════════════ */

// Replace these with your actual Supabase project credentials
// Get them from: https://app.supabase.com/project/_/settings/api
const SUPABASE_URL = 'https://bqirflznfqkpbvssgxjd.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxaXJmbHpuZnFrcGJ2c3NneGpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxNTUwOTEsImV4cCI6MjA4NTczMTA5MX0.KYl-cgpUuDrRW2K7Vg0-NXljM0GTnuuvEydlE31WTRM';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Export for use in other files
window.supabaseClient = supabase;
