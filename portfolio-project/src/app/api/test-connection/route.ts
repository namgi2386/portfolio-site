import { createServerClient } from '@/shared/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = createServerClient();
    await supabase.auth.getSession();

    return NextResponse.json({
      status: 'connected',
      message: 'Supabase connection successful',
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: 'error',
        message: `Failed to connect to Supabase ${error}`,
      },
      { status: 500 },
    );
  }
}
