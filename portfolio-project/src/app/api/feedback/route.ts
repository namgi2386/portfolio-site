import { createServerClient } from '@/shared/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const supabase = createServerClient();
    const body = await request.json();
    if (!body || !body.ratings) {
      return NextResponse.json({
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: '필수 데이터 누락',
        },
      });
    }

    const { data: feedbackData, error: feedbackError } = await supabase
      .from('feedback')
      .insert([
        {
          has_rating: !!body.ratings,
          has_comment: !!body.comment_text,
          has_job_share: !!(body.compony_name || body.job_link),
          has_bug_report: !!body.bug_description,
        },
      ])
      .select('feedback_id')
      .single();

    if (feedbackError) throw feedbackError;

    const feedbackId = feedbackData.feedback_id;

    if (body.ratings) {
      const { error: ratingError } = await supabase.from('feedback_ratings').insert([
        {
          feedback_id: feedbackId,
          portfolio_score: body.ratings.portfolioScore,
          technical_score: body.ratings.technicalScore,
          design_score: body.ratings.designScore,
        },
      ]);
      if (ratingError) throw ratingError;
    }
    if (body.comment_text || body.bug_description || body.company_name || body.job_link) {
      const { error: extraError } = await supabase.from('feedback_extras').insert([
        {
          feedback_id: feedbackId,
          comment_text: body.comment_text || null,
          bug_description: body.bug_description || null,
          company_name: body.company_name || null, 
          job_link: body.job_link || null,
        },
      ]);

      if (extraError) throw extraError;
    }
    return NextResponse.json({
      success: true,
      data: {
        message: '소중한 피드백 감사합니다!',
        feedback_id: feedbackId,
      },
    });
  } catch (error) {
    console.error('Error sending feedback', error);
    return NextResponse.json({
      success: false,
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: '잠시 후 다시 시도해주세요.',
      },
    });
  }
}
