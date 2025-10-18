import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import LoadingSpinner from "../components/LoadingSpinner";
import { useCreateBlog, useUpdateBlog, useBlog } from "../hooks/useBlogs";
import type { BlogFormData } from "../types/blogType";

const CreateBlogPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const isEditing = Boolean(id);
  const blogId = parseInt(id || "0");
  const navigate = useNavigate();

  const { data: existingBlog, isLoading: isLoadingBlog } = useBlog(blogId);
  const createBlogMutation = useCreateBlog();
  const updateBlogMutation = useUpdateBlog();

  const [formData, setFormData] = useState<BlogFormData>({
    title: "",
    author: "",
    content: "",
    category: "Technology",
  });

  const categories = [
    "Technology",
    "Lifestyle",
    "Programming",
    "Design",
    "Business",
    "Health",
    "Travel",
  ];

  useEffect(() => {
    if (isEditing && existingBlog) {
      setFormData({
        title: existingBlog.title,
        author: existingBlog.author,
        content: existingBlog.content,
        category: existingBlog.category,
      });
    }
  }, [isEditing, existingBlog]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isEditing) {
      updateBlogMutation.mutate(
        { id: blogId, data: formData },
        {
          onSuccess: () => {
            navigate(`/blog/${blogId}`);
          },
        }
      );
    } else {
      createBlogMutation.mutate(formData, {
        onSuccess: () => {
          navigate("/home");
        },
      });
    }
  };

  const isLoading =
    isLoadingBlog ||
    createBlogMutation.isPending ||
    updateBlogMutation.isPending;

  if (isLoadingBlog && isEditing) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-orange-600 hover:text-orange-800 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back
          </button>
          <h1 className="text-3xl font-bold text-gray-800">
            {isEditing ? "Edit Blog Post" : "Create New Blog Post"}
          </h1>
          <div></div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100"
        >
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Title *
              </label>
              <input
                type="text"
                id="title"
                required
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, title: e.target.value }))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder="Enter an engaging title..."
              />
            </div>

            {/* Author */}
            <div>
              <label
                htmlFor="author"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Author *
              </label>
              <input
                type="text"
                id="author"
                required
                value={formData.author}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, author: e.target.value }))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Category *
              </label>
              <select
                id="category"
                required
                value={formData.category}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, category: e.target.value }))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Content */}
            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Content *
              </label>
              <textarea
                id="content"
                required
                rows={12}
                value={formData.content}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, content: e.target.value }))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-vertical"
                placeholder="Write your amazing story here..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-6 border-t border-gray-200">
              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center px-8 py-4 bg-gradient-to-r from-[#fc8804] to-[#ffa258] text-white font-semibold rounded-xl hover:from-[#db7503] hover:to-[#fc8804] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save size={20} className="mr-2" />
                {isLoading
                  ? "Saving..."
                  : isEditing
                  ? "Update Post"
                  : "Create Post"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogPage;
