import { BlogListResponse } from '@/entities/blogs/model/types';
import axios from 'axios';

export const blogApi = {
  async getBlogs(): Promise<BlogListResponse> {
    const response = await axios.get<BlogListResponse>('/api/blog');
    return response.data;
  },
};
