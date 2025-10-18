import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../utils/api";
import type { Blog, BlogFormData } from "../types/blogType";

// GET all blogs
export const useBlogs = (limit?: number) => {
  return useQuery({
    queryKey: ["blogs", limit],
    queryFn: async (): Promise<Blog[]> => {
      const params = limit ? { limit: limit.toString() } : {};
      const response = await api.get("/blogs", { params });
      return response.data;
    },
  });
};

// GET single blog
export const useBlog = (id: number) => {
  return useQuery({
    queryKey: ["blog", id],
    queryFn: async (): Promise<Blog> => {
      const response = await api.get(`/blogs/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};

// CREATE blog
export const useCreateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (blogData: BlogFormData): Promise<Blog> => {
      const response = await api.post("/blogs", blogData);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};

// UPDATE blog
export const useUpdateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: number;
      data: Partial<BlogFormData>;
    }): Promise<Blog> => {
      const response = await api.put(`/blogs/${id}`, data);
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      queryClient.invalidateQueries({ queryKey: ["blog", data.id] });
    },
  });
};

// DELETE blog
export const useDeleteBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number): Promise<void> => {
      await api.delete(`/blogs/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};
