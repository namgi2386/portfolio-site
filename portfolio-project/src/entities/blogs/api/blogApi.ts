import { BlogClientApiResponse } from '@/entities/blogs/model/types';
import axios from 'axios';

export const blogApi = {
  async getBlogs(): Promise<BlogClientApiResponse> {
    const response = await axios.get<BlogClientApiResponse>('/api/blog');
    return response.data;
  },
};
