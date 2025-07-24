import Image from 'next/image';
import testImage3mb from '../test-assets/Monet_ImpressionSunrise.jpg';
import testImage16mb from '../test-assets/Monet_WomanWithAParasol.jpg';

export default function ImageTest() {
  return (
    <>
      <div className="text-4xl p-8 text-center font-paperlogy">Test 02 : 정적이미지, 동적이미지 비교</div>
      <hr />
      <div className="w-full justify-center flex gap-8">
        <div>
          <LabelTag text="정적이미지 (3mb)" />
          <Image src={testImage3mb} alt="t-정적이미지-3mb" width={300} height={200} placeholder="blur" />
          <LabelTag text="정적이미지 (16mb)" />
          <Image src={testImage16mb} alt="t-정적이미지-16mb" width={300} height={200} placeholder="blur" />
        </div>
        <div>
          <LabelTag text="동적이미지 (3mb)" />
          <Image src="/images/test/Monet_ImpressionSunrise.jpg" alt="t-동적이미지-3mb" width={300} height={200} />
          <LabelTag text="동적이미지 (16mb)" />
          <Image src="/images/test/Monet_WomanWithAParasol.jpg" alt="t-동적이미지-16mb" width={300} height={200} />
        </div>
      </div>
    </>
  );
}

const LabelTag = ({ text }: { text: string }) => {
  return <div className="mt-4 mb-2 bg-no2 rounded-lg p-0.5 text-xl font-paperlogy text-center">{text}</div>;
};
