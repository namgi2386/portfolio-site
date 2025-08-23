import { LikeGetApiResponse, LikePostApiResponse, LikeApiRequest } from '@/app/api/heart/types';
import { createServerClient } from '@/shared/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse<LikeGetApiResponse>> {
  try {
    const supabase = createServerClient();
    const { data, error } = await supabase.from('heart_stats').select('total_count').single();
    if (error) {
      throw error;
    }
    return NextResponse.json({
      success: true,
      data: {
        count: data.total_count,
      },
    });
  } catch (error) {
    console.error('Error get hearts', error);
    return NextResponse.json({
      success: false,
      error: {
        code: 'INTERNAL_SERVER_ERROR For GET',
        message: '잠시 후 다시 시도해주세요.',
      },
    });
  }
}

export async function POST(request: Request): Promise<NextResponse<LikePostApiResponse>> {
  try {
    const supabase = createServerClient();
    const body: LikeApiRequest = await request.json();
    if (!body || !body.action || !['like', 'unlike'].includes(body.action)) {
      return NextResponse.json({
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: '필수 데이터 누락',
        },
      });
    }
    const { error: heartsError } = await supabase.from('heart_logs').insert([
      {
        action: body.action,
      },
    ]);

    if (heartsError) throw heartsError;

    return NextResponse.json({
      success: true,
      data: {
        message: '소중한 좋아요 아주 좋아요',
      },
    });
  } catch (error) {
    console.error('Error post hearts', error);
    return NextResponse.json({
      success: false,
      error: {
        code: 'INTERNAL_SERVER_ERROR For Post',
        message: '잠시 후 다시 시도해주세요.',
      },
    });
  }
}
