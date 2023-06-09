import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://juoxrnczlnbnzafrboyu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1b3hybmN6bG5ibnphZnJib3l1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE0NjgxMzAsImV4cCI6MTk5NzA0NDEzMH0.2RvigxPICIM5Z5LtfljGKttDrE-hUHZge8VaB5uAd6A')