import { BlogListApiResponse } from '@/app/api/blog/types';
import { createServerClient } from '@/shared/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET():Promise<NextResponse<BlogListApiResponse>> {
  try {
    const supabase = createServerClient();
    const { data, error } = await supabase.from('blogs').select('*').order('is_pinned', { ascending: false }).order('created_at', { ascending: false });

    if (error) {
      throw error;
    }
    return NextResponse.json({
      success: true,
      data: data,
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({
      success: false,
      error: {
        code: 'INTERNAL_SERVER_ERROR For GET',
        message: '잠시 후 다시 시도해주세요.',
      },
    });
  }
}
