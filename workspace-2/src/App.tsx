import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import SignUpPage from "./pages/SignUp";
import SignInPage from "./pages/SignIn";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "signup",
          element: <SignUpPage />,
        },
        {
          path: "signin",
          element: <SignInPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
