import GlitchText from '@/shared/ui/not-found-text/NotFoundGlitchText';
import TargetCursor from '@/shared/ui/not-found-text/TargetCursor';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <GlitchText speed={4} enableShadows={true} enableOnHover={false} className="cursor-target">
        404 Not Found
      </GlitchText>
      <Link href="/" className="cursor-target bg-no2 text-foreground px-4 py-2 mt-10  rounded-lg hover:bg-no2/50 duration-300 trasition ">
        Come Back Home Bebe
      </Link>
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
    </div>
  );
}
