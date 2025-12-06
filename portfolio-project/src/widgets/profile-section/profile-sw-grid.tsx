'use client';

import { useState } from 'react';
import { SectionBoxStack } from '@/shared/ui/section-box/SectionBox';
import { SWSKILLS } from '@/shared/config/profile_sw';

const INITIAL_DISPLAY_COUNT = 9;

export default function ProfileSWGrid() {
  const [showAll, setShowAll] = useState(false);

  const displayedSkills = showAll ? SWSKILLS : SWSKILLS.slice(0, INITIAL_DISPLAY_COUNT);

  return (
    <div className=" relative">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Skill & Tools</h2>

      {/* 기술스택 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedSkills.map((skill, index) => (
          <SectionBoxStack key={index} icon1={skill.icon1} icon2={skill.icon2} name1={skill.name1} name2={skill.name2} type={skill.type}>
            <p>{skill.description}</p>
          </SectionBoxStack>
        ))}
      </div>

      {/* 더보기 버튼 */}
      {!showAll && SWSKILLS.length > INITIAL_DISPLAY_COUNT && (
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-15">
          <button onClick={() => setShowAll(true)} className="px-6 py-3  cursor-pointer text-no3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 shadow-md hover:shadow-lg">
            더보기 ({SWSKILLS.length - INITIAL_DISPLAY_COUNT}개 더 보기)
          </button>
        </div>
      )}
    </div>
  );
}
