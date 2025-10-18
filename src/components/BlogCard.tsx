import React from "react";
import { Link } from "react-router-dom";
import { Calendar, User, Tag, Edit, Trash2 } from "lucide-react";
import type { Blog } from "../types/blogType";

interface BlogCardProps {
  blog: Blog;
  onDelete: (id: number) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      onDelete(blog.id);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-orange-100">
      <Link to={`/blog/${blog.id}`}>
        <h2 className="text-xl font-bold text-gray-800 hover:text-orange-600 transition-colors mb-3 line-clamp-2">
          {blog.title}
        </h2>
      </Link>

      <p className="text-gray-600 mb-4 line-clamp-3">{blog.content}</p>

      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <User size={16} className="mr-1 text-orange-500" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={16} className="mr-1 text-orange-500" />
            <span>{new Date(blog.date).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="flex items-center">
          <Tag size={16} className="mr-1 text-orange-500" />
          <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
            {blog.category}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <Link
          to={`/blog/${blog.id}`}
          className="text-orange-600 hover:text-orange-700 font-medium text-sm"
        >
          Read More →
        </Link>

        <div className="flex items-center space-x-2">
          <Link
            to={`/edit/${blog.id}`}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <Edit size={16} />
          </Link>
          <button
            onClick={handleDelete}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
