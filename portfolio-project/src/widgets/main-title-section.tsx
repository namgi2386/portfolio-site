export default function MainTitleSection() {
  return (
    <div className="w-full flex justify-center h-screen items-center">
      <div className="-space-y-2 md:-space-y-3 lg:-space-y-4">
        <h1 className="font-paperlogy font-medium text-[1.1rem] md:text-[1.3rem] lg:text-[1.6rem] light:text-no4 text-no3 transition-all duration-300 ease-in-out">
          계획보다 실행을, 완벽보다 완성을,
        </h1>
        <h1 className="font-paperlogy text-[2rem] md:text-[2.4rem] lg:text-[3rem] font-bold transition-all duration-300 ease-in-out">
          결국 해내는 개발자 <span className="text-no4">임남기</span> 입니다.
        </h1>
      </div>
    </div>
  );
}
