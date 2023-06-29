import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import NewProducts from "./Pages/NewProducts";
import SingleProductPage from "./Pages/SingleProductPage";

function App() {
  return (
    <>
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="newproduct" element={<NewProducts />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="products/:product_id" element={<SingleProductPage />} />
      </Routes>
    </>
  );
}

export default App;
