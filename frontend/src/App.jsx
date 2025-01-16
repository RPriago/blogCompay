import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./components/detail";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;