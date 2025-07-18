import Image from 'next/image';

export default function ImageTest() {
  return (
    <>
      <div className="text-4xl p-8 text-center font-paperlogy">Test 01 : img태그와 Image컴포넌트 비교</div>
      <hr />
      <div className="w-full justify-center flex gap-8 ">
        <div>
          <LabelTag text="Image컴포넌트 (700kb)" />
          <Image src="/images/test/Monet_LuncheonOnTheGrass.jpg" alt="t-동적이미지-700kb" width={300} height={200} />
          <LabelTag text="Image컴포넌트 (3mb)" />
          <Image src="/images/test/Monet_ImpressionSunrise.jpg" alt="t-동적이미지-3mb" width={300} height={200} />
        </div>
        <div>
          <LabelTag text="img태그 (700kb)" />
          <img src="/images/test/Monet_LuncheonOnTheGrass.jpg" alt="t-동적이미지-700kb" width={300} height={200} />
          <LabelTag text="img태그 (3mb)" />
          <img src="/images/test/Monet_ImpressionSunrise.jpg" alt="t-동적이미지-3mb" width={300} height={200} />
        </div>
      </div>
    </>
  );
}

const LabelTag = ({ text }: { text: string }) => {
  return <div className="mt-4 mb-2 bg-no2 rounded-lg p-0.5 text-xl font-paperlogy text-center">{text}</div>;
};
