'use client';
import { BlogCard, useBlogList } from '@/features/blog-list';
import TempBlogSection from '@/widgets/blog-temp-section';

export default function BlogSection() {
  const { blogs, error, loading, handleBlogClick, refetch } = useBlogList();

  if (error) {
    return <TempBlogSection />;
  }
  if (loading) {
    <div>
      <h1>Loading blogs...</h1>
      <button onClick={refetch}>새로고침</button>
    </div>;
  }

  return (
    <div className="w-full px-4 py-12 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-paperlogy text-4xl md:text-5xl font-bold text-foreground mb-12">Blog</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-paperlogy tracking-wider">
          {/* 여기에 블로그 입력 */}
          {blogs.length === 0 ? <p className="text-foreground">블로그를 준비중입니다.</p> : blogs.map((blog) => <BlogCard key={blog.id} blog={blog} onClick={handleBlogClick} />)}
        </div>
      </div>
    </div>
  );
}
