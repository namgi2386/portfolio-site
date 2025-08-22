import { BlogApiResponse } from '@/entities/blogs/model/types';
import axios from 'axios';

export const blogApi = {
  async getBlogs(): Promise<BlogApiResponse> {
    const response = await axios.get<BlogApiResponse>('/api/blog');
    return response.data;
  },
};
