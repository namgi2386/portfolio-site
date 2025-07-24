import { createServerClient } from '@/shared/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = createServerClient();
    const { data, error } = await supabase.from('blogs').select('*').order('is_pinned', { ascending: false }).order('created_at', { ascending: false });

    if (error) {
      throw error;
    }
    return NextResponse.json({
      status: 'success',
      data: data,
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'Failed to fetch blogs',
      },
      { status: 500 },
    );
  }
}
