import { createServerClient } from '@/shared/lib/supabase/server';
import { NextResponse } from 'next/server';

// GET: 모든 메시지 조회
export async function GET() {
  try {
    const supabase = createServerClient();

    const { data, error } = await supabase.from('test_messages').select('*').order('created_at', { ascending: false });

    if (error) {
      throw error;
    }
    console.log('isit? : ', data);

    return NextResponse.json({
      status: 'success',
      data: data || [],
    });
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'Failed to fetch messages',
      },
      { status: 500 },
    );
  }
}

// POST: 새 메시지 추가
export async function POST(request: Request) {
  try {
    const supabase = createServerClient();
    const body = await request.json();

    // 입력값 검증
    if (!body.content || typeof body.content !== 'string') {
      return NextResponse.json(
        {
          status: 'error',
          message: 'Content is required',
        },
        { status: 400 },
      );
    }

    const { data, error } = await supabase
      .from('test_messages')
      .insert([{ content: body.content }])
      .select()
      .single();

    if (error) {
      throw error;
    }

    return NextResponse.json({
      status: 'success',
      data,
    });
  } catch (error) {
    console.error('Error creating message:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'Failed to createe message',
      },
      { status: 500 },
    );
  }
}
