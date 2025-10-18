import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Search, Filter, SortAsc, SortDesc } from "lucide-react";
import BlogCard from "../components/BlogCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { useBlogs, useDeleteBlog } from "../hooks/useBlogs";
import type { Blog } from "../types/blogType";

type SortField = "date" | "title" | "author";
type SortOrder = "asc" | "desc";

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortField, setSortField] = useState<SortField>("date");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");

  const { data: blogs, isLoading, error } = useBlogs();
  const deleteBlogMutation = useDeleteBlog();

  const handleDelete = (id: number) => {
    deleteBlogMutation.mutate(id);
  };

  if (isLoading) return <LoadingSpinner />;
  if (error)
    return (
      <div className="text-center py-12 text-red-600">Error loading blogs</div>
    );

  // Filter and sort blogs
  const filteredAndSortedBlogs = blogs
    ?.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || blog.category === selectedCategory;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      let aValue: string | number = a[sortField];
      let bValue: string | number = b[sortField];

      if (sortField === "date") {
        aValue = new Date(a.date).getTime();
        bValue = new Date(b.date).getTime();
      }

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

  const categories = [
    "all",
    ...new Set(blogs?.map((blog) => blog.category) || []),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Blog Posts</h1>
            <p className="text-gray-600 mt-2">
              Discover amazing stories and share your own
            </p>
          </div>
          <Link
            to="/create"
            className="flex items-center px-6 py-3 bg-gradient-to-r from-[#fc8804] to-[#ffa258] text-white font-semibold rounded-xl hover:from-[#db7503] hover:to-[#fc8804] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Plus size={20} className="mr-2" />
            New Post
          </Link>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-orange-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search blogs by title, content, or author..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <div className="relative">
                <Filter
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sort */}
            <div>
              <div className="relative">
                {sortOrder === "asc" ? (
                  <SortAsc
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                ) : (
                  <SortDesc
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                )}
                <select
                  value={`${sortField}-${sortOrder}`}
                  onChange={(e) => {
                    const [field, order] = e.target.value.split("-") as [
                      SortField,
                      SortOrder
                    ];
                    setSortField(field);
                    setSortOrder(order);
                  }}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white"
                >
                  <option value="date-desc">Newest First</option>
                  <option value="date-asc">Oldest First</option>
                  <option value="title-asc">Title A-Z</option>
                  <option value="title-desc">Title Z-A</option>
                  <option value="author-asc">Author A-Z</option>
                  <option value="author-desc">Author Z-A</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        {filteredAndSortedBlogs?.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-lg border border-orange-100">
            <div className="text-gray-400 mb-4">
              <Search size={64} className="mx-auto" />
            </div>
            <p className="text-gray-500 text-lg mb-4">No blog posts found.</p>
            <Link
              to="/create"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#fc8804] to-[#ffa258] text-white font-semibold rounded-xl hover:from-[#db7503] hover:to-[#fc8804] transition-all duration-300"
            >
              <Plus size={20} className="mr-2" />
              Create First Post
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedBlogs?.map((blog) => (
              <BlogCard key={blog.id} blog={blog} onDelete={handleDelete} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
