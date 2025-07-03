import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

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
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
