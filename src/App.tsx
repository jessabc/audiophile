
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import DisplayProduct from "./componenets/product/DisplayProduct";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import Checkout from "./pages/Checkout";
import NoPage from "./pages/NoPage";

import { ProductContextProvider } from "./ProductContext";

import './App.css'

function App() {

  return (
    <ProductContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="headphones" element={<Headphones />} />
          <Route path="headphones/:slug" element={<DisplayProduct />} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="speakers/:slug" element={<DisplayProduct />} />
          <Route path="earphones" element={<Earphones />} />
          <Route path="earphones/:slug" element={<DisplayProduct />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ProductContextProvider>
  )
}

export default App
