export interface BlogApiResponse<T> {
  status: 'success' | 'error';
  data: T;
  message?: string;
}

export interface BlogData {
  id: number;
  title: string;
  description: string;
  written_date: string;
  created_at: string;
  is_pinned: boolean;
  image_url: string;
  tags: string[];
}

export type BlogListResponse = BlogApiResponse<BlogData[]>;
export type BlogDetailResponse = BlogApiResponse<BlogData>;

export const initialBlog: BlogData = {
  id: 0,
  title: '',
  description: '',
  written_date: '',
  created_at: '',
  is_pinned: false,
  image_url: '',
  tags: [],
};