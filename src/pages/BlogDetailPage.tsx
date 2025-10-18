import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, User, Tag, Edit, Trash2 } from "lucide-react";
import LoadingSpinner from "../components/LoadingSpinner";
import { useBlog, useDeleteBlog } from "../hooks/useBlogs";

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const blogId = parseInt(id || "0");

  const { data: blog, isLoading, error } = useBlog(blogId);
  const deleteBlogMutation = useDeleteBlog();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      deleteBlogMutation.mutate(blogId, {
        onSuccess: () => {
          navigate("/home");
        },
      });
    }
  };

  if (isLoading) return <LoadingSpinner />;
  if (error || !blog)
    return <div className="text-center py-12 text-red-600">Blog not found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <Link
          to="/home"
          className="inline-flex items-center text-orange-600 hover:text-orange-800 mb-6 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Blogs
        </Link>

        {/* Blog Content */}
        <article className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100">
          <header className="border-b border-orange-200 pb-6 mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-4 text-gray-600">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <User size={20} className="mr-2 text-orange-500" />
                  <span className="font-medium">{blog.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={20} className="mr-2 text-orange-500" />
                  <span>
                    {new Date(blog.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Link
                  to={`/edit/${blog.id}`}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Edit size={18} className="mr-1" />
                  Edit
                </Link>
                <button
                  onClick={handleDelete}
                  className="flex items-center text-red-600 hover:text-red-800 transition-colors"
                >
                  <Trash2 size={18} className="mr-1" />
                  Delete
                </button>
              </div>
            </div>

            <div className="flex items-center mt-4">
              <Tag size={20} className="text-orange-500 mr-2" />
              <span className="px-4 py-2 bg-orange-100 text-orange-800 font-medium rounded-full">
                {blog.category}
              </span>
            </div>
          </header>

          <div className="prose max-w-none">
            <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
              {blog.content}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetailPage;
