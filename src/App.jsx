import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import Cart from "./pages/Cart";
import ProductDetailPage from "./pages/ProductDetailPage";

// app Components for routing pages based on routes   
const App = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<CategoryPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/PDP" element={<ProductDetailPage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
