import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Category from "./pages/Category";
import Product from "./pages/Product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:categoryname" element={<Category />} />
      <Route path="/product/:productid" element={<Product />} />
    </Routes>
  );
}

export default App;
