'use client';

import useFeedback from '@/features/feedback/model/useFeedback';
import CountingStars from '@/shared/ui/counting-star/CountingStars';

export default function FeedbackForm() {
  const { feedback, isFeedbackSubmitted, submitForm, updateExtra, updateScore } = useFeedback();

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* 왼쪽: 별점 평가 */}
        <div className="lg:col-span-5 gap-6 flex flex-col justify-between">
          <div className="shadow-custom dark:shadow-none dark:bg-no2/50 rounded-lg p-6 md:p-8 text-no1 dark:text-no3 leading-relaxed text-base md:text-lg tracking-wider space-y-12 h-full flex flex-col justify-between">
            <div className="flex flex-col space-y-2">
              <label className="text-lg font-bold text-foreground">완성도 점수</label>
              <CountingStars value={feedback.ratings.portfolioScore} onChange={(rating) => updateScore('portfolioScore', rating)} name="완성도점수" disabled={isFeedbackSubmitted} />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-lg font-bold text-foreground">기술 점수</label>
              <CountingStars value={feedback.ratings.technicalScore} onChange={(rating) => updateScore('technicalScore', rating)} name="기술점수" disabled={isFeedbackSubmitted} />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-lg font-bold text-foreground">디자인 점수</label>
              <CountingStars value={feedback.ratings.designScore} onChange={(rating) => updateScore('designScore', rating)} name="디자인점수" disabled={isFeedbackSubmitted} />
            </div>
          </div>
          <button
            className={`w-full text-white p-4 rounded-lg font-bold text-lg transition-all duration-300 ${
              isFeedbackSubmitted ? 'bg-no2 cursor-not-allowed' : 'bg-no43 hover:bg-no42 dark:bg-no4/30 dark:hover:bg-no42/50 cursor-pointer shadow-lg hover:shadow-xl'
            }`}
            onClick={submitForm}
            disabled={isFeedbackSubmitted}
          >
            {isFeedbackSubmitted ? '피드백 제출 완료' : '피드백 제출'}
          </button>
        </div>

        {/* 오른쪽: 텍스트 입력 */}
        <div className="lg:col-span-7 ">
          <div className="shadow-custom dark:shadow-none dark:bg-no2/50 rounded-lg p-6 md:p-8 text-no1 dark:text-no3 leading-relaxed text-base md:text-lg tracking-wider space-y-6">
            <div className="space-y-3">
              <label className="text-lg font-bold text-foreground">코멘트 내용</label>
              <textarea
                value={feedback.comment_text}
                onChange={(e) => updateExtra('comment_text', e.target.value)}
                placeholder="포트폴리오에 대한 의견을 자유롭게 작성해주세요..."
                disabled={isFeedbackSubmitted}
                className="w-full p-4 border border-no2 dark:border-no3 rounded-lg resize-none min-h-24 bg-transparent text-foreground placeholder-no3/50 focus:outline-none focus:border-custompurple transition-colors duration-300"
              />
            </div>

            <div className="space-y-3">
              <label className="text-lg font-bold text-foreground">버그 신고</label>
              <textarea
                value={feedback.bug_description}
                onChange={(e) => updateExtra('bug_description', e.target.value)}
                placeholder="발견하신 버그나 개선사항이 있다면 알려주세요..."
                disabled={isFeedbackSubmitted}
                className="w-full p-4 border border-no2 dark:border-no3 rounded-lg resize-none min-h-24 bg-transparent text-foreground placeholder-no3/50 focus:outline-none focus:border-custompurple transition-colors duration-300"
              />
            </div>

            <div className="space-y-3">
              <label className="text-lg font-bold text-foreground">
                채용 정보 공유 <span className="text-no2 dark:text-no3 text-sm font-normal">(선택)</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={feedback.company_name}
                  onChange={(e) => updateExtra('company_name', e.target.value)}
                  placeholder="회사명"
                  disabled={isFeedbackSubmitted}
                  className="p-4 border border-no2 dark:border-no3 rounded-lg bg-transparent text-foreground placeholder-no3/50 focus:outline-none focus:border-custompurple transition-colors duration-300"
                />
                <input
                  type="url"
                  value={feedback.job_link}
                  onChange={(e) => updateExtra('job_link', e.target.value)}
                  placeholder="채용공고 링크 또는 이메일"
                  disabled={isFeedbackSubmitted}
                  className="p-4 border border-no2 dark:border-no3 rounded-lg bg-transparent text-foreground placeholder-no3/50 focus:outline-none focus:border-custompurple transition-colors duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
