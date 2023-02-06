import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import Cart from "./components/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Advert from "./components/Advert";
function App() {
  return (
    <>
      <BrowserRouter>
        <Advert />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
