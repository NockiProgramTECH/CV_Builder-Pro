import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dkkgmfrrscimblrgmmkj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRra2dtZnJyc2NpbWJscmdtbWtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0MTAxMDgsImV4cCI6MjA2Njk4NjEwOH0.JGYxdKMM-nKa7m4Gm-xMFIr4oNflzmzMhPFPmn_Wboo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);