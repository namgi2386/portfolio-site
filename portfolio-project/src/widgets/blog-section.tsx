'use client';
import { BlogData, BlogListResponse } from '@/entities/blogs/model/types';
import TempBlogSection from '@/widgets/blog-temp-section';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AiOutlinePushpin } from 'react-icons/ai';

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 여기에 블로그 입력 */}
          {blogs.length === 0 ? (
            <p className="text-gray-500">블로그를 준비중입니다.</p>
          ) : (
            blogs.map((blog) => (
              <div key={blog.id} className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="aspect-video bg-gray-700 relative overflow-hidden relative ">
                  {/* 3. 핀 표시 추가 */}
                  {blog.is_pinned && (
                    <div className="absolute top-1 right-1 z-10 bg-rose-500 rounded-full p-1">
                      <AiOutlinePushpin className="text-white text-xl" />
                    </div>
                  )}
                  {/* 이미지 */}
                  <Image src={blog.image_url || '/images/blog/blog1.png'} alt="블로그 포스트 1" fill className="object-cover transition-transform duration-300 hover:scale-110" />
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
                    {/* 날짜 */}
                    <span>{blog.written_date}</span>
                    {blog.tags.length > 0 && (
                      <>
                        <span>•</span>
                        {/* 태그 중 1번 */}
                        <span>{blog.tags[0]}</span>
                      </>
                    )}
                  </div>
                  {/* 제목 */}
                  <h3 className="text-lg font-bold text-white line-clamp-2">{blog.title}</h3>
                  {/* 설명 */}
                  <p className="text-sm text-gray-400 line-clamp-3">{blog.description}</p>
                  <div className="flex items-center space-x-2 flex-wrap gap-1">
                    {blog.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-purple-600 text-white px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
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
