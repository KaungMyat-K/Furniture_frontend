import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import Error from "./pages/Error";
import About from "./pages/About";
import Blog from "./pages/blogs/Blog";
import BlogDetail from "./pages/blogs/BlogDetail";
import BlogRootLayout from "./pages/blogs/BlogRootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blogs",
        element: <BlogRootLayout />,
        children: [
          {
            index: true,
            element: <Blog />,
          },
          {
            path: ":postId",
            element: <BlogDetail />,
          },
        ],
      },
    ],
  },
]);
