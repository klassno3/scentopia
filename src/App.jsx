import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProductDetail from "./pages/ProductDetail";
import Discount from "./components/Discount";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <div className="">
        <Navigation />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },

        {
          path: "/product/:id",
          element: <ProductDetail />,
        },
      ],
    },
  ]);
  return (
    <div className="">
      {/* <RouterProvider router={router} /> */}
      <Discount />
    </div>
  );
}

export default App;
