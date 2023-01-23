import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/main.css";
import "./style/icons.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
