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
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 border border-gray-200">
      <Link to={`/blog/${blog.id}`}>
        <h2 className="text-xl font-bold text-gray-700/90 hover:text-orange-600 transition-colors mb-3 line-clamp-2 leading-6">
          {blog.title}
        </h2>
      </Link>

      <p className="text-gray-500 mb-4 line-clamp-3 leading-5">
        {blog.content}
      </p>

      <div className="flex items-center justify-between text-sm text-gray-600 font-medium mb-3 flex-wrap">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <User size={20} className="mr-1 text-gray-400" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={18} className="mr-1 text-gray-400" />
            <span>{new Date(blog.date).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="flex items-center mt-1">
          <Tag size={18} className="mr-1 text-gray-400" />
          <span className="px-2 py-1 bg-orange-400/10 text-orange-600 text-sm rounded-full">
            {blog.category}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <Link
          to={`/blog/${blog.id}`}
          className="text-orange-600 hover:text-orange-700 font-medium text-sm"
        >
          Read More
        </Link>

        <div className="flex items-center space-x-2">
          <Link
            to={`/edit/${blog.id}`}
            className="p-2 text-gray-500 rounded-lg transition-colors"
          >
            <Edit size={18} />
          </Link>
          <button
            onClick={handleDelete}
            className="p-2 text-red-600 rounded-lg transition-colors"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
