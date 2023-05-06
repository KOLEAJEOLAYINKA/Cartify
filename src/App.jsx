import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<div>Test</div>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
