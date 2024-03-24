import { createClient } from '@supabase/supabase-js'

// Kocham Cie Skarbie jestes najlepsza! Dasz rade :*

const supabase = createClient(
    "https://gxvulggtlpexvpyugrvw.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4dnVsZ2d0bHBleHZweXVncnZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAzNTE4NjQsImV4cCI6MjAyNTkyNzg2NH0.eZ1_r20iWMDBUQJZ4C-0r6_t9QNuvE2lvhOdD5q77zY"
)
 export default supabase;