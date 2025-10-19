import { createBrowserRouter } from "react-router-dom";
import OnboardingPage from "./pages/OnboardingPage";
import BlogsPage from "./pages/BlogsPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import CreateBlogPage from "./pages/CreateBlogPage";

export const router = createBrowserRouter([
  { path: "/", element: <OnboardingPage /> },
  {
    path: "/blogs",
    element: <BlogsPage />,
  },
  {
    path: "/blog/:id",
    element: <BlogDetailPage />,
  },
  {
    path: "/blog/create",
    element: <CreateBlogPage />,
  },
  {
    path: "*",
    element: <div>Page not found</div>,
  },
]);
