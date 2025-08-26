import Image from 'next/image';

export default function ProjectModal2() {
  return (
    <div className=" max-w-6xl mx-auto">
      {/* 헤더 */}
      <div className=" flex justify-between items-start mb-8">
        <h1 className="text-3xl font-bold text-foreground">
          사회초년생 맞춤 예산관리 <span className="text-custompurple">핀테크 앱</span> 서비스
        </h1>
      </div>

      {/* 메인 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 설명 */}
        <div className="space-y-8">
          {/* 1 */}
          <div>
            <h2 className=" text-xl font-bold text-foreground mb-4">웹 개발 경험과 앱개발 경험 비교 및 적용아키텍처</h2>
            <p className="text-foreground leading-relaxed tracking-wider">
              웹의 <span className="text-custompurple ">URL 기반 라우팅</span>과 달리 앱에서는 <span className="text-custompurple ">Navigation Stack</span> 구조로 페이지들이
              <span className="text-custompurple ">LIFO</span> 방식으로 쌓이며, <span className="text-custompurple ">push/pop</span>을 통한 데이터 전달과 상태 관리가 필요함을
              학습했습니다. <span className="text-custompurple ">Clean Architecture + Repository Pattern</span>을 통해 스택 간 데이터 동기화 문제를 해결하고, 다양한 자료 유형의 새로 다른
              컬렉션을 조건부 로직으로 통합 처리하는 확장 가능한 구조를 구축했습니다.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className=" text-xl font-bold text-foreground mb-4">송금프로세스 설계 및 Riverpod 상태관리 최적화</h2>
            <p className="text-foreground leading-relaxed tracking-wider">
              웹의 단순한 폼 제출과 달리 <span className="text-custompurple ">모바일 금융 앱</span>에서는 7개 페이지에 걸친{' '}
              <span className="text-custompurple ">보안 중심</span>의 복잡한 플로우가 필요함을 학습하고, 송금 완료 후 계좌 정보가 업데이트되지 않는 문제를 통해{' '}
              <span className="text-custompurple ">Riverpod</span>의 <span className="text-custompurple ">상태 캐싱 동작 원리</span>를 이해했습니다.{' '}
              <span className="text-custompurple ">MVVM</span> 패턴과
              <span className="text-custompurple ">GoRouter</span> 조합으로 안정적인 데이터 전달 구조를 설계하고, <span className="text-custompurple ">Provider</span> 캐시 무
              효화를 통한 <span className="text-custompurple ">실시간 데이터 동기화</span>를 구현했습니다.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className=" text-xl font-bold text-foreground mb-4">RSA-AES 하이브리드 암호화 시스템 설계 및 Dio 인터셉터 구현</h2>
            <p className="text-foreground leading-relaxed tracking-wider">
              서비스 특성상 모바일 금융 앱에서는 <span className="text-custompurple ">중단간 안전화</span>가 필수이며, <span className="text-custompurple ">RSA</span>와
              <span className="text-custompurple ">AES</span>를 조합한 <span className="text-custompurple ">하이브리드 암호화</span> 보안 설정을 모두 학보했습니다.{' '}
              <span className="text-custompurple ">Dio 인터셉터</span>를 통해 기존 API 코드 수정 없이 투명한 암호화 레이어를 제공하여, 레거 시 코드 호환성을 유지하면서도 다른 API에 쉽게
              확장 가능한 <span className="text-custompurple ">재사용 가능한 보안 아키텍처</span>를 완성했습니다.
            </p>
          </div>
        </div>

        {/* 이미지 */}
        <div className="relative min-h-[300px] overflow-hidden">
          <Image alt="fintech-app-img-1" src="/images/projects/mm02.png" fill className="object-contain" quality={85} priority />
        </div>
      </div>

      {/* 서브섹션 */}
      <div className="mt-8">
        <h2 className=" text-xl font-bold text-foreground mb-4 inline-block bg-no3/30 px-4 py-2 rounded-lg">웹과 모바일 개발 환경의 네트워크 차이점 학습</h2>
        <div className="text-foreground leading-relaxed space-y-4 tracking-wider">
          <p>
            웹 개발과 달리 모바일 앱 개발에서는 로컬 네트워크 환경의 복잡성을 직면하게 되었습니다. 웹 개발 시에는 브라우저와 서버가 같은 localhost 환경에서 동작하여 http://localhost:3000으로 간단히
            통신이 가능하지만, Flutter 앱은 실제 디바이스나 에뮬레이터에서 실행되어 개발자의 노트북과 물리적으로 분리된 네트워크 환경에 위치했습니다. 이로인해 DHCP로 인한 IP 주소 변경이라는 예상치
            못한 번수를 경험했습니다. 웹 개발에서는 한 번 설정한 localhost가 변경될 일이 없지만, 모바일 개발에서는 노트북의 IP가 재부팅이나 네트워크 재연결 시마다 동적으로 변경되어 .env 파일의 API
            엔드포인트를 지속적으로 관리해야 함을 깨달았습니다. 특히 이더넷과 Wi-Fi가 서로 다른 서브넷을 사용할 수 있다는 점은 웹 개발에서는 고려할 필요가 없던 네트워크 레이어의 복잡성이었습니다.
          </p>
          <p>이를 통해 모바일 개발 환경의 특수성과 네트워크 기초 지식의 중요성을 학습했습니다.</p>
          <p>
            단순히 예러를 해결하는 것을 넘어, DHCP 메커니즘, 로컬 네트워크 라우팅, 그리고 개발 환경 설정 관리의 중요성을 이해하게 되었으며, 앞으로 모바일 앱 개발 시 환경 설정의 변동성을 고려한 보다
            유연한 개발 환경 구축 방법을 고민하게 되는 계기가 되었습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
