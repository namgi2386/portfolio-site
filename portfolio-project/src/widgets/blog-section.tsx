'use client';
import { BlogData, BlogListResponse } from '@/entities/blogs/model/types';
import TempBlogSection from '@/widgets/blog-temp-section';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BsFillPinAngleFill } from 'react-icons/bs';

export default function BlogSection() {
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  const [error, setError] = useState('');
  const getBlogs = async () => {
    try {
      const response = await axios.get<BlogListResponse>('/api/blog');
      if (response.data.status === 'success') {
        setBlogs(response.data.data);
      } else {
        setError(response.data.message || 'Fail to fetch blogs');
      }
    } catch (error) {
      setError('fail to axios get blogs');
      console.error('axios get error :', error);
    }
  };

  const handleBlogClick = (blogUrl: string) => {
    window.open(blogUrl, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    getBlogs();
  }, []);

  if (error) {
    return <TempBlogSection />;
  }

  return (
    <div className="w-full px-4 py-12 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-paperlogy text-4xl md:text-5xl font-bold text-foreground mb-12">Blog</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-paperlogy tracking-wider">
          {/* 여기에 블로그 입력 */}
          {blogs.length === 0 ? (
            <p className="text-foreground">블로그를 준비중입니다.</p>
          ) : (
            blogs.map((blog) => (
              <div key={blog.id} onClick={() => handleBlogClick(blog.blog_url)} className=" rounded-lg overflow-hidden cursor-pointer flex flex-col shadow-custom group">
                <div className="aspect-video relative overflow-hidden relative ">
                  {/* 3. 핀 표시 추가 */}
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
                  <Image src={blog.image_url || '/images/blog/blog1.png'} alt="블로그 포스트 1" fill className="object-cover duration-300 group-hover:scale-110" />
                </div>
                <div className="p-5 flex flex-col justify-between flex-grow gap-4 bg-background/50">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-xs text-no2 dark:text-no3">
                      {/* 날짜 */}
                      <span>{blog.written_date}</span>
                      {blog.tags.length > 0 && (
                        <>
                          <span>•</span>
                          {/* 태그 중 1번 */}
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
            ))
          )}
        </div>
      </div>
    </div>
  );
}
