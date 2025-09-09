import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import ErrorPage from "./Pages/ErrorPage";
import ResultsPage from "./Pages/ResultsPage";
function App() {
  const [result, setResult] = useState(null);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage setResult={setResult} />} />
        <Route path="/error" element={<ErrorPage result={result}/>} />
        <Route path="/results" element={<ResultsPage result={result}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
