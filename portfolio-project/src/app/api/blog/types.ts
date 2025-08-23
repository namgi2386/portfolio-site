import { ApiResponse } from "@/app/api/_types/common";

export interface BlogRecord {
  id: number;
  title: string;
  description: string;
  written_date: string;
  created_at: string;
  is_pinned: boolean;
  image_url: string;
  tags: string[];
  blog_url: string;
  prime_tag: string;
}

export type BlogListApiResponse = ApiResponse<BlogRecord[]>