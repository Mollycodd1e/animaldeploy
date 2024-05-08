import { createClient } from '@supabase/supabase-js'
import { Database } from './supabase'

const supabaseURL = 'https://umekwzpqnmixqkxyclly.supabase.co'
const supabasePunlicKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZi' +
	'I6InVtZWt3enBxbm1peHFreHljbGx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNjYxNz' +
	'gsImV4cCI6MjAzMDc0MjE3OH0.q98hi8mNNMdihhXf8_c46Nb4-GL5rfkQJICz' +
	'OVPLj1M'

interface IClientDataProps {
	id: string
	created_at: string
	author: string | null
	news: string | null
}

const supabaseData = createClient<Database>(supabaseURL, supabasePunlicKey)

export default supabaseData

