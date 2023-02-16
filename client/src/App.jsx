import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import Cart from "./components/Cart";

import {
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import RootLayout from "./components/rootLayout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <ProductList />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
