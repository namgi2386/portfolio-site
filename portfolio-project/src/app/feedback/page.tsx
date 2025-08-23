import FeedbackForm from '@/features/feedback/ui/FeedbackForm';

export default function FeedbackPage() {
  return (
    <main className="min-h-screen w-full max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold font-paperlogy my-12">피드백</h2>
      <FeedbackForm />
    </main>
  );
}
