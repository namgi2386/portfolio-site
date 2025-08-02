import { blogApi, BlogData } from '@/entities/blogs';
import { useEffect, useState } from 'react';

export const useBlogList = () => {
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await blogApi.getBlogs();
      if (response.status === 'success') {
        setBlogs(response.data);
        setError('');
      } else {
        setError(response.message || 'blogApi.getBlogs response.status error');
      }
    } catch (error) {
      setError(`Fail blogApi.getBlogs: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleBlogClick = (blogUrl: string) => {
    window.open(blogUrl, '_blank', 'noopener,noreferrer');
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return {
    blogs,
    error,
    loading,
    handleBlogClick,
    refetch: fetchBlogs,
  };
};
