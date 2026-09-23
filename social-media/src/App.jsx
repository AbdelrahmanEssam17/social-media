import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";
import AuthLayout from "./Layouts/AuthLayout";
import Feedpage from "./Pages/Feedpage";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import PostDetails from "./Pages/PostDetails";
import Register from "./Pages/Register";
import NotFound from "./Pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Feedpage /> },
      { path: "profile", element: <Profile /> },
      { path: "post-details", element: <PostDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
