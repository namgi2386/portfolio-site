import { BlogData } from '@/entities/blogs';
import { BsFillPinAngleFill } from 'react-icons/bs';
import Image from 'next/image';

interface BlogCardProps {
  blog: BlogData;
  onClick: (blogUrl: string) => void;
}

export const BlogCard = ({ blog, onClick }: BlogCardProps) => {
  return (
    <div onClick={() => onClick(blog.blog_url)} className="rounded-lg overflow-hidden cursor-pointer flex flex-col shadow-custom group">
      <div className="aspect-video relative overflow-hidden">
        {/* 핀 */}
        {blog.is_pinned && (
          <div className="absolute top-2 right-2 z-10">
            <BsFillPinAngleFill className="text-background text-xl" />
          </div>
        )}
        {/* 태그 */}
        <div className="opacity-0 group-hover:opacity-100 duration-200 ease-in-out absolute bottom-2 left-2 z-10 flex items-center flex-wrap gap-0.5 max-w-4/5 bg-black/90 rounded-xl px-2 py-1">
          {blog.tags.map((tag, i) => (
            <span key={i} className="text-xs font-sans tracking-normal text-no0 px-2 py-0.5 rounded">
              # {tag}
            </span>
          ))}
        </div>
        {/* 이미지 */}
        <Image src={blog.image_url || '/images/blog/blog1.png'} alt={blog.title} fill className="object-cover duration-300 group-hover:scale-110" />
      </div>
      <div className="p-5 flex flex-col justify-between flex-grow gap-4 bg-background/50">
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-xs text-no2 dark:text-no3">
            {/* 날짜 */}
            <span>{blog.written_date}</span>
            {blog.tags.length > 0 && (
              <>
                <span>•</span>
                {/* prime 태그 */}
                <span>{blog.prime_tag}</span>
              </>
            )}
          </div>
          {/* 제목 */}
          <h3 className="text-lg text-foreground line-clamp-2">{blog.title}</h3>
          {/* 설명 */}
          <p className="text-sm text-no2 dark:text-no3 line-clamp-3">{blog.description}</p>
        </div>
      </div>
    </div>
  );
};
