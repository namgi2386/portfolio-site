import CountingStars from '@/shared/ui/counting-star/CountingStars';
import ThemeToggle from '@/shared/ui/nav/ThemeToggle';

export default function TestPage() {
  return (
    <div className="max-w-2xl mx-auto p-8 mt-16">
      <div>
        <div className="h-50 border">
          <CountingStars />
          <CountingStars />
          <CountingStars />
          <CountingStars />
          <CountingStars />
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
