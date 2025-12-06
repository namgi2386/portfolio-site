import SectionBox, { Bold } from '@/shared/ui/section-box/SectionBox';

export default function ProfileInfo() {
  return (
    <SectionBox>
      <div className="space-y-6">
        <div>
          <Bold>React, Next.js, TypeScript</Bold> 중심의 웹 개발 역량을 쌓은 프론트엔드 개발자입니다.
        </div>
        <div>
          <Bold>팀장</Bold>으로서 6인 규모 프로젝트를
          <Bold> 기간 내 성공적으로 완성</Bold>한 경험이 있고, <Bold>팀원</Bold>으로는
          <Bold> 새로운 기술 스택을 빠르게 </Bold>
          습득하여 팀 속도에 맞춰합니다.
        </div>
        <div>
          <Bold>기능 완성</Bold>을 우선시 하며, 팀의 개발 속도에 맞춰 <Bold>안정적</Bold>인 결과물을 만들어 냅니다.
        </div>
      </div>
    </SectionBox>
  );
}
