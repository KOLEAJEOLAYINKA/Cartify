import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";

// app Components for routing pages based on routes   
const App = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<CategoryPage/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
