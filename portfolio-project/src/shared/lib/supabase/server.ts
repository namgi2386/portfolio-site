import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL || ""
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || ""

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

// 서버 컴포넌트와 API Routes에서 사용할 Supabase 클라이언트
export function createServerClient() {
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false, // 서버에서는 세션 유지 불필요
      autoRefreshToken: false,
    },
  })
}